'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ProductCardSkeleton from '@/components/ProductCardSkeleton'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BagsPage() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate content load
    const timer = setTimeout(() => {
      setIsLoading(false)
      setMounted(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className={`mb-16 sm:mb-20 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-300 sm:duration-500 ease-out`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('shop.bagsTitle')}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-normal leading-relaxed">
            {t('shop.bagsSubtitle')}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {isLoading ? (
            <ProductCardSkeleton />
          ) : (
            /* Ready Cube Pro Carry Bag (V2) */
            <div className={`group bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                 style={{ transitionDelay: mounted ? '50ms' : '0ms', transitionDuration: mounted ? '300ms' : '0ms' }}>
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block bg-[#E10600] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {t('shop.comingSoon')}
              </span>
            </div>

            {/* Product Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200">
              Ready Cube Pro Carry Bag (V2)
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-8 font-normal">
              A premium carry bag designed to fit all WCA puzzles and accessories.
            </p>

            {/* View Product Button */}
            <Link
              href="/shop/bags/ready-cube-pro-bag"
              className="block w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-sm text-center hover:bg-gray-700 active:scale-[0.98] transition-all duration-150 ease-out"
            >
              {t('shop.viewProduct')}
            </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
