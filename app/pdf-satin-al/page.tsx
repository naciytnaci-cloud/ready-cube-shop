import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import { STRIPE_PDF_PAYMENT_LINK } from '@/lib/publicConfig'

export default function PdfPurchasePage() {
  const isReady = Boolean(STRIPE_PDF_PAYMENT_LINK)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <h1 className="text-3xl sm:text-4xl font-semibold text-dark tracking-tight">
          F2L Yeni Başlayanlar Rehberi
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed">
          3×3 Rubik Küp F2L mantığını net ve sade şekilde öğren.
        </p>
        <div className="mt-10 space-y-4">
          {isReady ? (
            <a
              href={STRIPE_PDF_PAYMENT_LINK}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white border border-[#111111]/15 text-dark font-semibold rounded-md min-h-[48px] transition-colors hover:border-red-200 hover:text-red-700 hover:bg-red-50"
              rel="noopener noreferrer"
            >
              Stripe ile Satın Al
            </a>
          ) : (
            <div className="rounded-md border border-[#111111]/10 bg-[#f9f9f9] px-4 py-3 text-sm text-gray-600">
              Stripe ödeme linki henüz tanımlı değil. Lütfen
              <span className="font-semibold"> NEXT_PUBLIC_STRIPE_PDF_PAYMENT_LINK </span>
              değerini ekleyin.
            </div>
          )}
          <p className="text-xs sm:text-sm text-gray-500">
            Ödeme sırasında e-posta adresi istenir ve PDF erişimi o adrese
            gönderilir.
          </p>
        </div>

        <p className="mt-12 text-xs sm:text-sm text-gray-500">
          Ready Cube tarafından hazırlanmıştır. Türkiye odaklı bir projedir.
        </p>
      </main>

      <SimpleFooter />
    </div>
  )
}

