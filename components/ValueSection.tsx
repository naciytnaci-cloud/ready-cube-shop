const features = [
  {
    title: 'Türkiye Odaklı',
  },
  {
    title: 'Üst Seviye Kalite',
  },
  {
    title: 'Hızlı Küp İçin Tasarlandı',
  },
]

export default function ValueSection() {
  return (
    <section id="values" className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6 lg:px-8 section-fade-in border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center"
            >
              <div className="w-2 h-2 rounded-full bg-gray-400 mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

