export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-dark px-4 sm:px-6 lg:px-8 section-fade-in"
    >
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_10%,#E10600_0%,transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_80%_40%,#ffffff_0%,transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.20] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              Yarışma Seviyesi<br />
              Taşıma Çantası
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              Ready Cube Bag. Düzenli, güvenli, sade.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="/product"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-brand hover:bg-brand-hover active:bg-brand-hover text-white font-semibold rounded-md transition-colors duration-200 ease-out text-base sm:text-lg sm:min-w-[200px] min-h-[48px] sm:min-h-[56px] touch-manipulation btn-active-feedback"
              >
                Ürünü İncele
              </a>
              <a
                href="/shop"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-white/20 hover:border-white/30 text-white font-semibold rounded-md transition-colors duration-200 ease-out text-base sm:text-lg sm:min-w-[200px] min-h-[48px] sm:min-h-[56px] touch-manipulation"
              >
                Shop
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg aspect-square bg-dark.light border border-white/10 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-40 h-40 sm:w-48 sm:h-48 text-white/10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
