import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Ready Cube hakkında bilgi edinin. Speedcubing topluluğu için özenle tasarlanmış ekipmanlar. Türkiye odaklı, topluluk merkezli bir marka.',
  openGraph: {
    title: 'Hakkımızda | Ready Cube',
    description: 'Ready Cube hakkında bilgi edinin. Speedcubing topluluğu için özenle tasarlanmış ekipmanlar.',
    type: 'website',
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Ready Cube
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Speedcubing topluluğu için
            <br />
            özenle tasarlanmış ekipmanlar.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 md:mb-10 tracking-tight">
            Hikayemiz
          </h2>
          <div className="max-w-3xl space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal">
            <p>
              Ready Cube, bir speedcuber'ın gerçek ihtiyacından doğdu. Türkiye'de speedcubing topluluğu için özel olarak tasarlanmış, kaliteli ve düzenli bir taşıma çantası bulmak zordu. Piyasada yeterli seçenek yoktu ve mevcut ürünler gerçek kullanım senaryolarını karşılamıyordu.
            </p>
            <p>
              Bu eksikliği fark eden bir speedcuber olarak, topluluğun gerçekten ihtiyaç duyduğu bir ürün geliştirme fikri ortaya çıktı. Ready Cube, sadece bir ürün değil, speedcubing topluluğuna adanmış bir marka olarak doğdu.
            </p>
            <p>
              Topluluk odaklı bir yaklaşımla, gerçek kullanıcı geri bildirimlerini dinleyerek ve turnuva ortamlarında gözlemleyerek, speedcubers'ın gerçekten ihtiyaç duyduğu özellikleri anlamaya çalışıyoruz.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16 sm:mb-20 md:mb-24 lg:mb-28"></div>

        {/* Why Ready Cube Section */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">
            Neden Ready Cube?
          </h2>
          <ul className="space-y-4 sm:space-y-6 max-w-3xl">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 mr-3 sm:mr-4 flex-shrink-0 mt-0.5"
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
              <span className="text-sm sm:text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                <strong className="font-semibold text-gray-900">Speedcuberlara özel tasarım:</strong> Ürünlerimiz, gerçek speedcubers'ın geri bildirimleri ve ihtiyaçları doğrultusunda geliştiriliyor.
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
                <strong className="font-semibold text-gray-900">Gerçek kullanım senaryoları:</strong> Turnuva ortamları, günlük kullanım ve seyahat durumları göz önünde bulundurularak tasarlanıyor.
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
                <strong className="font-semibold text-gray-900">Sade ve fonksiyonel yaklaşım:</strong> Gereksiz özellikler yerine, gerçekten ihtiyaç duyulan fonksiyonlara odaklanıyoruz.
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
                <strong className="font-semibold text-gray-900">Uzun vadeli marka vizyonu:</strong> Ready Cube bir hobi projesi değil, speedcubing topluluğu için sürdürülebilir bir marka olmayı hedefliyor.
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
                <strong className="font-semibold text-gray-900">Türkiye odaklı başlangıç:</strong> Türkiye'deki speedcubing topluluğunun ihtiyaçlarını önceliklendirerek başlıyoruz.
              </span>
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-20 sm:mb-24 lg:mb-28"></div>

        {/* Trust & Transparency Section */}
        <section className="mb-20 sm:mb-24 lg:mb-28">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-10 sm:mb-12 tracking-tight">
            Şeffaflık & Güven
          </h2>
          <div className="max-w-3xl space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal">
            <p>
              Ready Cube olarak, şeffaflık ve güven bizim için çok önemli. Satışlar henüz açık değil çünkü ürünümüz hala üretim aşamasında. Bu durumu açıkça paylaşıyoruz çünkü müşterilerimizle dürüst bir ilişki kurmak istiyoruz.
            </p>
            <p>
              Gizli maliyet veya sürpriz yok. Ürün hazır olduğunda, fiyatlandırma ve özellikler sitede açıkça paylaşılacak. Şu anda ürün geliştirme sürecindeyiz ve topluluk geri bildirimlerini topluyoruz.
            </p>
            <p>
              Her adımı açıkça paylaşıyoruz çünkü Ready Cube'u birlikte inşa ettiğimizi düşünüyoruz. Speedcubing topluluğu bizim için sadece müşteri değil, aynı zamanda bu yolculuğun bir parçası.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-20 sm:mb-24 lg:mb-28"></div>

        {/* Future Vision Section */}
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-10 md:mb-12 tracking-tight">
            Gelecek Planı
          </h2>
          <ul className="space-y-5 max-w-3xl">
            <li className="flex items-start">
              <span className="text-gray-900 mr-4 font-bold text-lg">•</span>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                <strong className="font-semibold text-gray-900">İlk ürün:</strong> Ready Cube Premium Speedcubing Backpack. Türkiye'deki speedcubing topluluğunun geri bildirimleri doğrultusunda geliştiriliyor.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-4 font-bold text-lg">•</span>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                <strong className="font-semibold text-gray-900">Sonraki adımlar:</strong> WCA uyumlu speedcube'ler. İlk ürün başarılı olduktan sonra, kaliteli ve uygun fiyatlı speedcube'ler üretmeyi planlıyoruz.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-4 font-bold text-lg">•</span>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                <strong className="font-semibold text-gray-900">Türkiye → global açılım:</strong> Türkiye'de sağlam bir temel oluşturduktan sonra, uluslararası pazara açılmayı hedefliyoruz.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-4 font-bold text-lg">•</span>
              <span className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                <strong className="font-semibold text-gray-900">Toplulukla birlikte büyüme:</strong> Ready Cube, speedcubing topluluğunun geri bildirimleri ve ihtiyaçları doğrultusunda şekilleniyor. Bu yolculukta birlikte ilerliyoruz.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
