'use client'

import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t, language } = useLanguage()
  return (
    <div className="flex flex-col bg-dark">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] sm:min-h-[600px] flex items-center justify-center bg-gradient-to-b from-dark to-dark-light">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 opacity-0 animate-fade-in-up will-change-[opacity,transform]">
                {language === 'tr' ? (
                  <>
                    Profesyonel{' '}
                    <span className="text-primary">Speedcubing</span>
                    <br />
                    Ekipmanları
                  </>
                ) : (
                  <>
                    Professional{' '}
                    <span className="text-primary">Speedcubing</span>
                    <br />
                    Equipment
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-normal opacity-0 animate-fade-in-up-delay will-change-[opacity,transform]">
                {t('home.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/about" variant="secondary" className="px-8 py-3 text-lg">
                  {t('home.aboutButton')}
                </Button>
              </div>
            </div>

            {/* Right: Product Showcase Image */}
            <div className="relative group/hero">
              <div className="aspect-square max-w-md mx-auto bg-gray-900 rounded-2xl border-2 border-gray-800 overflow-hidden shadow-2xl relative group-hover/hero:shadow-3xl group-hover/hero:-translate-y-1 transition-all duration-300 ease-out">
                <Image
                  src="/hero/ready-cube-hero.jpg"
                  alt="Ready Cube V2 Profesyonel Speedcubing Çantası - Tüm WCA bulmacalarını güvenli şekilde taşıyın"
                  fill
                  className="object-cover group-hover/hero:scale-105 transition-transform duration-500 ease-out"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  quality={85}
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

      {/* Featured Product Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {language === 'tr' ? 'Öne Çıkan Ürün' : 'Featured Product'}
            </h2>
          </div>

          {/* Featured Product Card */}
          <div className="max-w-4xl mx-auto">
            <Link
              href="/shop/ready-cube-backpack"
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 active:scale-[0.98] md:active:scale-100 transition-all duration-300 ease-out cursor-pointer block touch-manipulation"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 relative overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-32 h-32 text-gray-300 group-hover:text-gray-400 group-hover:scale-110 transition-all duration-300 ease-out"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-[#E10600] text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      COMING SOON
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-200 leading-tight">
                    Ready Cube Backpack
                  </h3>

                  {/* Short Description */}
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed font-normal">
                    Speedcubers için özel olarak tasarlanmış profesyonel taşıma çantası. Küp korumalı iç bölmeler ve turnuva uyumlu tasarım.
                  </p>

                  {/* View Product Link */}
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#E10600] transition-colors duration-200">
                      {language === 'tr' ? 'Ürünü İncele' : 'View Product'}
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Products Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {language === 'tr' ? 'WCA Küpleri (Yakında)' : 'WCA Cubes (Coming Soon)'}
            </h2>
          </div>

          {/* Coming Soon Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center border border-gray-200 opacity-60 hover:opacity-70 hover:border-gray-300 transition-all duration-200 ease-out"
              >
                <p className="text-xl sm:text-2xl font-bold text-gray-400">
                  YAKINDA
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ready Cube */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-dark-light border-t border-gray-900 opacity-0 animate-fade-in-up-delay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10">{t('home.whyTitle')}</h2>
            <div className="space-y-4 sm:space-y-6 text-white/90 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                {t('home.whyText1')}
              </p>
              <p>
                {t('home.whyText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Brand Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
            {/* Trust Badge 1 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                  <svg
                    className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                Hız Küpçüleri İçin Tasarlandı
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Speedcubing topluluğunun gerçek ihtiyaçlarına göre.
              </p>
            </div>

            {/* Trust Badge 2 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                  <svg
                    className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                Kaliteli & Dayanıklı
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Uzun ömürlü malzeme, profesyonel kullanım.
              </p>
            </div>

            {/* Trust Badge 3 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                  <svg
                    className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                Türkiye Odaklı
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Türkiye içi hızlı planlama ve destek.
              </p>
            </div>

            {/* Trust Badge 4 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                  <svg
                    className="w-8 h-8 text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                Yakında Daha Fazlası
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Yeni ürünler ve WCA küpleri yolda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
