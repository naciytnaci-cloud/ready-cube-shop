import Link from 'next/link'

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header - Centered */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Shop
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Speedcubers için tasarlandı
          </p>
        </div>

        {/* Product Grid - Centered, Single Product */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {/* Product Card */}
            <Link href="/shop/ready-cube-backpack" className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 active:scale-[0.98] md:active:scale-100 transition-all duration-300 ease-out cursor-pointer block touch-manipulation">
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gray-100 relative overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-300 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-300 ease-out"
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
              <div className="p-6">
                {/* Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-[#E10600] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    COMING SOON
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200 leading-tight">
                  Ready Cube Backpack
                </h3>

                {/* Price Area */}
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-400">
                    YAKINDA
                  </p>
                </div>

                {/* Button - Disabled */}
                <div className="w-full bg-gray-200 text-gray-500 py-3 px-6 rounded-lg font-semibold text-sm text-center">
                  Yakında
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
