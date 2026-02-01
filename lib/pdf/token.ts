import crypto from 'crypto'

function b64urlEncode(buf: Buffer) {
  return buf
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '')
}

function b64urlDecodeToString(input: string) {
  const pad = input.length % 4 === 0 ? '' : '='.repeat(4 - (input.length % 4))
  const b64 = input.replace(/-/g, '+').replace(/_/g, '/') + pad
  return Buffer.from(b64, 'base64').toString('utf8')
}

function hmacSha256(secret: string, data: string) {
  return b64urlEncode(crypto.createHmac('sha256', secret).update(data).digest())
}

function getTokenSecret() {
  const secret = process.env.PDF_TOKEN_SECRET
  if (!secret) {
    throw new Error('Missing env: PDF_TOKEN_SECRET')
  }
  return secret
}

export type PdfTokenPayload = {
  v: 1
  product: 'f2l'
  exp: number // unix seconds
  nonce: string
}

export function createPdfViewToken(args: { product: PdfTokenPayload['product']; ttlSeconds?: number }) {
  const ttlSeconds = args.ttlSeconds ?? 60 * 60 * 24
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds

  const payload: PdfTokenPayload = {
    v: 1,
    product: args.product,
    exp,
    nonce: b64urlEncode(crypto.randomBytes(16)),
  }

  const payloadJson = JSON.stringify(payload)
  const payloadPart = b64urlEncode(Buffer.from(payloadJson, 'utf8'))
  const sig = hmacSha256(getTokenSecret(), payloadPart)
  return `${payloadPart}.${sig}`
}

export function verifyPdfViewToken(token: string): { ok: true; payload: PdfTokenPayload } | { ok: false; reason: string } {
  const [payloadPart, sig] = token.split('.')
  if (!payloadPart || !sig) return { ok: false, reason: 'malformed' }

  const expectedSig = hmacSha256(getTokenSecret(), payloadPart)

  // timing-safe compare
  const a = Buffer.from(sig)
  const b = Buffer.from(expectedSig)
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { ok: false, reason: 'bad_signature' }
  }

  let payload: PdfTokenPayload
  try {
    payload = JSON.parse(b64urlDecodeToString(payloadPart))
  } catch {
    return { ok: false, reason: 'bad_payload' }
  }

  if (payload?.v !== 1) return { ok: false, reason: 'bad_version' }
  if (!payload?.product) return { ok: false, reason: 'bad_product' }
  if (!payload?.exp || typeof payload.exp !== 'number') return { ok: false, reason: 'bad_exp' }

  const now = Math.floor(Date.now() / 1000)
  if (now > payload.exp) return { ok: false, reason: 'expired' }

  return { ok: true, payload }
}


