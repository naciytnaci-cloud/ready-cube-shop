import Link from 'next/link'

export default function ReadyCubeBackpackDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20">
        {/* Breadcrumb Navigation & Back Button */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Desktop: Inline Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
              <Link 
                href="/" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
              <svg
                className="w-4 h-4 text-gray-400"
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
              <Link 
                href="/cantalar" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Çantalar
              </Link>
              <svg
                className="w-4 h-4 text-gray-400"
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
              <span className="text-gray-900 font-semibold">Ready Cube Backpack</span>
            </nav>

            {/* Back to Bags Button */}
            <Link
              href="/cantalar"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Mağazaya Dön
            </Link>
          </div>

          {/* Mobile: Stacked Layout */}
          <div className="md:hidden space-y-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
              <Link 
                href="/" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
              <svg
                className="w-4 h-4 text-gray-400"
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
              <Link 
                href="/cantalar" 
                className="hover:text-gray-700 transition-colors duration-200"
              >
                Çantalar
              </Link>
              <svg
                className="w-4 h-4 text-gray-400"
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
              <span className="text-gray-900 font-semibold">Ready Cube Backpack</span>
            </nav>

            {/* Back to Bags Button */}
            <Link
              href="/cantalar"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Mağazaya Dön
            </Link>
          </div>
        </div>

        {/* Hero Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          {/* Left: Product Image */}
          <div className="w-full flex items-center justify-center">
            <div className="aspect-square w-full max-w-lg bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative group/image hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out">
              <div className="absolute inset-0 flex items-center justify-center group-hover/image:scale-110 transition-transform duration-500 ease-out">
                <svg
                  className="w-40 h-40 text-gray-300"
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
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center">
            {/* Product Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight leading-tight">
              Ready Cube Backpack
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed font-normal">
              Speedcubing için özel tasarlanmış premium çanta
            </p>

            {/* Status Badge */}
            <div className="mb-6">
              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full tracking-wide">
                Yakında Satışta
              </span>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-normal">
              Profesyonel speedcubers için tasarlanmış, tüm WCA bulmacalarını güvenle taşıyabileceğiniz premium taşıma çantası. Günlük kullanımdan turnuva ortamlarına kadar her duruma uygun.
            </p>

            {/* Disabled Primary Button */}
            <button
              disabled
              className="w-full bg-gray-200 text-gray-500 py-3.5 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base text-center cursor-not-allowed opacity-60 hover:opacity-70 active:scale-[0.98] transition-all duration-200 ease-out touch-manipulation min-h-[44px]"
              aria-label="Satışlar Yakında"
            >
              Satışlar Yakında
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Features Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">
            Öne Çıkan Özellikler
          </h2>
          <ul className="space-y-5 max-w-3xl">
            <li className="flex items-start group/feature">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5 group-hover/feature:text-[#E10600] transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed group-hover/feature:text-gray-900 transition-colors duration-200">
                2x2'den 7x7'ye tüm WCA küplerine uyum
              </span>
            </li>
            <li className="flex items-start group/feature">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5 group-hover/feature:text-[#E10600] transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed group-hover/feature:text-gray-900 transition-colors duration-200">
                Özel süngerli iç düzen
              </span>
            </li>
            <li className="flex items-start group/feature">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5 group-hover/feature:text-[#E10600] transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed group-hover/feature:text-gray-900 transition-colors duration-200">
                Laptop ve şarj alanı
              </span>
            </li>
            <li className="flex items-start group/feature">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5 group-hover/feature:text-[#E10600] transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed group-hover/feature:text-gray-900 transition-colors duration-200">
                Premium fermuar ve kumaş
              </span>
            </li>
            <li className="flex items-start group/feature">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5 group-hover/feature:text-[#E10600] transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed group-hover/feature:text-gray-900 transition-colors duration-200">
                Günlük kullanım ve yarışmalar için ideal
              </span>
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Interior / Layout Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">
            İç Tasarım
          </h2>
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed font-normal">
              Çantanın iç yapısı, speedcubers'ın gerçek ihtiyaçları göz önünde bulundurularak tasarlanmıştır. Her detay, güvenli taşıma ve kolay erişim için optimize edilmiştir.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Küp Bölmeleri */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-default">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Küp Bölmeleri</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Her küp için özel olarak tasarlanmış korumalı bölmeler. 2x2'den 7x7'ye kadar tüm WCA bulmacaları için uygun.
                </p>
              </div>

              {/* Süngerli Kapak */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-default">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Süngerli Kapak</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Üst kısımda darbe emici süngerli kapak. Küplerinizi dış etkenlerden korur ve güvenli taşıma sağlar.
                </p>
              </div>

              {/* Ek Cepler */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 ease-out cursor-default">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Ek Cepler</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Laptop, şarj aleti ve diğer aksesuarlar için ekstra cepler. Organize ve düzenli taşıma imkanı.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Shipping & Availability Section */}
        <section className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">
            Durum & Teslimat
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal">
            <p>
              Ready Cube Backpack şu anda üretim aşamasındadır. Speedcubing topluluğunun geri bildirimleri doğrultusunda son haline getirilmektedir.
            </p>
            <p>
              İlk etapta Türkiye içi satış planlanmaktadır. Ürün hazır olduğunda, Türkiye genelinde hızlı ve güvenli teslimat seçenekleri sunulacaktır.
            </p>
            <p>
              Satış açıldığında siteden duyurulacak. Ürünün satışa çıkması için e-posta bildirim listesine kayıt olabilirsiniz.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Payment Section */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">
            Satın Alma
          </h2>

          {/* Payment Form Placeholder */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
            {/* Card Number */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kart Numarası
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                disabled
                readOnly
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none focus:ring-0 font-mono text-base"
                aria-label="Kart Numarası (Yakında)"
              />
            </div>

            {/* Expiration Date & CVC Row */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Expiration Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Son Kullanma Tarihi
                </label>
                <input
                  type="text"
                  placeholder="AA/YY"
                  disabled
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none focus:ring-0 font-mono text-base"
                  aria-label="Son Kullanma Tarihi (Yakında)"
                />
              </div>

              {/* CVC */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  disabled
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none focus:ring-0 font-mono text-base"
                  aria-label="CVC (Yakında)"
                />
              </div>
            </div>

            {/* Name on Card */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Kart Üzerindeki İsim
              </label>
              <input
                type="text"
                placeholder="Ad Soyad"
                disabled
                readOnly
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none focus:ring-0 text-base"
                aria-label="Kart Üzerindeki İsim (Yakında)"
              />
            </div>

            {/* Payment Button */}
            <button
              disabled
              className="w-full bg-gray-200 text-gray-500 py-3.5 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold text-sm sm:text-base text-center cursor-not-allowed opacity-60 hover:opacity-70 active:scale-[0.98] transition-all duration-200 ease-out touch-manipulation min-h-[44px] flex items-center justify-center gap-2"
              aria-label="Satışlar Açıldığında Buradan Satın Al"
            >
              <span>Satışlar Açıldığında Buradan Satın Al</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
            </button>

            {/* Helper Text */}
            <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center font-normal">
              Ödeme sistemi yakında aktif olacaktır
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

