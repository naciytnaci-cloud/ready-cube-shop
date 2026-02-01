import Link from 'next/link'
import { STRIPE_PDF_PAYMENT_LINK } from '@/lib/publicConfig'

export default function PdfPageContent() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
              PDF Rehberleri
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Speedcubing için hazırlanmış dijital rehberler.
            </p>
            <div className="mt-8 h-px bg-[#111111]/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative rounded-xl border border-[#111111]/10 bg-white p-6">
              <Link
                href="/pdf/3x3-f2l-yeni-baslayanlar"
                aria-label="3x3 F2L Yeni Başlayanlar Rehberi detay sayfası"
                className="absolute inset-0 rounded-xl"
              />
              <h2 className="text-xl font-semibold text-dark tracking-tight">
                3x3 F2L Yeni Başlayanlar Rehberi
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                PDF hazır. Hemen satın alabilir ve e-posta ile teslim alabilirsin.
              </p>
              <div className="mt-4 text-lg font-semibold text-dark">$0.50</div>
              <div className="mt-6">
                <a
                  href="https://buy.stripe.com/test_6oU3cv04Ubu419N6PG2sM00"
                  className="relative z-10 inline-flex items-center justify-center w-full px-6 py-3 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback"
                  rel="noopener noreferrer"
                >
                  Satın Al – 0.50$
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

