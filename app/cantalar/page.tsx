import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'

export const metadata: Metadata = {
  title: 'Çantalar - Ready Cube',
  description: 'İlk ürünümüz: Ready Cube Backpack. Speedcubing topluluğu için özenle tasarlanmış çanta. Yakında satışta.',
}

export default function CantalarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-18 lg:py-22 xl:py-24 pt-20 sm:pt-24">
        {/* Intro Block */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight flex items-center gap-2 sm:gap-3">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            Ready Cube Çantalar
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 font-normal leading-relaxed max-w-3xl mb-3">
            İlk ürünümüz: Ready Cube Backpack
          </p>
          <div className="space-y-2 mb-3">
            <p className="text-sm sm:text-base text-gray-600 font-medium max-w-3xl">
              Satışlar henüz açık değil
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed max-w-3xl">
              Ürün üretim aşamasındadır. Satışlar açıldığında duyurulacaktır.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 h-px bg-gray-100"></div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Product Card - Ready Cube Backpack */}
          <Link
            href="/cantalar/ready-cube-backpack"
            className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:border-gray-300 hover:shadow-md active:opacity-95 transition-all duration-200 ease-out cursor-pointer block touch-manipulation btn-active-feedback"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 relative overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-gray-300 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-300 ease-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ opacity: 1, transition: 'opacity 300ms ease-in' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 sm:p-6 md:p-8">
              {/* Status Badge */}
              <div className="mb-3">
                <span className="inline-block bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full tracking-wide">
                  Satışlar Henüz Açık Değil
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors duration-200 leading-tight">
                Ready Cube Backpack
              </h3>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6 leading-relaxed font-normal">
                Tüm WCA küpleriniz için tasarlanmış çanta.
              </p>

              {/* Action Button */}
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm sm:text-base font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200 underline-offset-2 min-h-[44px]">
                  İncele
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <SimpleFooter />
    </div>
  )
}

