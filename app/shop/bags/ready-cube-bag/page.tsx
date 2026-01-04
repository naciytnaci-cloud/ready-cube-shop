'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ReadyCubeBagPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/shop" className="hover:text-gray-900 transition-colors duration-200">
              Shop
            </Link>
            <span>/</span>
            <Link href="/shop/bags" className="hover:text-gray-900 transition-colors duration-200">
              Bags
            </Link>
            <span>/</span>
            <span className="text-gray-900">Ready Cube Bag</span>
          </div>
        </nav>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Product Image - Fades in from left */}
          <div className={`w-full ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} transition-all duration-700 ease-out`}>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
              <Image
                src="/products/ready-cube-bag.jpg"
                alt="Ready Cube Bag - Professional speedcubing carrying bag"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Placeholder fallback */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 pointer-events-none">
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

          {/* Right: Product Info - Fades in from right */}
          <div className="flex flex-col justify-center">
            <div className={`space-y-6 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} transition-all duration-700 ease-out delay-150`}>
              {/* Product Name */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Ready Cube Bag
                </h1>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ₺—
                </p>
              </div>

              {/* Description */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Premium speedcubing carrying bag designed for competitive WCA puzzle solvers. 
                  Engineered with professional-grade materials and thoughtful organization for tournament use.
                </p>
              </div>

              {/* Features */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Features
                </h2>
                <ul className="space-y-3">
                  {[
                    'Durable material',
                    'Speedcubing focused interior',
                    'Portable & strap-ready',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-700">
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
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart Button */}
              <div className="pt-6 border-t border-gray-200">
                <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-md font-semibold text-base hover:bg-gray-800 hover:scale-105 active:scale-[0.98] transition-all duration-200 ease-out transform">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

