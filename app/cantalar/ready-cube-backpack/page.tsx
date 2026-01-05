import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'

export default function ReadyCubeBackpackDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14 lg:py-18 xl:py-20 pt-20 sm:pt-24">
        {/* Breadcrumb Navigation & Back Button */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Desktop: Inline Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
              <Link 
                href="/" 
                className="hover:text-gray-700"
              >
                Ana Sayfa
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/cantalar" 
                className="hover:text-gray-700"
              >
                Çantalar
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Ready Cube Backpack</span>
            </nav>

            {/* Back to Bags Button */}
            <Link
              href="/cantalar"
              className="text-sm text-gray-500 hover:text-gray-900 btn-active-feedback touch-manipulation min-h-[44px] flex items-center"
            >
              ← Geri Dön
            </Link>
          </div>

          {/* Mobile: Stacked Layout */}
          <div className="md:hidden space-y-3">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 flex-wrap" aria-label="Breadcrumb">
              <Link 
                href="/" 
                className="hover:text-gray-700 btn-active-feedback touch-manipulation min-h-[32px] flex items-center"
              >
                Ana Sayfa
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/cantalar" 
                className="hover:text-gray-700 btn-active-feedback touch-manipulation min-h-[32px] flex items-center"
              >
                Çantalar
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 font-semibold">Ready Cube Backpack</span>
            </nav>

            {/* Back to Bags Button */}
            <Link
              href="/cantalar"
              className="text-sm text-gray-500 hover:text-gray-900 btn-active-feedback touch-manipulation min-h-[44px] flex items-center"
            >
              ← Geri Dön
            </Link>
          </div>
        </div>

        {/* Hero Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          {/* Left: Product Image */}
          <div className="w-full flex items-center justify-center">
            <div className="aspect-square w-full max-w-lg bg-gray-100 rounded-lg border border-gray-200 transition-opacity duration-300 ease-in">
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center">
            {/* Product Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-3 sm:mb-4 tracking-tight leading-tight">
              Ready Cube Backpack
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-5 sm:mb-6 md:mb-8 leading-relaxed font-normal">
              Speedcubing ekipmanlarını düzenli, güvenli ve pratik şekilde taşımak için tasarlandı.
            </p>

            {/* Status Text */}
            <div className="mb-6 sm:mb-8 space-y-3">
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                <p className="text-sm sm:text-base text-gray-900 font-medium mb-2">
                  Satışlar henüz açık değil
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-2">
                  Ürün üretim aşamasındadır.
                </p>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                  Satışlar açıldığında buradan duyurulacaktır.
                </p>
              </div>
            </div>

            {/* Purchase Button - Disabled, Ready for Future */}
            <div className="mt-6 sm:mt-8">
              <button
                disabled
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gray-200 text-gray-400 font-medium rounded-md cursor-not-allowed text-base sm:text-lg md:text-xl min-w-[200px] min-h-[48px] sm:min-h-[56px] opacity-75"
                aria-label="Satın Al (Yakında)"
              >
                Satın Al (Yakında)
              </button>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Features Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 section-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight flex items-center gap-2">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Özellikler
          </h2>
          <ul className="space-y-5 max-w-3xl">
            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 12h14"
                />
              </svg>
              <span>WCA küplerine uyumlu iç düzen</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 12h14"
                />
              </svg>
              <span>Sünger destekli koruma alanı</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 12h14"
                />
              </svg>
              <span>Günlük kullanım ve yarışmalar için ideal</span>
            </li>
            <li className="flex items-start gap-3 text-base sm:text-lg text-gray-500 font-normal leading-relaxed">
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 12h14"
                />
              </svg>
              <span>Minimal, sade ve dayanıklı tasarım</span>
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Interior Layout Logic Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 section-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight flex items-center gap-2">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z"
              />
            </svg>
            İç Düzen
          </h2>
          <div className="max-w-3xl space-y-6">
            {/* Küp Bölmeleri */}
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                Küp Bölmeleri
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
                Küplerin birbirine temas etmemesi için ölçülendirilmiş, düzenli bölmeler.
              </p>
            </div>

            {/* Koruma Katmanı */}
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                Koruma Katmanı
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
                Çanta kapağında yer alan süngerli yapı, taşıma sırasında ekipmanları darbelere karşı korur.
              </p>
            </div>

            {/* Ek Alanlar */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                Ek Alanlar
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal">
                Şarj kablosu, küçük aksesuarlar ve günlük eşyalar için ayrılmış pratik cepler.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Who Is This For Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 section-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight flex items-center gap-2">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            Kimler İçin
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {/* Card 1: Yarışmacılar */}
            <div className="border border-gray-200 rounded-md p-6 h-full flex flex-col hover:border-gray-300 transition-all duration-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                Yarışmacılar İçin
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal flex-grow">
                Turnuvalarda küplerini güvenle taşımak isteyen speedcuber'lar için.
              </p>
            </div>

            {/* Card 2: Günlük Kullanım */}
            <div className="border border-gray-200 rounded-md p-6 h-full flex flex-col hover:border-gray-300 transition-all duration-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                Günlük Kullanım İçin
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal flex-grow">
                Okulda, şehirde veya seyahatte ekipmanlarını yanında taşımak isteyenler için.
              </p>
            </div>

            {/* Card 3: Koleksiyon Sahipleri */}
            <div className="border border-gray-200 rounded-md p-6 h-full flex flex-col hover:border-gray-300 transition-all duration-200">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                Koleksiyon Sahipleri İçin
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-normal flex-grow">
                Birden fazla küpü düzenli ve korumalı şekilde saklamak isteyenler için.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Interior / Layout Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 section-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight flex items-center gap-2">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a4 4 0 004-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4z"
              />
            </svg>
            Tasarım
          </h2>
          <div className="max-w-3xl">
            <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10 leading-relaxed font-normal">
              Çantanın iç yapısı, speedcuberların gerçek ihtiyaçları göz önünde bulundurularak tasarlanmıştır. Her detay, güvenli taşıma ve kolay erişim için optimize edilmiştir.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Küp Bölmeleri */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">Küp Bölmeleri</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-normal">
                  Her küp için özel olarak tasarlanmış korumalı bölmeler. 2x2'den 7x7'ye kadar tüm WCA bulmacaları için uygun.
                </p>
              </div>

              {/* Süngerli Kapak */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">Süngerli Kapak</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-normal">
                  Üst kısımda darbe emici süngerli kapak. Küplerinizi dış etkenlerden korur ve güvenli taşıma sağlar.
                </p>
              </div>

              {/* Ek Cepler */}
              <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">Ek Cepler</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-normal">
                  Laptop, şarj aleti ve diğer aksesuarlar için ekstra cepler. Organize ve düzenli taşıma imkanı.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Shipping & Availability Section */}
        <section className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-28 section-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight leading-tight flex items-center gap-2">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Durum
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-md p-6">
              <p className="text-base sm:text-lg text-gray-900 font-medium mb-2">
                Satışlar henüz açık değil
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mb-2">
                Ürün üretim aşamasındadır.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Satışlar açıldığında buradan duyurulacaktır.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-md p-6">
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
                Türkiye içi teslimat planlanmaktadır. Kargo ve ödeme detayları satışlar açıldığında paylaşılacaktır.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Payment Section - Ready for Iyzico */}
        <section className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-28 section-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight flex items-center gap-2">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Satın Alma
          </h2>
          
          <div className="mb-6">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
              Ödeme altyapısı: Iyzico (yakında)
            </p>
            <p className="text-xs text-gray-400 leading-relaxed font-normal mt-1">
              Satışlar açıldığında güvenli ödeme altyapısı aktif olacaktır.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-md p-6 space-y-4">
            {/* Card Number */}
            <div>
              <label className="block text-sm text-gray-600 mb-2 font-medium">
                Kart Numarası
              </label>
              <input
                type="text"
                disabled
                placeholder="0000 0000 0000 0000"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed text-sm sm:text-base"
              />
            </div>

            {/* Expiry and CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-medium">
                  Son Kullanma
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="AA/YY"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2 font-medium">
                  CVC
                </label>
                <input
                  type="text"
                  disabled
                  placeholder="000"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Cardholder Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-2 font-medium">
                Kart Üzerindeki İsim
              </label>
              <input
                type="text"
                disabled
                placeholder="Ad Soyad"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-400 cursor-not-allowed text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              disabled
              className="w-full px-6 py-4 bg-gray-200 text-gray-400 font-medium rounded-md cursor-not-allowed text-base sm:text-lg mt-4 opacity-75"
              aria-label="Ödeme (Yakında)"
            >
              Ödeme (Yakında)
            </button>
          </div>
        </section>

      </div>
      <SimpleFooter />
    </div>
  )
}

