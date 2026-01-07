import type { Metadata } from 'next'
import LegalPageShell from '@/components/LegalPageShell'

export const metadata: Metadata = {
  title: 'Mesafeli Satış Sözleşmesi',
  description: 'Ready Cube Mesafeli Satış Sözleşmesi',
}

const UPDATED_AT = '07.01.2026'

export default function DistanceSalesContractPage() {
  return (
    <LegalPageShell title="Mesafeli Satış Sözleşmesi" updatedAt={UPDATED_AT}>
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">1) Taraflar</h2>
        <p>
          İşbu sözleşme, aşağıdaki taraflar arasında, elektronik ortamda siparişin onaylanmasıyla kurulmuştur.
        </p>
        <div className="bg-neutralSurface border border-[#111111]/10 rounded-xl p-5 space-y-2">
          <p className="text-sm"><span className="text-dark font-semibold">Satıcı:</span> Ready Cube</p>
          <p className="text-sm"><span className="text-dark font-semibold">E‑posta:</span> iletisim@readycube.shop</p>
          <p className="text-sm text-gray-500">
            (Satıcı ünvan/adres/vergisel bilgiler canlıya çıkmadan önce eklenmelidir.)
          </p>
        </div>
        <p>
          <span className="text-dark font-semibold">Alıcı:</span> Sipariş formunda beyan edilen kişi.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">2) Konu</h2>
        <p>
          Sözleşmenin konusu; alıcının Ready Cube web sitesi üzerinden siparişini verdiği ürünün satışı ve teslimi ile ilgili
          tarafların hak ve yükümlülüklerinin belirlenmesidir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">3) Ürün, Fiyat ve Ödeme</h2>
        <p>
          Ürün: Ready Cube Bag. Adet: 1 (tek ürün akışı).
        </p>
        <p>
          Ürün bedeli, kargo ücreti (varsa) ve toplam tutar sipariş/ödeme ekranında gösterilen bilgiler üzerinden belirlenir.
          Ödeme, iyzico altyapısı üzerinden gerçekleştirilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">4) Teslimat</h2>
        <p>
          Teslimat, alıcının sipariş sırasında bildirdiği adrese yapılır. Kargo süresi ve taşıyıcı bilgisi sipariş ekranında
          belirtilir. Türkiye içi teslimat esastır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">5) Cayma Hakkı</h2>
        <p>
          Alıcı, 6502 sayılı Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında, teslim tarihinden itibaren 14 gün içinde
          herhangi bir gerekçe göstermeksizin cayma hakkını kullanabilir.
        </p>
        <p>
          Cayma hakkının kullanılması için alıcının yazılı bildirim yapması gerekir. İletişim: <span className="text-dark font-medium">iletisim@readycube.shop</span>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">6) İade Süreci</h2>
        <p>
          Cayma bildiriminin ardından ürünün, teslimat bilgileri paylaşılacak şekilde satıcıya geri gönderilmesi gerekir.
          Ürünün kullanılmamış/hasarsız olması beklenir. İade koşulları, ilgili mevzuat çerçevesinde değerlendirilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">7) Uyuşmazlık</h2>
        <p>
          Uyuşmazlık halinde, alıcının yerleşim yerindeki veya işlemin yapıldığı yerdeki Tüketici Hakem Heyetleri/Tüketici Mahkemeleri
          yetkilidir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-dark">8) Yürürlük</h2>
        <p>
          Alıcı, siparişi onaylayarak işbu sözleşme hükümlerini okuduğunu, anladığını ve kabul ettiğini beyan eder.
        </p>
      </section>
    </LegalPageShell>
  )
}


