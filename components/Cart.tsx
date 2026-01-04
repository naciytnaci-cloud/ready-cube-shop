'use client'

import { useCart } from '@/contexts/CartContext'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, updateQuantity, getTotal } = useCart()

  const total = getTotal()

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-dark z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-900">
            <h2 className="text-xl font-semibold text-white">Sepet</h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors duration-300 ease-out"
              aria-label="Kapat"
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
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  className="w-16 h-16 text-gray-700 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-white/90 text-lg font-medium">Sepetiniz boş</p>
                <p className="text-white/70 text-sm mt-2">
                  Ürün eklemek için alışverişe başlayın
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-dark-light rounded-lg border border-gray-900 hover:border-gray-800 transition-colors duration-300 ease-out"
                  >
                    <div className="w-20 h-20 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center border border-gray-900">
                      <span className="text-gray-600 text-xs">Görsel</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium text-sm mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-primary font-semibold text-base mb-3">
                        ₺{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-lg bg-dark-lighter text-white/80 hover:text-white hover:border-gray-600 transition-colors duration-300 ease-out text-sm font-medium"
                          aria-label="Azalt"
                        >
                          −
                        </button>
                        <span className="text-white w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded-lg bg-dark-lighter text-white/80 hover:text-white hover:border-gray-600 transition-colors duration-300 ease-out text-sm font-medium"
                          aria-label="Artır"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-white/60 hover:text-red-500 transition-colors duration-300 ease-out p-1"
                          aria-label="Kaldır"
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
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-900 p-6 space-y-4 bg-dark">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-white">Toplam:</span>
                <span className="text-2xl font-bold text-primary">
                  ₺{total.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark hover:scale-105 active:scale-[0.98] transition-all duration-300 ease-out transform will-change-transform">
                Ödemeye Geç
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
