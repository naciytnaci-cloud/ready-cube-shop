'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { useCart } from '@/contexts/CartContext'

const products: Record<string, {
  name: string
  price: number
  description: string
  specifications: string[]
}> = {
  '2x2': {
    name: '2x2 Rubik Küp',
    price: 89.99,
    description: 'Hızlı ve akıcı dönüş için optimize edilmiş profesyonel 2x2 speedcube. Yarışma seviyesinde performans için tasarlandı.',
    specifications: [
      'Boyut: 50mm x 50mm',
      'Magnetik sistem',
      'WCA uyumlu',
      'Yumuşak dönüş mekanizması',
      'Corner cutting: 45°',
    ],
  },
  '3x3': {
    name: '3x3 Rubik Küp',
    price: 129.99,
    description: 'Dünya rekorları için kullanılan profesyonel 3x3 speedcube. En iyi speedcuberlar tarafından tercih edilen model.',
    specifications: [
      'Boyut: 56mm x 56mm',
      'Gelişmiş magnetik sistem',
      'WCA uyumlu',
      'Corner cutting: 45°',
      'Anti-pop mekanizma',
    ],
  },
  '4x4': {
    name: '4x4 Rubik Küp',
    price: 199.99,
    description: 'Yarışma seviyesinde 4x4 speedcube, mükemmel stabilite ve hız. Profesyonel kullanım için optimize edilmiştir.',
    specifications: [
      'Boyut: 60mm x 60mm',
      'Anti-pop mekanizma',
      'WCA uyumlu',
      'Yumuşak ve hızlı dönüş',
      'Magnetik core',
    ],
  },
  '5x5': {
    name: '5x5 Rubik Küp',
    price: 249.99,
    description: 'Profesyonel 5x5 speedcube, gelişmiş iç mekanizma ile. Büyük küpler için mükemmel stabilite.',
    specifications: [
      'Boyut: 64mm x 64mm',
      'Gelişmiş stabilite',
      'WCA uyumlu',
      'Magnetik core',
      'Premium malzeme',
    ],
  },
  '6x6': {
    name: '6x6 Rubik Küp',
    price: 299.99,
    description: 'Yüksek kaliteli 6x6 speedcube, profesyonel kullanım için. Mükemmel mühendislik ve kalite.',
    specifications: [
      'Boyut: 68mm x 68mm',
      'Anti-lock mekanizma',
      'WCA uyumlu',
      'Premium malzeme',
      'Gelişmiş iç yapı',
    ],
  },
  '7x7': {
    name: '7x7 Rubik Küp',
    price: 349.99,
    description: 'En büyük standart speedcube, mükemmel mühendislik. Profesyonel yarışmalar için ideal.',
    specifications: [
      'Boyut: 70mm x 70mm',
      'Gelişmiş iç yapı',
      'WCA uyumlu',
      'Profesyonel kalite',
      'Magnetik sistem',
    ],
  },
  'megaminx': {
    name: 'Megaminx',
    price: 179.99,
    description: '12 yüzlü profesyonel Megaminx speedcube. Akıcı dönüş ve mükemmel kontrol.',
    specifications: [
      'Boyut: 62mm',
      'Magnetik sistem',
      'WCA uyumlu',
      'Akıcı dönüş',
      'Yumuşak mekanizma',
    ],
  },
  'pyraminx': {
    name: 'Pyraminx',
    price: 99.99,
    description: 'Hızlı ve hassas Pyraminx speedcube. Kolay dönüş ve mükemmel kontrol.',
    specifications: [
      'Boyut: 90mm',
      'WCA uyumlu',
      'Yumuşak mekanizma',
      'Kolay dönüş',
      'Hafif yapı',
    ],
  },
  'skewb': {
    name: 'Skewb',
    price: 79.99,
    description: 'Kompakt ve hızlı Skewb speedcube. Smooth dönüş ve profesyonel kalite.',
    specifications: [
      'Boyut: 60mm',
      'WCA uyumlu',
      'Hafif yapı',
      'Smooth dönüş',
      'Magnetik sistem',
    ],
  },
  'square-1': {
    name: 'Square-1',
    price: 149.99,
    description: 'Profesyonel Square-1 speedcube, özel mekanizma. Yüksek kalite ve dayanıklılık.',
    specifications: [
      'Boyut: 57mm x 57mm',
      'WCA uyumlu',
      'Özel dönüş mekanizması',
      'Yüksek kalite',
      'Anti-pop sistem',
    ],
  },
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const product = products[params.id]
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: params.id,
        name: product.name,
        price: product.price,
      })
    }
    setTimeout(() => {
      setIsAdding(false)
      setQuantity(1)
    }, 500)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <a href="/" className="hover:text-primary transition-colors duration-200">
              Ana Sayfa
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-primary transition-colors duration-200">
              Ürünler
            </a>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="w-full">
            <div className="aspect-square bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg relative">
              <Image
                src={`/products/${params.id}.jpg`}
                alt={`${product.name} - Profesyonel WCA uyumlu speedcube detay görseli`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-0 pointer-events-none">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto mb-6 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                    <svg
                      className="w-20 h-20 text-gray-700"
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
                  <p className="text-gray-500 font-medium">Ürün Görseli</p>
                  <p className="text-gray-600 text-sm mt-2">Yakında eklenecek</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            {/* Product Name & Price */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-3xl sm:text-4xl font-bold text-primary">
                ₺{product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-gray-900">
              <h2 className="text-lg font-semibold text-white mb-3">Açıklama</h2>
              <p className="text-white/90 leading-relaxed text-base">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="pt-4 border-t border-gray-900">
              <h2 className="text-lg font-semibold text-white mb-4">Özellikler</h2>
              <ul className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start text-white/90">
                    <svg
                      className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5"
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
                    <span className="text-base">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="pt-6 border-t border-gray-900 space-y-6">
              <div>
                <label className="block text-white font-medium mb-3">Miktar</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-lg bg-dark-light text-white/70 hover:text-white hover:border-gray-600 transition-colors duration-300 ease-out font-medium text-lg"
                    aria-label="Azalt"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min={1}
                    className="w-20 h-12 text-center bg-dark-light border border-gray-700 rounded-lg text-white font-semibold text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="w-12 h-12 flex items-center justify-center border border-gray-700 rounded-lg bg-dark-light text-white/70 hover:text-white hover:border-gray-600 transition-colors duration-300 ease-out font-medium text-lg"
                    aria-label="Artır"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark hover:scale-105 active:scale-[0.98] transition-all duration-300 ease-out transform will-change-transform"
              >
                {isAdding ? 'Sepete Eklendi!' : 'Sepete Ekle'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
