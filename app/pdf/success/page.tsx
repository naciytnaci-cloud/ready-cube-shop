import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'

export const metadata: Metadata = {
  title: 'Teşekkürler',
  description: 'Ödemeniz alındı. PDF erişimi e-posta adresinize gönderilecektir.',
}

export default function PdfSuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-[#111111]/10 bg-white p-6 sm:p-8 text-center">
            <div className="inline-flex items-center border border-emerald-200 bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              Teşekkürler
            </div>
            <h1 className="mt-4 text-2xl sm:text-3xl font-semibold text-dark tracking-tight">
              Ödemeniz başarıyla alındı.
            </h1>
            <p className="mt-3 text-base text-gray-600">
              PDF, satın alma sırasında girdiğiniz e-posta adresine en kısa
              sürede gönderilecektir.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Eğer 24 saat içinde e-posta ulaşmazsa, lütfen bizimle iletişime
              geçin.
            </p>
          </div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  )
}


