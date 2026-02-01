'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import { useCart } from '@/contexts/CartContext'
import { getShipping, formatTry, SHIPPING_CARRIERS } from '@/lib/shipping'
import { SALES_ENABLED } from '@/lib/publicConfig'

export default function CartPage() {
  const { items, removeItem } = useCart()
  const item = items[0]
  const subtotal = item?.price || 0
  const shipping = getShipping(subtotal)
  const total =
    shipping.status === 'unknown' ? 0 : subtotal + (shipping.status === 'paid' ? shipping.cost : 0)
  const canCheckout = Boolean(
    SALES_ENABLED && subtotal > 0 && shipping.status !== 'unknown'
  )

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
            Sepet
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Tek ürün. Adet sabit: 1.
          </p>
        </div>

        {!item ? (
          <div className="max-w-xl">
            <div className="bg-neutralSurface border border-[#111111]/10 rounded-xl p-6 sm:p-8">
              <p className="text-base text-gray-600">Sepet boş.</p>
              <Link
                href="/shop"
                className="mt-4 inline-flex text-dark rc-underline rc-underline-brand"
              >
                Mağazaya dön →
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Item */}
            <div className="lg:col-span-2 bg-white border border-[#111111]/10 rounded-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="w-24 h-24 rounded-lg bg-neutralSurface border border-[#111111]/10 overflow-hidden relative flex-shrink-0">
                    <Image
                      src={item.image || '/products/ready-cube-bag.jpg'}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg font-semibold text-dark truncate">
                      {item.name}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Adet: 1
                    </div>
                    <div className="mt-4 text-base font-semibold text-dark">
                      {formatTry(item.price)}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-gray-600 rc-underline"
                    aria-label="Sepetten kaldır"
                  >
                    Kaldır
                  </button>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-neutralSurface border border-[#111111]/10 rounded-xl p-6 sm:p-8 h-fit">
              <div className="text-base font-semibold text-dark">
                Özet
              </div>
              <div className="mt-6 space-y-3 text-sm sm:text-base text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Ürün</span>
                  <span className="font-medium text-dark">{formatTry(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kargo</span>
                  <span className="font-medium text-dark">
                    {shipping.status === 'unknown'
                      ? 'Yakında'
                      : shipping.status === 'free'
                      ? 'Ücretsiz'
                      : formatTry(shipping.cost)}
                  </span>
                </div>
                <div className="h-px bg-[#111111]/10 my-4" />
                <div className="flex items-center justify-between">
                  <span>Toplam</span>
                  <span className="font-semibold text-dark">
                    {shipping.status === 'unknown' ? 'Yakında' : formatTry(total)}
                  </span>
                </div>
              </div>

              <Link
                href={canCheckout ? '/checkout' : '#'}
                onClick={(e) => {
                  if (!canCheckout) e.preventDefault()
                }}
                className={`mt-8 inline-flex items-center justify-center w-full px-8 py-4 font-semibold rounded-md transition-opacity duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback ${
                  canCheckout
                    ? 'bg-dark text-white hover:opacity-90'
                    : 'bg-[#111111]/10 text-gray-500 cursor-not-allowed'
                }`}
                aria-disabled={!canCheckout}
              >
                Ödemeye Devam Et
              </Link>
              {!canCheckout && (
                <p className="mt-3 text-sm text-gray-600">
                  Satışlar şu an kapalı veya fiyat/kargo bilgisi hazır değil.
                </p>
              )}
              <p className="mt-3 text-sm text-gray-500">
                Türkiye içi gönderim. Taşıyıcı: {SHIPPING_CARRIERS.join(' / ')}.
              </p>
            </div>
          </div>
        )}
      </div>
      <SimpleFooter />
    </div>
  )
}


