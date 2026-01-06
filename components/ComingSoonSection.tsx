export default function ComingSoonSection() {
  const comingSoonProducts = [
    {
      name: 'WCA Küpleri',
    },
    {
      name: 'Yedek Parçalar',
    },
    {
      name: 'Aksesuarlar',
    },
    {
      name: 'Özel Seriler',
    },
  ]

  return (
    <section className="py-20 sm:py-28 md:py-32 lg:py-40 bg-white px-4 sm:px-6 lg:px-8 section-fade-in border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-10 sm:mb-12 md:mb-16 tracking-tight leading-tight text-center">
          WCA Küpleri (Yakında)
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {comingSoonProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-[#111111]/10 rounded-lg p-8 sm:p-10 opacity-70 cursor-default"
              >
                <div className="text-center">
                  <p className="text-sm sm:text-base text-gray-400 font-medium uppercase tracking-wide">
                    YAKINDA
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

