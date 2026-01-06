'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

type BuyNowButtonProps = {
  className?: string
  label?: string
}

const PRODUCT = {
  id: 'ready-cube-bag',
  name: 'Ready Cube Bag',
  price: Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_TRY || '0'),
  image: '/products/ready-cube-bag.jpg',
}

export default function BuyNowButton({ className, label = 'Satın Al' }: BuyNowButtonProps) {
  const router = useRouter()
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        setIsAdding(true)
        addItem(PRODUCT)
        router.push('/cart')
        setTimeout(() => setIsAdding(false), 250)
      }}
      className={className}
      aria-label="Satın Al (Sepete ekle)"
    >
      {isAdding ? 'Eklendi' : label}
    </button>
  )
}


