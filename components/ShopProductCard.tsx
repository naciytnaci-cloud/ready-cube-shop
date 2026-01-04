import Image from 'next/image'
import Link from 'next/link'

interface ShopProductCardProps {
  id: string
  name: string
  price: number
  image?: string
}

export default function ShopProductCard({ id, name, price, image }: ShopProductCardProps) {
  return (
    <Link href={`/shop/${id}`} className="block">
      <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all duration-200 ease-out">
      {/* Product Image */}
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <Image
          src={image || `/products/${id}.jpg`}
          alt={`${name} - Premium speedcube product image`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          quality={80}
        />
        {/* Placeholder fallback */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 pointer-events-none opacity-0">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
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
            <p className="text-gray-400 text-xs">Product Image</p>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-gray-900 font-semibold text-base mb-2 line-clamp-2 leading-snug group-hover:text-gray-700 transition-colors duration-200">
          {name}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-900 font-bold text-xl">
            ₺{price.toFixed(2)}
          </p>
        </div>
        
        {/* Action Button */}
        <div className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-md font-medium text-sm text-center hover:bg-gray-700 transition-colors duration-150 ease-out">
          View Product
        </div>
      </div>
    </div>
    </Link>
  )
}

