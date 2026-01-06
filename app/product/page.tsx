import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import BuyNowButton from '@/components/BuyNowButton'

export default function Product() {
  const details = [
    { title: 'İç koruma', text: 'Darbe ve sürtünmeye karşı güvenli taşıma.' },
    { title: 'Akıllı bölmeler', text: 'Aksesuarlar için düzenli alan.' },
    { title: 'Fermuar kalitesi', text: 'Günlük kullanımda akıcı his.' },
    { title: 'Dış malzeme', text: 'Dayanıklı, temiz ve sade görünüm.' },
    { title: 'Konfor', text: 'Hafif yapı, uzun taşımada rahatlık.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="rc-underline">
              Ana Sayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/shop" className="rc-underline">
              Shop
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-dark font-medium">Ready Cube Bag</span>
          </div>
        </nav>

        {/* Top: Gallery + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Gallery */}
          <div>
            <div className="rounded-xl bg-neutralSurface border border-[#111111]/10 overflow-hidden">
              <div className="aspect-square flex items-center justify-center">
                <span className="text-sm text-gray-500 font-medium tracking-wide">
                  Ana Görsel
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-neutralSurface border border-[#111111]/10 overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <span className="text-sm text-gray-500 font-medium">Dış</span>
                </div>
              </div>
              <div className="rounded-xl bg-neutralSurface border border-[#111111]/10 overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center">
                  <span className="text-sm text-gray-500 font-medium">İç</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="inline-flex items-center self-start bg-brand-soft text-brand border border-[#111111]/10 text-xs font-semibold px-3 py-1.5 rounded-full">
              Yakında
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
              Ready Cube Bag
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Speedcubing ekipmanları için premium taşıma çantası.
            </p>

            <div className="mt-6">
              <div className="text-sm text-gray-500">Fiyat</div>
              <div className="mt-1 text-2xl font-semibold text-dark">
                Yakında
              </div>
            </div>

            <div className="mt-8">
              <BuyNowButton className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out min-h-[48px] touch-manipulation btn-active-feedback" />
              <p className="mt-3 text-sm text-gray-500">
                Satışlar yakında açılıyor.
              </p>
            </div>

            <div className="mt-10 h-px bg-[#111111]/10" />

            <div className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.title}>
                  <div className="text-base font-semibold text-dark">
                    {d.title}
                  </div>
                  <div className="mt-1 text-base text-gray-600">
                    {d.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  )
}
