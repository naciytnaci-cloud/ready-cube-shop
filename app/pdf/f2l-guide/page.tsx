import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import { STRIPE_PDF_PAYMENT_LINK } from '@/lib/publicConfig'

export const metadata: Metadata = {
  title: '3x3 F2L Yeni Başlayanlar Rehberi (PDF)',
  description:
    'F2L mantığını net, sade ve hızlı şekilde öğrenmek isteyenler için dijital PDF rehberi.',
}

export default function F2LGuidePdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em]">
            Dijital PDF
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
            3x3 F2L Yeni Başlayanlar Rehberi (PDF)
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            Bu PDF; F2L’in mantığını ezberlemeden anlamanı, doğru düşünme şeklini
            kurmanı ve en sık yapılan hatalardan kaçınmanı öğretir. İlk F2L
            öğrenenler, 30–60 saniye bandında çözenler ve sade anlatım arayanlar
            için hazırlandı. Ödeme sonrası dijital PDF, e-posta adresine
            gönderilir.
          </p>

          <div className="mt-6 rounded-lg border border-[#111111]/10 bg-white px-4 py-3 text-sm text-gray-700">
            Bu dijital bir üründür. Fiziksel kargo yoktur.
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-xl sm:text-2xl font-semibold text-dark">$0.50</span>
            <div className="h-px flex-1 bg-[#111111]/10" aria-hidden="true" />
          </div>

          <div className="mt-6">
            <a
              href={STRIPE_PDF_PAYMENT_LINK}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback"
              rel="noopener noreferrer"
            >
              Satın Al &amp; PDF’i Email ile Al
            </a>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}


