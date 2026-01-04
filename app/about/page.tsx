import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Ready Cube, Türkiye\'de speedcubing topluluğu için özel olarak tasarlanmış profesyonel ekipmanlar sunar. Kalite, güven ve profesyonellik değerlerimizle speedcubing markası olarak hizmet veriyoruz.',
  openGraph: {
    title: 'Hakkımızda | Ready Cube',
    description: 'Ready Cube, Türkiye\'de speedcubing topluluğu için özel olarak tasarlanmış profesyonel ekipmanlar sunar.',
    type: 'website',
  },
}

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Hakkımızda
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-t border-gray-800/50 bg-dark-light">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-base text-white/90 leading-relaxed">
              <p>
                Ready Cube, Türkiye'de speedcubing için özel olarak tasarlanmış
                ekipman eksikliğini fark eden bir speedcuber tarafından kuruldu.
              </p>
              <p>
                Amacımız; sporcuların gerçekten ihtiyaç duyduğu, kaliteli, güvenli
                ve profesyonel ürünler üretmek.
              </p>
              <p className="text-lg font-medium text-white">
                Ready Cube bir hobi projesi değil, bir speedcubing markasıdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">
            Değerlerimiz
          </h2>
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-lg font-medium text-primary">
                Kalite
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Her ürün, profesyonel kullanım için tasarlanır ve üretilir.
                Kalite, bizim için önceliktir.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary">
                Güven
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Sporcuların yarışma gününde güvenebileceği, dayanıklı ve güvenilir
                ekipmanlar üretiyoruz.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary">
                Profesyonellik
              </h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Speedcubing topluluğunun gerçek ihtiyaçlarını anlayarak, bu
                ihtiyaçlara yönelik çözümler geliştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
