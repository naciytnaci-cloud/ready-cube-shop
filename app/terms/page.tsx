import type { Metadata } from 'next'
import LegalPageShell from '@/components/LegalPageShell'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları',
  description: 'Ready Cube web sitesi kullanım koşulları',
}

const UPDATED_AT = '07.01.2026'

export default function TermsPage() {
  return (
    <LegalPageShell title="Kullanım Koşulları" updatedAt={UPDATED_AT}>
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">1) Kabul</h2>
        <p>
          Ready Cube web sitesini kullanarak işbu Kullanım Koşulları’nı kabul etmiş sayılırsınız.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">2) Hizmet Kapsamı</h2>
        <p>
          Site; ürün tanıtımı, sipariş oluşturma ve satış sonrası bilgilendirme süreçlerini desteklemek amacıyla hizmet verir.
          Ready Cube, site içeriğini ve hizmet kapsamını güncelleyebilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">3) Fiyatlandırma ve Ödeme</h2>
        <p>
          Ürün fiyatı ve kargo ücreti, satın alma ekranında gösterildiği şekliyle uygulanır. Ödemeler iyzico altyapısı üzerinden
          gerçekleştirilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">4) Teslimat</h2>
        <p>
          Teslimat, alıcının sipariş sırasında bildirdiği adrese yapılır. Türkiye içi teslimat esastır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">5) Fikri Mülkiyet</h2>
        <p>
          Sitedeki tüm içerik (metin, görsel, marka unsurları ve tasarım) Ready Cube’a aittir veya kullanım hakkı ile sunulur.
          İzinsiz çoğaltılamaz, kopyalanamaz ve dağıtılamaz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">6) Sorumluluğun Sınırlandırılması</h2>
        <p>
          Site “olduğu gibi” sunulur. Ready Cube, mevzuatın izin verdiği ölçüde, dolaylı zararlardan sorumlu tutulamaz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">7) Değişiklikler</h2>
        <p>
          Bu koşullar zaman zaman güncellenebilir. Güncel metin bu sayfada yayımlanır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">8) İletişim</h2>
        <p>
          Sorularınız için: <span className="text-dark font-medium">iletisim@readycube.shop</span>
        </p>
      </section>
    </LegalPageShell>
  )
}


