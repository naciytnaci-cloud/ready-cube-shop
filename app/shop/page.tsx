import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import BuyNowButton from '@/components/BuyNowButton'
import { formatTryAmount, PRODUCT_PRICE_TRY, SALES_ENABLED } from '@/lib/publicConfig'

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        {/* Page Title */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
            Shop
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Tek ürün. Net odak.
          </p>
          <div className="mt-8 h-px bg-[#111111]/10" />
        </div>

        {/* Single Product Overview */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
            {/* Image */}
            <div className="rounded-xl bg-neutralSurface border border-[#111111]/10 overflow-hidden">
              <div className="aspect-square flex items-center justify-center">
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  Ürün Görseli
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div
                className={`inline-flex items-center self-start border text-xs font-semibold px-3 py-1.5 rounded-full ${
                  SALES_ENABLED && PRODUCT_PRICE_TRY > 0
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-brand-soft text-brand border-[#111111]/10'
                }`}
              >
                {SALES_ENABLED && PRODUCT_PRICE_TRY > 0 ? 'Satışta' : 'Yakında'}
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-dark tracking-tight">
                Ready Cube Bag
              </h2>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                Speedcubing ekipmanları için premium taşıma çantası.
              </p>

              <div className="mt-6">
                <div className="text-sm text-gray-500">Fiyat</div>
                <div className="mt-1 text-xl font-semibold text-dark">
                  {formatTryAmount(PRODUCT_PRICE_TRY)}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <BuyNowButton
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback"
                />
                <Link
                  href="/product"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white border border-[#111111]/15 text-dark font-semibold rounded-md min-h-[48px]"
                >
                  Ürünü İncele
                </Link>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                {SALES_ENABLED ? 'Güvenli ödeme (iyzico) ve Türkiye içi gönderim.' : 'Satışlar yakında açılıyor.'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  )
}
