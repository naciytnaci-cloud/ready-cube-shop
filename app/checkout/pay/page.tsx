'use client'

import { useEffect } from 'react'

export default function CheckoutPayPage() {
  useEffect(() => {
    const content = sessionStorage.getItem('iyzico_checkout_form')
    if (!content) {
      window.location.replace('/checkout')
      return
    }

    // iyzico returns base64 encoded html
    const decoded = atob(content)
    document.open()
    document.write(decoded)
    document.close()
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <p className="text-sm text-gray-600">Ödeme sayfası yükleniyor…</p>
    </div>
  )
}


