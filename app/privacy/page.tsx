import type { Metadata } from 'next'
import LegalPageShell from '@/components/LegalPageShell'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Ready Cube Gizlilik Politikası',
}

const UPDATED_AT = '07.01.2026'

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Gizlilik Politikası" updatedAt={UPDATED_AT}>
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">1) Genel</h2>
        <p>
          Bu Gizlilik Politikası, Ready Cube web sitesini ziyaret ettiğinizde ve/veya siteden hizmet aldığınızda
          kişisel verilerinize ilişkin temel ilkeleri açıklamak için hazırlanmıştır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">2) Toplanan Veriler</h2>
        <p>Hizmeti sunmak için aşağıdaki veri türleri işlenebilir:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>İletişim bilgileri (ad, soyad, e‑posta, telefon)</li>
          <li>Adres bilgileri (teslimat/adres detayları)</li>
          <li>Sipariş/işlem bilgileri (ürün, tutar, kargo ücreti, sipariş numarası)</li>
          <li>Teknik veriler (IP bilgisi, tarayıcı bilgisi, log kayıtları)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">3) Amaçlar</h2>
        <p>Kişisel veriler; siparişin alınması, ödeme ve teslimat süreçlerinin yürütülmesi, müşteri desteği sağlanması, güvenlik ve dolandırıcılık önleme amaçlarıyla işlenebilir.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">4) Ödeme ve Üçüncü Taraflar</h2>
        <p>
          Ödeme işlemleri, güvenli ödeme altyapısı sağlayıcıları üzerinden yürütülür. Ödeme bilgileri ilgili sağlayıcı
          tarafından işlenir; Ready Cube, kart verilerinizi sistemlerinde saklamaz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">5) Çerezler (Cookies)</h2>
        <p>
          Site deneyimini iyileştirmek ve güvenliği sağlamak için çerezler kullanılabilir. Tarayıcı ayarlarınız üzerinden
          çerezleri yönetebilir veya devre dışı bırakabilirsiniz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">6) Saklama ve Güvenlik</h2>
        <p>
          Kişisel veriler, ilgili mevzuatta öngörülen sürelerle sınırlı olarak saklanır. Verilerin güvenliği için makul
          teknik ve idari tedbirler uygulanır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">7) İletişim</h2>
        <p>
          Gizlilikle ilgili talepleriniz için bize ulaşabilirsiniz: <span className="text-dark font-medium">iletisim@readycube.shop</span>
        </p>
      </section>
    </LegalPageShell>
  )
}


