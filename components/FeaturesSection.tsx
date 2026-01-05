'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Competition Ready',
    description: 'Built for serious speedcubers who compete.',
  },
  {
    title: 'Clean Design',
    description: 'Simple, focused, no distractions.',
  },
  {
    title: 'Cubers Focused',
    description: 'Made by the community, for the community.',
  },
  {
    title: 'Performance First',
    description: 'Every detail optimized for speed.',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={ref} className="py-20 sm:py-24 md:py-32 bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
