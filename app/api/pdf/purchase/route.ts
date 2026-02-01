import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/smtp'
import { createPdfViewToken } from '@/lib/pdf/token'
import { createPdfAccessRecord } from '@/lib/pdf/access'
import fs from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'

function isValidEmail(input: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)
}

export async function POST(req: Request) {
  try {
    // NOT (ileride):
    // - Stripe entegrasyonu daha sonra eklenecek
    // - Gerçek ödeme akışı sonra bağlanacak
    // - Kullanıcı hesap sistemi daha sonra eklenecek
    // - PDF sayısı ileride artırılacak

    const body = (await req.json()) as { email?: unknown; name?: unknown }
    const name = String(body?.name || '').trim()
    const email = String(body?.email || '').trim()

    if (!name) {
      return NextResponse.json(
        { error: 'NAME_REQUIRED', message: 'Ad alanı zorunludur.' },
        { status: 400 }
      )
    }
    if (!email) {
      return NextResponse.json(
        { error: 'EMAIL_REQUIRED', message: 'E-posta adresi zorunludur.' },
        { status: 400 }
      )
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'EMAIL_INVALID', message: 'Geçerli bir e-posta adresi girin.' },
        { status: 400 }
      )
    }

    // Best-effort "email kaydı" (kalıcı kayıt için ileride DB/Stripe webhooks bağlanacak)
    try {
      const dir = path.join(process.cwd(), 'private', 'purchases')
      await fs.mkdir(dir, { recursive: true })
      const line = JSON.stringify({
        at: new Date().toISOString(),
        name,
        email,
        product: 'f2l',
      })
      await fs.appendFile(path.join(dir, 'purchases.jsonl'), line + '\n', 'utf8')
    } catch {
      // ignore: satın alma akışını bloklamasın
    }

    const token = createPdfViewToken({ product: 'f2l', ttlSeconds: 60 * 60 * 24 * 30 })
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const pdfLink = `${base}/pdf/erisim/${token}`

    await createPdfAccessRecord({ token, product: 'f2l', name, email })

    const subject = 'Ready Cube | F2L PDF Erişimin Hazır'
    const text =
      `Merhaba ${name},\n\n` +
      `F2L Yeni Başlayanlar Rehberi PDF'ine erişimin hazır.\n\n` +
      `Aşağıdaki bağlantı sadece sana özeldir.\n` +
      `Bağlantıyı başkalarıyla paylaşma.\n\n` +
      `PDF'e erişmek için:\n` +
      `${pdfLink}\n\n` +
      `İyi çalışmalar.\n` +
      `Ready Cube`

    const result = await sendEmail({ to: email, subject, text })
    if (!result.sent) {
      return NextResponse.json(
        {
          error: 'SMTP_NOT_CONFIGURED',
          message:
            'E-posta gönderimi bu ortamda yapılandırılmamış. Lütfen SMTP/Gmail env değişkenlerini ayarlayın.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json(
      { error: 'SERVER_ERROR', message: e?.message || 'Unknown error' },
      { status: 500 }
    )
  }
}


