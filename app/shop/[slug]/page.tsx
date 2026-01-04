'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const products: Record<string, {
  name: string
  price: number
  description: string
  features: string[]
}> = {
  '2x2': {
    name: '2x2 Rubik Küp',
    price: 89.99,
    description: 'Professional 2x2 speedcube optimized for fast and smooth turning. Designed for competition-level performance with advanced magnetic system and corner cutting technology.',
    features: [
      'Magnetic system for stability',
      '45° corner cutting',
      'WCA compliant',
      'Smooth turning mechanism',
      'Competition-grade quality',
    ],
  },
  '3x3': {
    name: '3x3 Rubik Küp',
    price: 129.99,
    description: 'World record quality 3x3 speedcube. The preferred choice of top speedcubers worldwide. Features advanced magnetic system and anti-pop mechanism for reliable performance.',
    features: [
      'Advanced magnetic system',
      '45° corner cutting',
      'WCA compliant',
      'Anti-pop mechanism',
      'Premium materials',
    ],
  },
  '4x4': {
    name: '4x4 Rubik Küp',
    price: 199.99,
    description: 'Competition-grade 4x4 speedcube with excellent stability and speed. Optimized for professional use with smooth turning and reliable performance.',
    features: [
      'Anti-pop mechanism',
      'WCA compliant',
      'Smooth and fast turning',
      'Magnetic core',
      'Professional quality',
    ],
  },
  '5x5': {
    name: '5x5 Rubik Küp',
    price: 249.99,
    description: 'Professional 5x5 speedcube with advanced internal mechanism. Perfect stability for larger cubes with premium engineering.',
    features: [
      'Enhanced stability',
      'WCA compliant',
      'Magnetic core',
      'Premium materials',
      'Advanced mechanism',
    ],
  },
  '6x6': {
    name: '6x6 Rubik Küp',
    price: 299.99,
    description: 'High-quality 6x6 speedcube for professional use. Excellent engineering and quality with reliable performance.',
    features: [
      'Anti-lock mechanism',
      'WCA compliant',
      'Premium materials',
      'Advanced internal structure',
      'Professional grade',
    ],
  },
  '7x7': {
    name: '7x7 Rubik Küp',
    price: 349.99,
    description: 'The largest standard speedcube with perfect engineering. Ideal for professional competitions with reliable performance.',
    features: [
      'Advanced internal structure',
      'WCA compliant',
      'Professional quality',
      'Magnetic system',
      'Premium build',
    ],
  },
  'megaminx': {
    name: 'Megaminx',
    price: 179.99,
    description: '12-sided professional Megaminx speedcube. Smooth turning and excellent control for competitive solving.',
    features: [
      'Magnetic system',
      'WCA compliant',
      'Smooth turning',
      'Soft mechanism',
      'Professional quality',
    ],
  },
  'pyraminx': {
    name: 'Pyraminx',
    price: 99.99,
    description: 'Fast and precise Pyraminx speedcube. Easy turning and excellent control for competitive solving.',
    features: [
      'WCA compliant',
      'Soft mechanism',
      'Easy turning',
      'Lightweight construction',
      'Professional grade',
    ],
  },
  'skewb': {
    name: 'Skewb',
    price: 79.99,
    description: 'Compact and fast Skewb speedcube. Smooth turning and professional quality for competitive use.',
    features: [
      'WCA compliant',
      'Lightweight construction',
      'Smooth turning',
      'Magnetic system',
      'Professional quality',
    ],
  },
  'square-1': {
    name: 'Square-1',
    price: 149.99,
    description: 'Professional Square-1 speedcube with special mechanism. High quality and durability for competitive solving.',
    features: [
      'WCA compliant',
      'Special turning mechanism',
      'High quality',
      'Anti-pop system',
      'Professional grade',
    ],
  },
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const [mounted, setMounted] = useState(false)
  const product = products[params.slug]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!product) {
    notFound()
  }

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
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        {/* Product Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {/* Left: Product Image */}
          <div className="w-full">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
              <Image
                src={`/products/${params.slug}.jpg`}
                alt={`${product.name} - Premium speedcube product image`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Placeholder fallback */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 pointer-events-none opacity-0">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Product Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center">
            <div className={`space-y-6 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-500 delay-100`}>
              {/* Product Name */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ₺{product.price.toFixed(2)}
                </p>
              </div>

              {/* Description */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Features
                </h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
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
                <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-md font-semibold text-base hover:bg-gray-800 active:scale-[0.98] transition-all duration-200 ease-out transform">
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

