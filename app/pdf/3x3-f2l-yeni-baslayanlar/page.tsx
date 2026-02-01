import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import PurchaseSkeleton from '@/app/pdf/3x3-f2l-yeni-baslayanlar/PurchaseSkeleton'

export const metadata: Metadata = {
  title: '3x3 F2L Yeni Başlayanlar Rehberi',
  description:
    "F2L'i ezberlemeden anlamak isteyenler için sade ve güven veren rehber.",
}

export default function F2LBeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
            3x3 F2L Yeni Başlayanlar Rehberi
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            Bu PDF’te, 3x3 Rubik Küp F2L çözümüne yeni başlayanlar için
            öğrenilmesi gereken temel mantık ve en kritik başlangıç teknikleri
            net ve sade bir şekilde anlatılmaktadır. Amaç, F2L’i ezberlemeden
            anlayarak çözmeye başlamanızı sağlamaktır.
          </p>

          <section className="mt-10 space-y-3 border-t border-[#111111]/10 pt-8">
            <a
              href="https://buy.stripe.com/test_6oU3cv04Ubu419N6PG2sM00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback"
            >
              $0.50 • Satın Al
            </a>
            <p className="text-xs sm:text-sm text-gray-500">
              Dijital PDF – ödeme sırasında e-posta alınır.
            </p>
          </section>

        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

