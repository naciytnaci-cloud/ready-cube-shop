'use client'

import BuyNowButton from '@/components/BuyNowButton'
import { SALES_ENABLED } from '@/lib/publicConfig'

export default function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-white px-4 sm:px-6 lg:px-8 section-fade-in border-t border-[#111111]/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm sm:text-base text-gray-600">
          İhtiyacın olan her şey. Fazlası değil.
        </p>

        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
          Ready Cube Bag
        </h2>

        <div className="mt-10">
          <BuyNowButton
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 sm:py-5 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out text-base sm:text-lg sm:min-w-[220px] min-h-[48px] sm:min-h-[56px] touch-manipulation btn-active-feedback"
          />
          <p className="mt-3 text-sm text-gray-500">
            {SALES_ENABLED ? 'Güvenli ödeme ve hızlı gönderim.' : 'Satışlar yakında açılıyor.'}
          </p>
        </div>
      </div>
    </section>
  )
}


