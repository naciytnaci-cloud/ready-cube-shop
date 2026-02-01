'use client'

import Link from 'next/link'

export default function FeaturedProductSection() {
  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 bg-white px-4 sm:px-6 lg:px-8 section-fade-in border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-12 sm:mb-16 md:mb-20 tracking-tight leading-tight text-center">
          Öne Çıkan Ürün
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Link
            href="/product"
            className="block bg-white border border-[#111111]/10 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 ease-out p-10 sm:p-12 md:p-14 lg:p-16 group"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-5 tracking-tight leading-tight">
              Ready Cube Çanta
            </h3>
            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              Hızlı küp için özel tasarlanmış çanta.
            </p>
            <span className="inline-flex items-center text-base sm:text-lg text-gray-900 font-medium rc-underline rc-underline-brand transition-colors duration-200 ease-out" style={{ textUnderlineOffset: '4px' }}>
              Ürünü İncele →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

