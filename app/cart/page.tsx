'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

// Mock cart items for UI demonstration
const mockCartItems = [
  {
    id: 'ready-cube-bag',
    name: 'Ready Cube Bag',
    variant: 'Black',
    price: 199.99,
    quantity: 1,
    image: '/products/ready-cube-bag.jpg',
  },
  {
    id: 'speedcube-3x3',
    name: 'Speedcube 3x3',
    variant: 'Stickerless',
    price: 89.99,
    quantity: 2,
    image: '/products/speedcube-3x3.jpg',
  },
]

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCart()
  const [mounted, setMounted] = useState(false)
  
  // Use mock data if cart is empty, otherwise use real cart items
  const displayItems = items.length > 0 ? items : mockCartItems
  const isUsingMockData = items.length === 0
  
  // Mock state for quantity changes (UI only)
  const [mockQuantities, setMockQuantities] = useState<Record<string, number>>(
    mockCartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  )
  
  const handleMockQuantityChange = (id: string, delta: number) => {
    if (isUsingMockData) {
      setMockQuantities((prev) => ({
        ...prev,
        [id]: Math.max(1, (prev[id] || 1) + delta),
      }))
    } else {
      const item = items.find((i) => i.id === id)
      if (item) {
        updateQuantity(id, item.quantity + delta)
      }
    }
  }
  
  const handleMockRemove = (id: string) => {
    if (isUsingMockData) {
      setMockQuantities((prev) => {
        const newQuantities = { ...prev }
        delete newQuantities[id]
        return newQuantities
      })
    } else {
      removeItem(id)
    }
  }
  
  // Calculate totals
  const calculateSubtotal = () => {
    if (isUsingMockData) {
      return mockCartItems.reduce((sum, item) => {
        const qty = mockQuantities[item.id] || 0
        return qty > 0 ? sum + item.price * qty : sum
      }, 0)
    }
    return getTotal()
  }
  
  const subtotal = calculateSubtotal()
  const shipping = 0 // Placeholder
  const total = subtotal + shipping
  
  // Filter out removed items
  const visibleItems = isUsingMockData
    ? mockCartItems.filter((item) => (mockQuantities[item.id] || 0) > 0)
    : displayItems

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className={`mb-8 sm:mb-12 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-300 sm:duration-500`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Your Cart
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Review your items and proceed to checkout
          </p>
        </div>

        {visibleItems.length === 0 ? (
          /* Empty Cart */
          <div className={`text-center py-16 sm:py-24 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 sm:duration-500 delay-50 sm:delay-100`}>
            <div className="max-w-md mx-auto">
              <svg
                className="w-24 h-24 mx-auto mb-6 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Start shopping to add items to your cart
              </p>
              <Link
                href="/shop"
                className="inline-block bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 hover:scale-105 active:scale-[0.98] transition-all duration-200 ease-out transform"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {visibleItems.map((item, index) => {
                const quantity = isUsingMockData
                  ? mockQuantities[item.id] || 0
                  : item.quantity
                const itemTotal = item.price * quantity
                
                return (
                  <div
                    key={item.id}
                    className={`bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-200 sm:duration-300 ${
                      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: mounted ? `${index * 30}ms` : '0ms' }}
                  >
                    <div className="flex gap-4 sm:gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
                          <Image
                            src={item.image || `/products/${item.id}.jpg`}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 80px, 96px"
                            loading="lazy"
                            quality={75}
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {item.name}
                            </h3>
                            {'variant' in item && typeof item.variant === 'string' && (
                              <p className="text-sm text-gray-500 mb-2">{item.variant}</p>
                            )}
                            <p className="text-lg font-bold text-gray-900">
                              ₺{item.price.toFixed(2)}
                            </p>
                          </div>
                          {/* Remove Button */}
                          <button
                            onClick={() => handleMockRemove(item.id)}
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0 p-1 hover:scale-110"
                            aria-label={`Remove ${item.name}`}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <label className="text-sm font-medium text-gray-700">
                            Quantity:
                          </label>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button
                              onClick={() => handleMockQuantityChange(item.id, -1)}
                              className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                              aria-label="Decrease quantity"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M20 12H4"
                                />
                              </svg>
                            </button>
                            <span className="px-4 py-1.5 text-sm font-medium text-gray-900 min-w-[3rem] text-center border-x border-gray-300">
                              {quantity}
                            </span>
                            <button
                              onClick={() => handleMockQuantityChange(item.id, 1)}
                              className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                              aria-label="Increase quantity"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 ml-auto">
                            ₺{itemTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className={`bg-white border border-gray-200 rounded-lg p-6 sticky top-24 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-300 sm:duration-500 delay-100 sm:delay-200`}>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {/* Subtotal */}
                  <div className="flex justify-between text-base text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-medium">₺{subtotal.toFixed(2)}</span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between text-base text-gray-700">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-500">
                      Calculated at checkout
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold text-gray-900">
                      <span>Total</span>
                      <span>₺{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-[#E10600] text-white py-4 px-6 rounded-md font-semibold text-base hover:bg-[#b90000] hover:scale-105 active:scale-[0.98] transition-all duration-200 ease-out transform mb-4">
                  Proceed to Checkout
                </button>

                {/* Continue Shopping Link */}
                <Link
                  href="/shop"
                  className="block text-center text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
