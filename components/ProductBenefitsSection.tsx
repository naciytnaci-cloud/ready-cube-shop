const benefits = [
  {
    title: 'Speedcuberlar için',
    description: 'WCA günleri ve günlük kullanım için.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3l8 4-8 4-8-4 8-4Zm0 8l8-4v10l-8 4-8-4V7l8 4Z"
        />
      </svg>
    ),
  },
  {
    title: 'Koruma odaklı',
    description: 'Dayanıklı yapı, güvenli taşıma.',
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
    title: 'Akıllı düzen',
    description: 'Küpler, aksesuarlar, küçük parçalar.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7h16M4 12h16M4 17h16"
        />
      </svg>
    ),
  },
  {
    title: 'Hafif ve taşınabilir',
    description: 'Gün boyu konforlu kullanım.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 6V5a3 3 0 0 1 6 0v1m4 0H5a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1Z"
        />
      </svg>
    ),
  },
  {
    title: 'Yarışma hazır',
    description: 'Düzenli, hızlı erişim.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l2.5 1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
]

export default function ProductBenefitsSection() {
  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 bg-neutralSurface px-4 sm:px-6 lg:px-8 section-fade-in border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-dark tracking-tight leading-tight">
            Bu Çanta Neden?
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Tek cümleyle. Gerçek kullanım için.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="mx-auto w-12 h-12 rounded-xl bg-white border border-[#111111]/10 flex items-center justify-center text-dark mb-4">
                {b.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-dark leading-tight">
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


