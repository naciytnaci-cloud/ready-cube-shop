export default function PreLaunchChecklistSection() {
  const checklist = [
    { title: 'Görsel tutarlılık', notes: 'Renkler, spacing, kart radius, hover süreleri.' },
    { title: 'Mobil çalışıyor', notes: 'CTA’lar tam genişlik, metinler okunur, menü rahat.' },
    { title: 'Bozuk layout yok', notes: 'Overflow yok, grid kırılmaları yok, boş state’ler kasıtlı.' },
    { title: 'Butonlar responsive', notes: '44px+ dokunma alanı, hızlı feedback, disabled state net.' },
    { title: 'Brand kimliği net', notes: 'Charcoal + kırmızı accent, ton tutarlı, dil profesyonel.' },
  ]

  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-dashed border-[#111111]/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-dark tracking-tight">
              Pre‑Launch Checklist (DEV)
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Instagram / YouTube / üretim planı için iç kontrol listesi.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutralSurface border border-[#111111]/10 text-gray-700">
            Yalnızca development
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {checklist.map((item) => (
            <div
              key={item.title}
              className="bg-neutralSurface border border-[#111111]/10 rounded-xl p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full border border-[#111111]/20 bg-white" />
                <div>
                  <div className="text-sm sm:text-base font-semibold text-dark">
                    {item.title}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {item.notes}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-600">
          Karar: Bu maddeler “evet” ise içerik üretimi ve satış ön hazırlıkları başlayabilir.
        </div>
      </div>
    </section>
  )
}


