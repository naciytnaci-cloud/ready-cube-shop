import Link from 'next/link'

export default function ShopCTASection() {
  return (
    <section className="py-16 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-white px-4 sm:px-6 lg:px-8 section-fade-in">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight flex items-center justify-center gap-2 sm:gap-3">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0"
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
          İlk Ürünümüz
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto px-2">
          Ready Cube Backpack — speedcubing topluluğu için özenle tasarlanmış ilk ürünümüz.
        </p>
        <div className="mb-8 sm:mb-10 md:mb-12 space-y-2 max-w-2xl mx-auto px-2">
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Satışlar henüz açık değil
          </p>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
            Ürün üretim aşamasındadır. Satışlar açıldığında duyurulacaktır.
          </p>
        </div>
        <Link
          href="/cantalar/ready-cube-backpack"
          className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-red-600 hover:bg-red-600/90 active:bg-red-600/95 text-white font-medium rounded-md transition-all duration-200 text-base sm:text-lg md:text-xl min-w-[180px] sm:min-w-[200px] min-h-[48px] sm:min-h-[56px] cursor-pointer btn-active-feedback touch-manipulation"
        >
          Ürünü İncele
        </Link>
      </div>
    </section>
  )
}

