import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { checkPdfAccess } from '@/lib/pdf/access'

export const runtime = 'nodejs'

function getPdfPathForProduct(product: string) {
  // PDF public klasörde olmayacak. Dosyayı repo içinde (ör: private/pdfs) veya sunucuda bir path'te tutabilirsiniz.
  if (product === 'f2l') {
    return (
      process.env.F2L_PDF_FILE_PATH ||
      path.join(process.cwd(), 'private', 'pdfs', 'f2l-baslangic-rehberi.pdf')
    )
  }
  return null
}

export async function GET(_req: Request, ctx: { params: { token: string } }) {
  const token = String(ctx?.params?.token || '')
  if (!token) {
    return new NextResponse('Token gerekli.', { status: 400 })
  }

  let access
  try {
    access = await checkPdfAccess({ token, touch: true })
  } catch (e: any) {
    return new NextResponse(e?.message || 'Erişim kontrolü başarısız.', { status: 500 })
  }

  if (!access.ok) {
    if (access.reason === 'expired' || access.reason === 'maxed') {
      return new NextResponse('Bu erişim süresi dolmuştur.', { status: 410 })
    }
    return new NextResponse('Geçersiz bağlantı.', { status: 403 })
  }

  const pdfPath = getPdfPathForProduct(access.payload.product)
  if (!pdfPath) {
    return new NextResponse('Ürün bulunamadı.', { status: 404 })
  }

  let bytes: Buffer
  try {
    bytes = await fs.readFile(pdfPath)
  } catch {
    return new NextResponse(
      'PDF dosyası sunucuda bulunamadı. Lütfen F2L_PDF_FILE_PATH ayarını kontrol edin.',
      { status: 500 }
    )
  }

  const res = new NextResponse(new Uint8Array(bytes))
  res.headers.set('Content-Type', 'application/pdf')
  // "İndir"i engellemek tam garanti edilemez; inline + no-store ile görüntüleme odaklı davranıyoruz.
  res.headers.set('Content-Disposition', 'inline; filename="f2l-baslangic-rehberi.pdf"')
  res.headers.set('Cache-Control', 'private, no-store, max-age=0, must-revalidate')
  res.headers.set('Pragma', 'no-cache')
  res.headers.set('X-Content-Type-Options', 'nosniff')
  return res
}


