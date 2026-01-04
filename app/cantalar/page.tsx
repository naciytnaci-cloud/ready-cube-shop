import Link from 'next/link'

export default function CantalarPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            Çantalar
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed">
            Speedcubing için tasarlanmış premium taşıma çözümleri
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Product Card - Ready Cube Backpack */}
          <Link
            href="/cantalar/ready-cube-backpack"
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-gray-300 active:scale-[0.98] md:active:scale-100 transition-all duration-300 ease-out cursor-pointer block touch-manipulation"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 relative overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-gray-300 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-300 ease-out"
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
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 sm:p-8">
              {/* Status Badge */}
              <div className="mb-3">
                <span className="inline-block bg-gray-100 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-full tracking-wide">
                  Yakında
                </span>
              </div>

              {/* Product Name */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200 leading-tight">
                Ready Cube Backpack
              </h3>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed font-normal">
                Tüm WCA küpleriniz için özel tasarlanmış premium çanta.
              </p>

              {/* Action Button */}
              <div className="mt-auto">
                <span className="inline-flex items-center text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#E10600] transition-colors duration-200">
                  Ürünü İncele
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

          {/* Future products can be added here */}
        </div>
      </div>
    </div>
  )
}

