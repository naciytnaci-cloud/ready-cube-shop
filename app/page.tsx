import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description: 'Ready Cube, Türkiye merkezli profesyonel speedcubing ekipmanları. WCA uyumlu, yarışma seviyesinde speedcube\'ler ve profesyonel çantalar. Profesyonel speedcuberlar için tasarlandı.',
  openGraph: {
    title: 'Ready Cube - Profesyonel Speedcubing Ekipmanları',
    description: 'Ready Cube, Türkiye merkezli profesyonel speedcubing ekipmanları. WCA uyumlu, yarışma seviyesinde speedcube\'ler.',
    type: 'website',
  },
}

const featuredProducts = [
  { id: '3x3', name: '3x3 Rubik Küp', price: 129.99 },
  { id: '4x4', name: '4x4 Rubik Küp', price: 199.99 },
  { id: 'megaminx', name: 'Megaminx', price: 179.99 },
  { id: 'pyraminx', name: 'Pyraminx', price: 99.99 },
]

export default function Home() {
  return (
    <div className="flex flex-col bg-dark">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center bg-gradient-to-b from-dark to-dark-light">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up will-change-[opacity,transform]">
                Profesyonel{' '}
                <span className="text-primary">Speedcubing</span>
                <br />
                Ekipmanları
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed opacity-0 animate-fade-in-up-delay will-change-[opacity,transform]">
                WCA uyumlu, yarışma seviyesinde speedcube'ler. 
                Türkiye'de profesyonel speedcubing için tasarlandı.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/products" variant="primary" className="px-8 py-3 text-lg">
                  Ürünleri İncele
                </Button>
                <Button href="/about" variant="secondary" className="px-8 py-3 text-lg">
                  Hakkımızda
                </Button>
              </div>
            </div>

            {/* Right: Product Showcase Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gray-900 rounded-2xl border-2 border-gray-800 overflow-hidden shadow-2xl relative">
                <Image
                  src="/hero/ready-cube-hero.jpg"
                  alt="Ready Cube V2 Profesyonel Speedcubing Çantası - Tüm WCA bulmacalarını güvenli şekilde taşıyın"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 opacity-0 pointer-events-none">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 bg-gray-800 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-24 h-24 text-gray-700"
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
                    <p className="text-gray-500 text-lg font-medium">Ürün Görseli</p>
                    <p className="text-gray-600 text-sm mt-2">Yakında eklenecek</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Öne Çıkan Ürünler</h2>
            <p className="text-white/80 text-lg">
              En popüler speedcube modellerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/products" variant="secondary" className="px-8 py-3">
              Tüm Ürünleri Gör
            </Button>
          </div>
        </div>
      </section>

      {/* Why Ready Cube */}
      <section className="py-20 bg-dark-light border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Neden Ready Cube?</h2>
            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
              <p>
                Ready Cube, Türkiye'de speedcubing topluluğu için özel olarak 
                tasarlanmış profesyonel ekipmanlar sunar.
              </p>
              <p>
                Tüm ürünlerimiz WCA standartlarına uygundur ve yarışma seviyesinde 
                performans için optimize edilmiştir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
