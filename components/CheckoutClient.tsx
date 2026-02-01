'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { getShipping, formatTry, SHIPPING_CARRIERS } from '@/lib/shipping'
import { SALES_ENABLED } from '@/lib/publicConfig'

export default function CheckoutClient() {
  const { items } = useCart()
  const item = items[0]
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null)

  const subtotal = item?.price || 0
  const shipping = getShipping(subtotal)
  const total =
    shipping.status === 'unknown' ? 0 : subtotal + (shipping.status === 'paid' ? shipping.cost : 0)

  useEffect(() => {
    // Build-safe: only read search params on client
    try {
      const sp = new URLSearchParams(window.location.search)
      setPaymentStatus(sp.get('paymentStatus'))
    } catch {
      setPaymentStatus(null)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal checkout header (no distractions) */}
      <div className="border-b border-[#111111]/10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-sm sm:text-base font-semibold text-dark">
            Ready Cube
          </div>
          <Link href="/cart" className="text-sm text-gray-600 rc-underline">
            Sepete dön
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-16 sm:pb-20 md:pb-24">
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
            Ödeme
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Teslimat ve iletişim bilgilerinizi girin.
          </p>
        </div>

        {!item ? (
          <div className="max-w-xl">
            <div className="bg-neutralSurface border border-[#111111]/10 rounded-xl p-6 sm:p-8">
              <p className="text-base text-gray-600">Sepet boş.</p>
              <Link href="/shop" className="mt-4 inline-flex text-dark rc-underline rc-underline-brand">
                Mağazaya dön →
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#111111]/10 rounded-xl p-6 sm:p-8">
                <h2 className="text-lg sm:text-xl font-semibold text-dark">
                  Teslimat Bilgileri
                </h2>

                {paymentStatus && (
                  <div className="mt-6 bg-neutralSurface border border-[#111111]/10 rounded-xl p-4">
                    <p className="text-sm text-gray-600">
                      Ödeme sonucu: <span className="font-semibold text-dark">{paymentStatus}</span>
                    </p>
                  </div>
                )}

                <form
                  className="mt-6 space-y-5"
                  onSubmit={async (e) => {
                    e.preventDefault()
                    if (!SALES_ENABLED) return
                    const fd = new FormData(e.currentTarget)
                    const price = Number(process.env.NEXT_PUBLIC_PRODUCT_PRICE_TRY || '0')
                    if (!price) return

                    const payload = {
                      name: String(fd.get('name') || ''),
                      surname: String(fd.get('surname') || ''),
                      phone: String(fd.get('phone') || ''),
                      email: String(fd.get('email') || ''),
                      address: String(fd.get('address') || ''),
                      city: String(fd.get('city') || ''),
                      postalCode: String(fd.get('postalCode') || ''),
                      identityNumber: String(fd.get('identityNumber') || ''),
                    }

                    const res = await fetch('/api/payments/iyzico/initialize', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload),
                    })

                    const data = await res.json()
                    if (!res.ok || !data?.checkoutFormContent) {
                      alert(data?.message || 'Ödeme başlatılamadı.')
                      return
                    }

                    sessionStorage.setItem('iyzico_checkout_form', data.checkoutFormContent)
                    window.location.assign('/checkout/pay')
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ad</label>
                      <input
                        type="text"
                        name="name"
                        autoComplete="given-name"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
                      <input
                        type="text"
                        name="surname"
                        autoComplete="family-name"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40"
                        placeholder="Soyadınız"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40"
                        placeholder="05xx xxx xx xx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E‑posta</label>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40"
                        placeholder="ornek@eposta.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      T.C. Kimlik No
                    </label>
                    <input
                      type="text"
                      name="identityNumber"
                      inputMode="numeric"
                      pattern="[0-9]{11}"
                      maxLength={11}
                      required={SALES_ENABLED}
                      className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40"
                      placeholder="11 haneli"
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      Ödeme sağlayıcısı doğrulaması için gereklidir.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adres</label>
                    <textarea
                      name="address"
                      autoComplete="street-address"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40 resize-none"
                      placeholder="Mahalle, sokak, bina no, daire no"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Şehir</label>
                      <input
                        type="text"
                        name="city"
                        autoComplete="address-level2"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40"
                        placeholder="İstanbul"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Posta Kodu</label>
                      <input
                        type="text"
                        name="postalCode"
                        autoComplete="postal-code"
                        inputMode="numeric"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#111111]/15 rounded-md text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand/40"
                        placeholder="34xxx"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`inline-flex items-center justify-center w-full px-8 py-4 bg-brand text-white font-semibold rounded-md min-h-[48px] touch-manipulation btn-active-feedback transition-colors duration-200 ease-out ${
                        item?.price && SALES_ENABLED
                          ? 'hover:bg-brand-hover active:bg-brand-hover'
                          : 'opacity-40 cursor-not-allowed'
                      }`}
                      disabled={!item?.price || !SALES_ENABLED}
                      aria-label="Ödemeye geç"
                    >
                      Ödemeye Geç
                    </button>
                    <p className="mt-3 text-sm text-gray-500">
                      Ödeme altyapısı: iyzico. 3D Secure aktif.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Türkiye içi gönderim. Taşıyıcı: {SHIPPING_CARRIERS.join(' / ')}.
                    </p>
                    {!SALES_ENABLED && (
                      <p className="mt-2 text-sm text-gray-600">
                        Satışlar şu an kapalı.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-neutralSurface border border-[#111111]/10 rounded-xl p-6 sm:p-8 h-fit">
              <h2 className="text-lg font-semibold text-dark">Sipariş Özeti</h2>
              <div className="mt-6 space-y-3 text-sm sm:text-base text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Ürün</span>
                  <span className="font-medium text-dark">{formatTry(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kargo</span>
                  <span className="font-medium text-dark">
                    {shipping.status === 'unknown'
                      ? 'Yakında'
                      : shipping.status === 'free'
                      ? 'Ücretsiz'
                      : formatTry(shipping.cost)}
                  </span>
                </div>
                <div className="h-px bg-[#111111]/10 my-4" />
                <div className="flex items-center justify-between">
                  <span>Toplam</span>
                  <span className="font-semibold text-dark">
                    {shipping.status === 'unknown' ? 'Yakında' : formatTry(total)}
                  </span>
                </div>
              </div>
              <div className="mt-8 bg-white border border-[#111111]/10 rounded-xl p-5">
                <div className="text-sm font-semibold text-dark">Güven</div>
                <p className="mt-2 text-sm text-gray-600">
                  Ödeme ve teslimat detayları satış açılışında netleşecek.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


