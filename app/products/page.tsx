import type { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Ürünler',
  description: 'Profesyonel kalitede WCA uyumlu speedcube\'ler. 2x2, 3x3, 4x4, 5x5, 6x6, 7x7, Megaminx, Pyraminx, Skewb ve Square-1 modelleri. Yarışma seviyesinde performans için optimize edilmiş.',
  openGraph: {
    title: 'Speedcubing Ürünleri | Ready Cube',
    description: 'Profesyonel kalitede WCA uyumlu speedcube\'ler. Yarışma seviyesinde performans için optimize edilmiş.',
    type: 'website',
  },
}

const products = [
  { id: '2x2', name: '2x2 Rubik Küp', price: 89.99 },
  { id: '3x3', name: '3x3 Rubik Küp', price: 129.99 },
  { id: '4x4', name: '4x4 Rubik Küp', price: 199.99 },
  { id: '5x5', name: '5x5 Rubik Küp', price: 249.99 },
  { id: '6x6', name: '6x6 Rubik Küp', price: 299.99 },
  { id: '7x7', name: '7x7 Rubik Küp', price: 349.99 },
  { id: 'megaminx', name: 'Megaminx', price: 179.99 },
  { id: 'pyraminx', name: 'Pyraminx', price: 99.99 },
  { id: 'skewb', name: 'Skewb', price: 79.99 },
  { id: 'square-1', name: 'Square-1', price: 149.99 },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Speedcubing Ürünleri</h1>
          <p className="text-white/80 text-lg">
            Profesyonel kalitede WCA uyumlu bulmacalar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

