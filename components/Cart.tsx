'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

// Mock cart items for UI demonstration
const mockCartItems = [
  {
    id: 'ready-cube-bag',
    name: 'Ready Cube Çanta',
    variant: 'Siyah',
    price: 199.99,
    quantity: 1,
    image: '/products/ready-cube-bag.jpg',
  },
  {
    id: 'speedcube-3x3',
    name: 'Hızlı Küp 3x3',
    variant: 'Etiketsiz',
    price: 89.99,
    quantity: 2,
    image: '/products/speedcube-3x3.jpg',
  },
]

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, getTotal } = useCart()
  
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
  
  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:max-w-[360px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Alışveriş sepeti"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Sepetiniz</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:scale-110"
              aria-label="Sepeti kapat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {visibleItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  className="w-16 h-16 text-gray-300 mb-4"
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
                <p className="text-gray-900 text-lg font-medium mb-2">Sepetiniz boş</p>
                <p className="text-gray-600 text-sm">Sepetinize ürün eklemek için alışverişe başlayın</p>
              </div>
            ) : (
              <div className="space-y-4">
                {visibleItems.map((item) => {
                  const quantity = isUsingMockData
                    ? mockQuantities[item.id] || 0
                    : item.quantity
                  const itemTotal = item.price * quantity
                  
                  return (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        {/* Product Thumbnail */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
                            <Image
                              src={item.image || `/products/${item.id}.jpg`}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="80px"
                              loading="lazy"
                              quality={75}
                            />
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                                {item.name}
                              </h3>
                              {'variant' in item && typeof item.variant === 'string' && (
                                <p className="text-xs text-gray-500">{item.variant}</p>
                              )}
                            </div>
                            {/* Remove Button */}
                            <button
                              onClick={() => handleMockRemove(item.id)}
                              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0 p-1 hover:scale-110"
                              aria-label={`Kaldır: ${item.name}`}
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
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* Price */}
                          <p className="text-sm font-semibold text-gray-900 mb-3">
                            ₺{item.price.toFixed(2)}
                          </p>

                          {/* Quantity Selector */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() => handleMockQuantityChange(item.id, -1)}
                                className="px-2.5 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                                aria-label="Adedi azalt"
                              >
                                <svg
                                  className="w-3.5 h-3.5"
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
                              <span className="px-3 py-1.5 text-sm font-medium text-gray-900 min-w-[2.5rem] text-center border-x border-gray-300">
                                {quantity}
                              </span>
                              <button
                                onClick={() => handleMockQuantityChange(item.id, 1)}
                                className="px-2.5 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                                aria-label="Adedi artır"
                              >
                                <svg
                                  className="w-3.5 h-3.5"
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
            )}
          </div>

          {/* Order Summary */}
          {visibleItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4 bg-white">
              <div className="space-y-3">
                {/* Subtotal */}
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Ara toplam</span>
                  <span className="font-medium">₺{subtotal.toFixed(2)}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Kargo</span>
                  <span className="font-medium text-gray-500">
                    Ödeme adımında hesaplanır
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-base font-semibold text-gray-900">
                    <span>Toplam</span>
                    <span>₺{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Ödeme butonu */}
              <Link
                href="/cart"
                onClick={onClose}
                className="block w-full bg-[#E10600] text-white py-3.5 px-6 rounded-md font-semibold text-sm text-center hover:bg-[#b90000] hover:scale-105 active:scale-[0.98] transition-all duration-200 ease-out transform"
              >
                Sepete Git
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
