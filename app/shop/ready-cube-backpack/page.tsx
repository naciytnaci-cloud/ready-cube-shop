import Link from 'next/link'

export default function ReadyCubeBackpackPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 sm:mb-10" aria-label="Breadcrumb">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-gray-700 transition-colors duration-200">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Ready Cube Premium Speedcubing Backpack</span>
          </div>
        </nav>

        {/* Back to Shop Link */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/shop"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
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

        {/* Top Section - Hero Product Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 sm:mb-24 lg:mb-28">
          {/* Left: Product Image */}
          <div className="w-full flex items-center justify-center">
            <div className="aspect-square w-full max-w-lg bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
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
            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
              Ready Cube Premium Speedcubing Backpack
            </h1>

            {/* Short Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed font-normal">
              Speedcubing için özel tasarlanmış premium çanta
            </p>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed font-normal">
              Profesyonel speedcubers için tasarlanmış, tüm WCA bulmacalarını güvenle taşıyabileceğiniz premium taşıma çantası. Günlük kullanımdan turnuva ortamlarına kadar her duruma uygun.
            </p>

            {/* Status Badge */}
            <div className="mb-8">
              <span className="inline-block bg-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
                Yakında Satışta
              </span>
            </div>

            {/* Disabled Primary Button */}
            <button
              disabled
              className="w-full bg-gray-200 text-gray-500 py-4 px-8 rounded-lg font-semibold text-base text-center cursor-not-allowed opacity-60 transition-opacity duration-200"
              aria-label="Satışlar Yakında"
            >
              Satışlar Yakında
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-20 sm:mb-24 lg:mb-28"></div>

        {/* Product Features Section */}
        <div className="mb-20 sm:mb-24 lg:mb-28">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 sm:mb-12 tracking-tight">
            Öne Çıkan Özellikler
          </h2>
          <ul className="space-y-4 max-w-3xl">
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5"
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
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                2x2'den 7x7'ye tüm WCA küplerine uyum
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5"
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
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                Özel süngerli iç düzen
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5"
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
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                Laptop ve şarj alanı
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5"
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
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                Premium fermuar ve kumaş
              </span>
            </li>
            <li className="flex items-start">
              <svg
                className="w-6 h-6 text-gray-900 mr-4 flex-shrink-0 mt-0.5"
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
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                Günlük kullanım ve yarışmalar için ideal
              </span>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-20 sm:mb-24 lg:mb-28"></div>

        {/* Interior / Design Section */}
        <div className="mb-20 sm:mb-24 lg:mb-28">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 sm:mb-12 tracking-tight">
            İç Tasarım
          </h2>
          <div className="max-w-3xl">
            <p className="text-base sm:text-lg text-gray-600 mb-10 leading-relaxed font-normal">
              Çantanın iç yapısı, speedcubers'ın gerçek ihtiyaçları göz önünde bulundurularak tasarlanmıştır. Her detay, güvenli taşıma ve kolay erişim için optimize edilmiştir.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Küp Bölmeleri */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Küp Bölmeleri</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Her küp için özel olarak tasarlanmış korumalı bölmeler. 2x2'den 7x7'ye kadar tüm WCA bulmacaları için uygun.
                </p>
              </div>

              {/* Süngerli Kapak */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Süngerli Kapak</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Üst kısımda darbe emici süngerli kapak. Küplerinizi dış etkenlerden korur ve güvenli taşıma sağlar.
                </p>
              </div>

              {/* Ek Cepler */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Ek Cepler</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Laptop, şarj aleti ve diğer aksesuarlar için ekstra cepler. Organize ve düzenli taşıma imkanı.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-20 sm:mb-24 lg:mb-28"></div>

        {/* Shipping & Availability Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 sm:mb-12 tracking-tight">
            Durum & Teslimat
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed font-normal">
            <p className="text-base sm:text-lg">
              Şu anda üretim aşamasında. Ready Cube Premium Speedcubing Backpack, speedcubing topluluğunun geri bildirimleri doğrultusunda son haline getirilmektedir.
            </p>
            <p className="text-base sm:text-lg">
              İlk etapta Türkiye içi satış planlanmaktadır. Ürün hazır olduğunda, Türkiye genelinde hızlı ve güvenli teslimat seçenekleri sunulacaktır.
            </p>
            <p className="text-base sm:text-lg">
              Satış açıldığında siteden duyurulacak. Ürünün satışa çıkması için e-posta bildirim listesine kayıt olabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

