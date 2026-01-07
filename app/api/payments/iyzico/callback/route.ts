import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { sendEmail } from '@/lib/email/smtp'
import { assertProductionSafe, getIyzicoBaseUrl } from '@/lib/iyzico/server'

// iyzico Checkout Form will POST token/paymentStatus to this callback.
// Flow: verify payment -> generate order no -> send confirmation email -> redirect to success/failed page.
export async function POST(req: Request) {
  // Prevent accidental sandbox payments on production
  assertProductionSafe()

  const form = await req.formData()
  const token = String(form.get('token') || '')
  const paymentStatus = String(form.get('paymentStatus') || '')

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  if (!token) {
    const fail = new URL('/order/failed', base)
    fail.searchParams.set('reason', 'missing_token')
    return NextResponse.redirect(fail, 303)
  }

  // Verify payment with iyzico (sandbox/live based on env)
  const apiKey = process.env.IYZICO_API_KEY
  const secretKey = process.env.IYZICO_SECRET_KEY
  const iyzicoBase = getIyzicoBaseUrl()

  let verifiedStatus = paymentStatus
  let buyerEmail = ''
  let paidPrice = ''

  try {
    if (apiKey && secretKey) {
      const uri = '/payment/iyzipos/checkoutform/auth/ecom'
      const rnd = crypto.randomUUID()
      const conversationId = crypto.randomUUID()
      const body = {
        locale: 'tr',
        conversationId,
        token,
      }
      const payload = `${rnd}${uri}${JSON.stringify(body)}`
      const signature = crypto.createHmac('sha1', secretKey).update(payload).digest('base64')

      const res = await fetch(`${iyzicoBase}${uri}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'x-iyzi-rnd': rnd,
          Authorization: `IYZWS ${apiKey}:${signature}`,
        },
        body: JSON.stringify(body),
        cache: 'no-store',
      })

      const data = await res.json()
      // Typical fields: status, paymentStatus, buyerEmail, paidPrice
      verifiedStatus = String(data.paymentStatus || data.status || paymentStatus || '')
      buyerEmail = String(data.buyerEmail || data.buyer?.email || '')
      paidPrice = String(data.paidPrice || '')
    }
  } catch {
    // If verification fails, fallback to callback paymentStatus
  }

  const isSuccess = String(verifiedStatus).toUpperCase() === 'SUCCESS'

  const now = new Date()
  const y = String(now.getFullYear())
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  const orderNo = `RC-${y}${m}${d}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`

  // Send confirmation email (best-effort, SMTP optional)
  if (isSuccess && buyerEmail) {
    const shippingText = 'Türkiye içi gönderim. Kargo bilgisi hazırlanıyor.'
    const subject = `Ready Cube — Sipariş Onayı (${orderNo})`
    const text =
      `Merhaba,\n\n` +
      `Siparişiniz alındı.\n\n` +
      `Sipariş No: ${orderNo}\n` +
      `Ürün: Ready Cube Bag\n` +
      `Tutar: ${paidPrice ? `₺${paidPrice}` : '—'}\n\n` +
      `${shippingText}\n\n` +
      `Herhangi bir sorunuz olursa bu e-postaya yanıt verebilirsiniz.\n` +
      `iletisim@readycube.shop\n\n` +
      `Ready Cube\n`

    try {
      await sendEmail({ to: buyerEmail, subject, text })
    } catch {
      // swallow: user still sees success page
    }
  }

  const url = new URL(isSuccess ? '/order/success' : '/order/failed', base)
  url.searchParams.set('order', orderNo)
  url.searchParams.set('status', isSuccess ? 'success' : 'failed')
  return NextResponse.redirect(url, 303)
}


