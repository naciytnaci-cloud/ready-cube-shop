import Button from '@/components/Button'

export default function Product() {
  const features = [
    '11+ WCA bulmacası kapasitesi',
    '2x2, 3x3, yedek 3x3, 4x4, 5x5, 6x6, 7x7',
    'Megaminx, Pyraminx, Skewb, Square-1, Clock uyumlu',
    'Darbe emici sünger katman',
    'Üst koruma sünger plakası',
    'Üst fermuarlı aksesuar bölmesi (şarj aleti, powerbank)',
    'Gizli sırt askısı (sırt çantası modu)',
    'Elde taşıma kulpu',
    'Suya dayanıklı dış yüzey',
    'Profesyonel iç düzen',
    'Yarışma odaklı tasarım',
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready Cube V2
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Profesyonel Speedcubing Çantası
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            Tüm WCA bulmacalarını tek çantada taşı. Darbeye dayanıklı, modüler ve
            yarışma odaklı tasarım.
          </p>
        </div>
      </section>

      {/* Product Images Section */}
      <section className="border-t border-gray-800/50 bg-dark-light">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-square w-full overflow-hidden rounded-xl border border-gray-800 bg-dark-lighter">
              <div className="flex h-full items-center justify-center text-gray-600">
                <div className="text-center">
                  <svg
                    className="mx-auto h-20 w-20 text-gray-700"
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
                  <p className="mt-4 text-sm text-gray-500">
                    Ürün görseli yakında eklenecek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Özellikler
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Ready Cube V2, profesyonel speedcubing ihtiyaçlarını karşılamak için
            tasarlandı.
          </p>

          <div className="mt-12 space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start border-b border-gray-800/50 pb-5"
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                    <svg
                      className="h-4 w-4 text-primary"
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
                  </div>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="border-t border-gray-800/50 bg-dark-light">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Teknik Detaylar
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-primary">
                  Kapasite
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  11+ WCA bulmacası ve aksesuarlar için yeterli alan. Tüm
                  yarışma bulmacalarını tek çantada taşı.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-primary">
                  Koruma
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Darbe emici sünger katman ve üst koruma plakası ile bulmacalar
                  her zaman güvende.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-primary">
                  Tasarım
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Modüler iç düzen ve profesyonel organizasyon. Her bulmaca
                  için özel yer.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-primary">
                  Kullanım
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Gizli sırt askısı ile sırt çantası modu veya elde taşıma
                  kulpu ile klasik kullanım.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Ready Cube V2'yi Keşfet
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Yarışma gününde yanında olacak profesyonel çantan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" className="w-full sm:w-auto">
              Yakında Satışa Çıkacak
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
