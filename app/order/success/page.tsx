'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import { useCart } from '@/contexts/CartContext'

export default function OrderSuccessPage() {
  const { items, removeItem } = useCart()
  const [orderNo, setOrderNo] = useState<string>('')

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    setOrderNo(sp.get('order') || '')
    // Clear cart (single item)
    const item = items[0]
    if (item?.id) removeItem(item.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
          Sipariş Alındı
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Teşekkürler. Siparişinizi aldık.
        </p>

        <div className="mt-10 bg-neutralSurface border border-[#111111]/10 rounded-xl p-6 sm:p-8">
          <div className="text-sm text-gray-600">Sipariş No</div>
          <div className="mt-2 text-xl sm:text-2xl font-semibold text-dark tracking-tight">
            {orderNo || '—'}
          </div>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Onay e-postası gönderildi (e-posta sistemi yapılandırıldıysa).
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Türkiye içi gönderim bilgileri hazır olduğunda paylaşılacak.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-dark text-white font-semibold rounded-md hover:opacity-90 transition-opacity duration-200 ease-out min-h-[48px]"
          >
            Mağazaya dön
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white border border-[#111111]/15 text-dark font-semibold rounded-md min-h-[48px]"
          >
            İletişim
          </Link>
        </div>
      </div>
      <SimpleFooter />
    </div>
  )
}


