import { Suspense } from 'react'
import CheckoutClient from '@/components/CheckoutClient'

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <CheckoutClient />
    </Suspense>
  )
}


