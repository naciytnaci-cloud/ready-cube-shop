import type { Metadata } from 'next'
import LegalPageShell from '@/components/LegalPageShell'

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: '6698 sayılı KVKK kapsamında aydınlatma metni',
}

const UPDATED_AT = '07.01.2026'

export default function KvkkPage() {
  return (
    <LegalPageShell title="KVKK Aydınlatma Metni" updatedAt={UPDATED_AT}>
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">1) Veri Sorumlusu</h2>
        <p>
          İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu sıfatıyla
          Ready Cube tarafından hazırlanmıştır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">2) İşlenen Kişisel Veri Kategorileri</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Kimlik/iletişim (ad, soyad, e‑posta, telefon)</li>
          <li>Adres (teslimat adresi, şehir, posta kodu)</li>
          <li>İşlem güvenliği (IP, log kayıtları)</li>
          <li>Sipariş/işlem bilgileri</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">3) Amaç ve Hukuki Sebep</h2>
        <p>
          Veriler; sipariş süreçlerinin yürütülmesi, ödeme ve teslimat işlemlerinin gerçekleştirilmesi, müşteri ilişkileri yönetimi,
          mevzuattan doğan yükümlülüklerin yerine getirilmesi ve güvenliğin sağlanması amaçlarıyla işlenebilir.
        </p>
        <p>
          İşleme faaliyetleri KVKK’nın 5/2 maddesinde yer alan sözleşmenin kurulması/ifası, hukuki yükümlülüklerin yerine getirilmesi
          ve veri sorumlusunun meşru menfaati hukuki sebeplerine dayanabilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">4) Aktarım</h2>
        <p>
          Ödeme, kargo/lojistik ve teknik altyapı hizmetlerinin sağlanması kapsamında; ilgili hizmet sağlayıcılarla sınırlı olmak üzere
          veri aktarımı yapılabilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">5) Saklama Süresi</h2>
        <p>
          Kişisel veriler, ilgili mevzuatta öngörülen süreler ve işleme amacının gerektirdiği süre ile sınırlı olarak saklanır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">6) KVKK Kapsamındaki Haklarınız</h2>
        <p>KVKK’nın 11. maddesi kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini/silinmesini talep etme, itiraz etme ve benzeri haklara sahipsiniz.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">7) Başvuru</h2>
        <p>
          KVKK kapsamındaki taleplerinizi iletmek için: <span className="text-dark font-medium">iletisim@readycube.shop</span>
        </p>
      </section>
    </LegalPageShell>
  )
}


