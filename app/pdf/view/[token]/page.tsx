import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import { checkPdfAccess } from '@/lib/pdf/access'

export const runtime = 'nodejs'

export default async function PdfViewTokenPage({ params }: { params: { token: string } }) {
  const token = String(params?.token || '')

  const verified = await checkPdfAccess({ token })
  const isOk = verified.ok

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto">
          {!isOk ? (
            <div className="rounded-xl border border-[#111111]/10 bg-white p-6 sm:p-8 text-center">
              <h1 className="text-2xl sm:text-3xl font-semibold text-dark tracking-tight">
                Bu erişim süresi dolmuştur.
              </h1>
              <p className="mt-3 text-base text-gray-600">
                Yeni bir bağlantı almak için tekrar satın alma talebi oluşturun.
              </p>
            </div>
          ) : (
            <div
              className="relative rounded-xl border border-[#111111]/10 bg-white overflow-hidden"
              onContextMenu={(event) => event.preventDefault()}
            >
              {/* PDF görüntüleme alanı */}
              <div className="h-[75vh] min-h-[520px]">
                <iframe
                  title="PDF Görüntüleyici"
                  className="w-full h-full"
                  src={`/pdf/view/${encodeURIComponent(token)}/file#toolbar=0&navpanes=0&scrollbar=1`}
                  onContextMenu={(event) => event.preventDefault()}
                />
              </div>

              {/* Sağ alt watermark */}
              <div className="pointer-events-none absolute bottom-3 right-4 text-[11px] text-gray-500">
                Ready Cube tarafından yapılmıştır
              </div>
            </div>
          )}
        </div>
      </div>

      <SimpleFooter />
    </div>
  )
}


