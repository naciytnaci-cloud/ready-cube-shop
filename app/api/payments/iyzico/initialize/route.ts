import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { getShipping } from '@/lib/shipping'
import { assertProductionSafe, getIyzicoBaseUrl } from '@/lib/iyzico/server'

type InitializeBody = {
  name: string
  surname: string
  phone: string
  email: string
  address: string
  city: string
  postalCode: string
  identityNumber: string
}

function getEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

function iyzicoHeaders(apiKey: string, secretKey: string, uri: string, body: unknown) {
  const rnd = crypto.randomUUID()
  const payload = `${rnd}${uri}${JSON.stringify(body)}`
  const signature = crypto.createHmac('sha1', secretKey).update(payload).digest('base64')

  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-iyzi-rnd': rnd,
    Authorization: `IYZWS ${apiKey}:${signature}`,
  }
}

export async function POST(req: Request) {
  try {
    // Prevent accidental sandbox payments on production
    assertProductionSafe()

    // Gate: allow payment only when sales are enabled
    const salesEnabled = process.env.NEXT_PUBLIC_SALES_ENABLED === 'true'
    if (!salesEnabled) {
      return NextResponse.json(
        { error: 'SALES_DISABLED', message: 'Satışlar şu an kapalı.' },
        { status: 403 }
      )
    }

    const apiKey = getEnv('IYZICO_API_KEY')
    const secretKey = getEnv('IYZICO_SECRET_KEY')
    const baseUrl = getIyzicoBaseUrl()

    const price = Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_TRY || '0')
    if (!Number.isFinite(price) || price <= 0) {
      return NextResponse.json(
        { error: 'PRICE_NOT_SET', message: 'Ürün fiyatı tanımlı değil.' },
        { status: 400 }
      )
    }

    const body = (await req.json()) as InitializeBody

    const identity = String(body.identityNumber || '').replace(/\D/g, '')
    if (identity.length !== 11) {
      return NextResponse.json(
        { error: 'INVALID_IDENTITY', message: 'T.C. Kimlik No 11 haneli olmalıdır.' },
        { status: 400 }
      )
    }

    const forwardedFor = req.headers.get('x-forwarded-for')
    const realIp = req.headers.get('x-real-ip')
    const customerIp = String((forwardedFor ? forwardedFor.split(',')[0] : realIp) || '127.0.0.1').trim()

    const shipping = getShipping(price)
    if (shipping.status === 'unknown') {
      return NextResponse.json(
        { error: 'SHIPPING_UNKNOWN', message: 'Kargo hesaplanamadı.' },
        { status: 400 }
      )
    }
    const shippingCost = shipping.status === 'paid' ? shipping.cost : 0
    const total = price + shippingCost

    const conversationId = crypto.randomUUID()
    const uri = '/payment/iyzipos/checkoutform/initialize'

    const requestBody = {
      locale: 'tr',
      conversationId,
      price: total.toFixed(2),
      paidPrice: total.toFixed(2),
      currency: 'TRY',
      installment: '1',
      basketId: `ready-cube-bag-${conversationId.slice(0, 8)}`,
      paymentGroup: 'PRODUCT',
      callbackUrl: `${getEnv('NEXT_PUBLIC_SITE_URL')}/api/payments/iyzico/callback`,
      buyer: {
        id: crypto.randomUUID(),
        name: body.name,
        surname: body.surname,
        gsmNumber: body.phone,
        email: body.email,
        identityNumber: identity,
        registrationAddress: body.address,
        city: body.city,
        country: 'Turkey',
        zipCode: body.postalCode,
        ip: customerIp,
      },
      shippingAddress: {
        contactName: `${body.name} ${body.surname}`,
        city: body.city,
        country: 'Turkey',
        address: body.address,
        zipCode: body.postalCode,
      },
      billingAddress: {
        contactName: `${body.name} ${body.surname}`,
        city: body.city,
        country: 'Turkey',
        address: body.address,
        zipCode: body.postalCode,
      },
      basketItems: [
        {
          id: 'ready-cube-bag',
          name: 'Ready Cube Bag',
          category1: 'Bag',
          itemType: 'PHYSICAL',
          price: price.toFixed(2),
        },
        ...(shippingCost > 0
          ? [
              {
                id: 'shipping',
                name: 'Kargo',
                category1: 'Shipping',
                itemType: 'VIRTUAL',
                price: shippingCost.toFixed(2),
              },
            ]
          : []),
      ],
    }

    const res = await fetch(`${baseUrl}${uri}`, {
      method: 'POST',
      headers: iyzicoHeaders(apiKey, secretKey, uri, requestBody),
      body: JSON.stringify(requestBody),
      cache: 'no-store',
    })

    const data = await res.json()
    if (!res.ok) {
      return NextResponse.json({ error: 'IYZICO_ERROR', details: data }, { status: 502 })
    }

    // Expected fields: checkoutFormContent (base64 HTML), token
    return NextResponse.json({
      conversationId,
      token: data.token,
      checkoutFormContent: data.checkoutFormContent,
      status: data.status,
      errorMessage: data.errorMessage,
    })
  } catch (e: any) {
    return NextResponse.json(
      { error: 'SERVER_ERROR', message: e?.message || 'Unknown error' },
      { status: 500 }
    )
  }
}


