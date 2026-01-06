import { NextResponse } from 'next/server'
import crypto from 'crypto'

type InitializeBody = {
  name: string
  surname: string
  phone: string
  email: string
  address: string
  city: string
  postalCode: string
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
    const apiKey = getEnv('IYZICO_API_KEY')
    const secretKey = getEnv('IYZICO_SECRET_KEY')
    const baseUrl = process.env.IYZICO_BASE_URL || 'https://sandbox-api.iyzipay.com'

    const price = Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_TRY || '0')
    if (!Number.isFinite(price) || price <= 0) {
      return NextResponse.json(
        { error: 'PRICE_NOT_SET', message: 'Ürün fiyatı tanımlı değil.' },
        { status: 400 }
      )
    }

    const body = (await req.json()) as InitializeBody

    // NOTE: Minimal single-product request (sandbox). Fill buyer identity fields as you go live.
    const conversationId = crypto.randomUUID()
    const uri = '/payment/iyzipos/checkoutform/initialize'

    const requestBody = {
      locale: 'tr',
      conversationId,
      price: price.toFixed(2),
      paidPrice: price.toFixed(2),
      currency: 'TRY',
      installment: '1',
      basketId: 'ready-cube-bag',
      paymentGroup: 'PRODUCT',
      callbackUrl: `${getEnv('NEXT_PUBLIC_SITE_URL')}/api/payments/iyzico/callback`,
      buyer: {
        id: 'buyer-1',
        name: body.name,
        surname: body.surname,
        gsmNumber: body.phone,
        email: body.email,
        identityNumber: '11111111111',
        registrationAddress: body.address,
        city: body.city,
        country: 'Turkey',
        zipCode: body.postalCode,
        ip: '85.34.78.112',
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


