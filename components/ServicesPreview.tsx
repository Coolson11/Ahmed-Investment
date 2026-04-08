'use client'

import { motion } from 'framer-motion'
import { Camera, Video, Palette } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services for portraits, events, and commercial shoots.',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic video production including commercials, documentaries, and social media content.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative graphic design solutions for branding, marketing materials, and digital assets.',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive creative services to bring your vision to life.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}