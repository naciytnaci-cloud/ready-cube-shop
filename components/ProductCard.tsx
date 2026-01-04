'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import { useState } from 'react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image?: string
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAdding(true)
    addItem({ id, name, price, image })
    setTimeout(() => setIsAdding(false), 300)
  }
  return (
    <div className="group bg-dark-light border border-gray-900 rounded-lg overflow-hidden hover:border-primary/50 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out transform will-change-transform">
      <Link href={`/products/${id}`}>
        <div className="aspect-square bg-gray-900 relative overflow-hidden">
          <Image
            src={image || `/products/${id}.jpg`}
            alt={`${name} - Profesyonel WCA uyumlu speedcube ürün görseli`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out will-change-transform"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={80}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-0 pointer-events-none">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-700"
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
              <p className="text-gray-600 text-sm">Ürün Görseli</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/products/${id}`}>
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300 ease-out">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-primary font-bold text-xl">₺{price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark hover:scale-105 active:scale-[0.98] transition-all duration-300 ease-out text-sm transform will-change-transform"
          >
            {isAdding ? 'Eklendi!' : 'Sepete Ekle'}
          </button>
        </div>
      </div>
    </div>
  )
}

