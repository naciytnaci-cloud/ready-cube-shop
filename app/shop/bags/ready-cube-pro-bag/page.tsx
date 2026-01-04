'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NotifyModal from '@/components/NotifyModal'
import CheckoutComingSoonModal from '@/components/CheckoutComingSoonModal'
import ProductDetailSkeleton from '@/components/ProductDetailSkeleton'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ReadyCubeProBagPage() {
  const [mounted, setMounted] = useState(false)
  const [notifyModalOpen, setNotifyModalOpen] = useState(false)
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { t, language } = useLanguage()

  useEffect(() => {
    // Simulate content load
    const timer = setTimeout(() => {
      setIsLoading(false)
      setMounted(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <ProductDetailSkeleton />
  }

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: 'Fits all WCA puzzles',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: 'Protective foam interior',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
        </svg>
      ),
      text: 'Modular compartments',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      text: 'Competition-ready design',
    },
  ]

  const supportedPuzzles = [
    '2x2',
    '3x3 + spare 3x3',
    '4x4, 5x5, 6x6, 7x7',
    'Megaminx',
    'Pyraminx',
    'Skewb',
    'Square-1',
    'Clock',
    'Timer, mat, chargers',
  ]

  const puzzleItems = [
    '2x2',
    '3x3',
    'Spare 3x3',
    '4x4',
    '5x5',
    '6x6',
    '7x7',
    'Megaminx',
    'Pyraminx',
    'Skewb',
    'Square-1',
    'Clock',
    'Timer & Mat',
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">
        {/* Breadcrumb */}
        <nav className="mb-10 sm:mb-12 lg:mb-16" aria-label="Breadcrumb">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-gray-900 transition-colors duration-200">
              {t('product.breadcrumbShop')}
            </Link>
            <span>/</span>
            <Link href="/shop/bags" className="hover:text-gray-900 transition-colors duration-200">
              {t('product.breadcrumbBags')}
            </Link>
            <span>/</span>
            <span className="text-gray-900">Ready Cube Pro Carry Bag (V2)</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24 xl:mb-28">
          {/* Product Header */}
          <div className={`mb-10 sm:mb-12 lg:mb-16 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 sm:duration-700 ease-out`}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-5 sm:mb-6 leading-tight">
              Ready Cube Pro Carry Bag (V2)
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-gray-600 font-normal leading-relaxed mb-4">
              Built for speedcubers. Designed for competition.
            </p>
            <p className="text-base sm:text-xl lg:text-2xl text-[#E10600] font-semibold">
              One bag. Every WCA puzzle.
            </p>
          </div>

          {/* Large Product Image */}
          <div className={`${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 sm:duration-700 ease-out delay-100`}>
            <div className="aspect-[3/2] lg:aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative">
              <Image
                src="/products/ready-cube-pro-bag.jpg"
                alt="Ready Cube Pro Carry Bag (V2) - Premium speedcubing bag"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
              />
              {/* Placeholder fallback */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
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
                  <p className="text-gray-400 text-sm">Product Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 sm:mb-20 lg:mb-24 xl:mb-28"></div>

        {/* Designed for Speedcubers Section */}
        <div className={`mb-16 sm:mb-20 lg:mb-24 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 sm:duration-700 ease-out delay-200`}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('product.designedForSpeedcubers')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-5 sm:space-y-6">
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal">
                {t('product.designedText1')}
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal">
                {t('product.designedText2')}
              </p>
            </div>
            <div className="lg:pl-8 hidden lg:block">
              {/* Empty column for future content or visual balance */}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`mb-16 sm:mb-20 lg:mb-24 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 sm:duration-700 ease-out delay-200`}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
            {t('product.features')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 sm:p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 text-gray-900 mt-0.5">
                  {feature.icon}
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What Fits Inside Section */}
        <div className={`mb-16 sm:mb-20 lg:mb-24 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 sm:duration-700 ease-out delay-250`}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            {t('product.whatFitsInside')}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
            {puzzleItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                <p className="text-sm sm:text-base text-gray-900 font-medium text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center font-normal">
            {t('product.designedToFit')}
          </p>
        </div>

        {/* Interior Capacity Section */}
        <div className={`mb-16 sm:mb-20 lg:mb-24 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 sm:duration-700 ease-out delay-300`}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
            {t('product.interiorCapacity')}
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 font-normal leading-relaxed">
              {t('product.interiorCapacityText')}
            </p>
            <ul className="space-y-3">
              {supportedPuzzles.map((puzzle, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700"
                >
                  <svg
                    className="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-base font-normal">{puzzle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Status Section */}
        <div className={`${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 sm:duration-700 ease-out delay-400`}>
          <div className="text-center max-w-md mx-auto px-4 sm:px-0 space-y-4">
            {/* Notify Button */}
            <button
              onClick={() => setNotifyModalOpen(true)}
              className="w-full border-2 border-[#E10600] text-[#E10600] bg-white py-4 sm:py-5 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg hover:bg-[#E10600] hover:text-white active:scale-[0.98] transition-all duration-200 animate-pulse-subtle"
            >
              {t('product.joinLaunchList')}
            </button>
            
            {/* Checkout Button (Disabled) */}
            <button
              onClick={() => setCheckoutModalOpen(true)}
              className="w-full bg-gray-300 text-gray-600 py-4 sm:py-5 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg cursor-not-allowed hover:bg-gray-400 transition-colors duration-200"
              disabled
              aria-label={language === 'tr' ? 'Ödeme (Yakında)' : 'Checkout (Coming Soon)'}
            >
              {language === 'tr' ? 'Ödeme (Yakında)' : 'Checkout (Coming Soon)'}
            </button>
            
            <p className="text-sm sm:text-base text-gray-600 font-normal">
              {t('product.limitedBatch')}
            </p>
          </div>
        </div>
      </div>

      {/* Notify Modal */}
      <NotifyModal
        isOpen={notifyModalOpen}
        onClose={() => setNotifyModalOpen(false)}
        productName="Ready Cube Pro Carry Bag (V2)"
      />

      {/* Checkout Coming Soon Modal */}
      <CheckoutComingSoonModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />
    </div>
  )
}

