'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { PRODUCT_PRICE_TRY, SALES_ENABLED } from '@/lib/publicConfig'

type BuyNowButtonProps = {
  className?: string
  label?: string
}

const PRODUCT = {
  id: 'ready-cube-bag',
  name: 'Ready Cube Bag',
  price: PRODUCT_PRICE_TRY,
  image: '/products/ready-cube-bag.jpg',
}

export default function BuyNowButton({ className, label = 'Satın Al' }: BuyNowButtonProps) {
  const router = useRouter()
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const isEnabled = SALES_ENABLED && Number.isFinite(PRODUCT.price) && PRODUCT.price > 0

  return (
    <button
      type="button"
      onClick={() => {
        if (!isEnabled) return
        setIsAdding(true)
        addItem(PRODUCT)
        router.push('/cart')
        setTimeout(() => setIsAdding(false), 250)
      }}
      disabled={!isEnabled}
      className={`${className || ''} ${!isEnabled ? 'opacity-40 cursor-not-allowed' : ''}`}
      aria-label={isEnabled ? 'Satın Al (Sepete ekle)' : 'Satın Al (kapalı)'}
    >
      {isEnabled ? (isAdding ? 'Eklendi' : label) : SALES_ENABLED ? 'Yakında' : 'Satış Kapalı'}
    </button>
  )
}


