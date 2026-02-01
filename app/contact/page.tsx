import type { Metadata } from 'next'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'İletişim',
  description: "Ready Cube ile iletişime geçin. Sorularınız, önerileriniz veya destek talepleriniz için bizimle iletişime geçebilirsiniz. Türkiye merkezli profesyonel hızlı küp ekipmanları.",
  openGraph: {
    title: 'İletişim | Ready Cube',
    description: 'Ready Cube ile iletişime geçin. Sorularınız ve destek talepleriniz için bizimle iletişime geçebilirsiniz.',
    type: 'website',
  },
}

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            İletişim
          </h1>
          <p className="mt-8 text-lg text-white/90 font-normal leading-relaxed">
            Sorularınız için bize ulaşın
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-t border-gray-800/50 bg-dark-light">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">
              Güven
            </h2>
            <p className="text-base text-white/80 font-normal leading-relaxed">
              Ready Cube ürünleri, kalite ve güvenilirlik standartlarımıza uygun
              olarak üretilir.
            </p>

            <div className="mt-12 space-y-10">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Türkiye'de Tasarlandı
                  </h3>
                  <p className="mt-3 text-base text-white/80 leading-relaxed font-normal">
                    Ready Cube ürünleri, Türkiye'de hızlı küpçü topluluğunun
                    ihtiyaçları göz önünde bulundurularak tasarlanmıştır.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Numune ve Kalite Testlerinden Geçmiştir
                  </h3>
                  <p className="mt-3 text-base text-white/80 leading-relaxed font-normal">
                    Her ürün, kullanım senaryolarına uygun olarak test edilir ve
                    kalite kontrolünden geçer.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Profesyonel Kullanım İçin Üretilmiştir
                  </h3>
                  <p className="mt-3 text-base text-white/80 leading-relaxed font-normal">
                    Ready Cube ürünleri, yarışma ortamında güvenle kullanılmak
                    üzere tasarlanmış ve üretilmiştir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-6">
            Bize Ulaşın
          </h2>
          <p className="text-base text-white/80 font-normal leading-relaxed">
            Sorularınız, önerileriniz veya destek talepleriniz için bizimle
            iletişime geçebilirsiniz.
          </p>
          
          <div className="mt-12">
            <div className="rounded-xl border border-gray-800 bg-dark-light p-8">
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white">E-posta</h3>
              <a
                href="mailto:info@readycube.com"
                className="mt-2 inline-block text-base text-primary hover:text-primary-light transition-colors"
              >
                info@readycube.com
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Button
              href="mailto:info@readycube.com"
              variant="primary"
              className="w-full sm:w-auto"
            >
              E-posta Gönder
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
