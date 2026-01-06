const trustBlocks = [
  {
    title: 'Güvenli ödeme',
    description: 'Ödeme altyapısı: Iyzico (yakında).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l7 4v6c0 5-3.5 8-7 8s-7-3-7-8V7l7-4Z"
        />
      </svg>
    ),
  },
  {
    title: 'Hızlı kargo',
    description: 'Türkiye içi gönderim (yakında).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 7h12v10H3V7Zm12 3h3l3 3v4h-6V10Zm-9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    ),
  },
  {
    title: 'Kolay iade',
    description: 'Politika sayfaları hazırlanıyor.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7H5v3m14 4a7 7 0 1 1-2-5.2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 7v5h-5"
        />
      </svg>
    ),
  },
  {
    title: 'Destek',
    description: 'Sorular için: iletisim@readycube.shop',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M18 10a6 6 0 0 0-12 0v3a3 3 0 0 0 3 3h1v-6H9a3 3 0 0 0-3 3v1a5 5 0 0 0 5 5h1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14 16h1a3 3 0 0 0 3-3v-3"
        />
      </svg>
    ),
  },
]

export default function TrustShippingPaymentSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutralSurface px-4 sm:px-6 lg:px-8 section-fade-in border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustBlocks.map((b) => (
            <div
              key={b.title}
              className="bg-white border border-[#111111]/10 rounded-xl p-6 sm:p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-neutralSurface border border-[#111111]/10 flex items-center justify-center text-dark">
                {b.icon}
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-semibold text-dark leading-tight">
                {b.title}
              </h3>
              <p className="mt-2 text-base text-gray-600 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


