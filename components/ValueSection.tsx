const values = [
  {
    title: 'Topluluk odaklı',
    description: 'Speedcubing topluluğunun gerçek ihtiyaçlarına göre tasarlandı.',
  },
  {
    title: 'Yarışma odaklı',
    description: 'Ciddi speedcuberlar ve turnuvalar için geliştirildi.',
  },
  {
    title: 'Gerçek kullanım',
    description: 'Her detay, gerçek kullanım senaryoları göz önünde bulundurularak tasarlandı.',
  },
]

export default function ValueSection() {
  return (
    <section id="values" className="py-16 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-white px-4 sm:px-6 lg:px-8 section-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {value.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

