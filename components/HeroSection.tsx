'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 section-fade-in">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight">
          Ready Cube
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 mb-4 sm:mb-6 font-normal leading-relaxed px-2">
          Speedcubing topluluğu için tasarlanmış ekipmanlar.
        </p>
        <div className="mb-8 sm:mb-10 md:mb-12 space-y-3">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
            İlk ürünümüz: Ready Cube Backpack
          </p>
          <div className="space-y-2">
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Satışlar henüz açık değil
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Ürün üretim aşamasındadır. Satışlar açıldığında duyurulacaktır.
            </p>
          </div>
        </div>
        <Link
          href="/cantalar/ready-cube-backpack"
          className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-red-600 hover:bg-red-600/90 active:bg-red-600/95 text-white font-medium rounded-md transition-all duration-200 text-base sm:text-lg md:text-xl min-w-[160px] min-h-[48px] sm:min-h-[56px] cursor-pointer btn-active-feedback touch-manipulation"
        >
          Ürünü İncele
        </Link>
      </div>
    </section>
  )
}
