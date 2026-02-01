import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import PurchaseForm from './purchase-form'

export const metadata: Metadata = {
  title: '3x3 F2L Yeni Başlayanlar Rehberi',
  description: 'Speedcubing için hazırlanmış F2L başlangıç PDF rehberi.',
}

export default function PdfF2LPage() {
  // NOT (ileride):
  // - Stripe entegrasyonu daha sonra eklenecek
  // - Gerçek ödeme akışı sonra bağlanacak
  // - PDF sayısı ileride artırılacak

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <div className="inline-flex items-center border border-[#111111]/10 bg-white text-dark text-xs font-semibold px-3 py-1.5 rounded-full">
              PDF Rehber
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
              3x3 F2L Yeni Başlayanlar Rehberi
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl">
              F2L’e yeni başlayanlar için pratik odaklı bir başlangıç rehberi.
            </p>
            <div className="mt-8 h-px bg-[#111111]/10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-xl border border-[#111111]/10 bg-white p-6">
                <h2 className="text-lg font-semibold text-dark tracking-tight">
                  Bu PDF size ne kazandırır?
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>- F2L temel mantığını hızlıca oturtmanıza yardımcı olur</li>
                  <li>- Daha az duraksama, daha akıcı çözüm alışkanlığı</li>
                  <li>- Pratik odaklı, adım adım ilerleyen yapı</li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#111111]/10 bg-white p-6">
                <h2 className="text-lg font-semibold text-dark tracking-tight">
                  Kimler için uygundur / kimler için uygun olmayabilir
                </h2>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-[#111111]/10 bg-white p-4">
                    <div className="text-sm font-semibold text-dark">Uygun</div>
                    <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                      <li>- Yeni başlayan / temel F2L’e geçenler</li>
                      <li>- Pratikle hızlanmak isteyenler</li>
                      <li>- Basit, net anlatım tercih edenler</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-[#111111]/10 bg-white p-4">
                    <div className="text-sm font-semibold text-dark">Uygun olmayabilir</div>
                    <ul className="mt-2 space-y-1.5 text-sm text-gray-600">
                      <li>- İleri seviye algoritma seti arayanlar</li>
                      <li>- Tamamen ezbere dayalı “tüm case” koleksiyonu isteyenler</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4">
              <div className="rounded-xl border border-[#111111]/10 bg-white p-6">
                <div className="text-sm text-gray-500">Fiyat</div>
                <div className="mt-1 text-2xl font-semibold text-dark">
                  0.50 USD
                </div>
              </div>

              <PurchaseForm />
            </div>
          </div>
        </div>
      </div>

      <SimpleFooter />
    </div>
  )
}


