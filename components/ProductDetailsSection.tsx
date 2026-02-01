const details = [
  {
    title: 'İç koruma',
    description: 'Küpler için güvenli ve stabil taşıma.',
  },
  {
    title: 'Akıllı bölmeler',
    description: 'Aksesuarlar için hızlı ve düzenli erişim.',
  },
  {
    title: 'Fermuar kalitesi',
    description: 'Günlük kullanımda akıcı ve dayanıklı.',
  },
  {
    title: 'Dış malzeme',
    description: 'Aşınmaya karşı güçlü, temiz görünüm.',
  },
  {
    title: 'Konfor',
    description: 'Hafif yapı, uzun taşımada rahatlık.',
  },
]

export default function ProductDetailsSection() {
  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 bg-white px-4 sm:px-6 lg:px-8 section-fade-in border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark tracking-tight leading-tight">
            Her Detayında Tasarım
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* LEFT — Images (placeholders) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
            <div className="rounded-xl bg-neutralSurface border border-[#111111]/10 overflow-hidden">
              <div className="aspect-[4/3] flex items-center justify-center">
                <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                  Dış Görünüm
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-neutralSurface border border-[#111111]/10 overflow-hidden">
              <div className="aspect-[4/3] flex items-center justify-center">
                <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                  İç Düzen
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Detail points */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="space-y-6 sm:space-y-7">
              {details.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base sm:text-lg font-semibold text-dark leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


