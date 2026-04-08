'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Camera, Video, Palette, Users, Building, Heart } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services including portraits, events, product shoots, and commercial photography.',
    features: ['High-resolution images', 'Professional editing', 'Quick turnaround', 'Multiple formats'],
    pricing: 'Starting at $500',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic video production for commercials, documentaries, social media, and corporate videos.',
    features: ['4K video production', 'Professional editing', 'Sound design', 'Color grading'],
    pricing: 'Starting at $1,000',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative graphic design solutions for branding, marketing materials, websites, and digital assets.',
    features: ['Brand identity', 'Print design', 'Digital graphics', 'Logo design'],
    pricing: 'Starting at $300',
  },
  {
    icon: Users,
    title: 'Event Coverage',
    description: 'Complete event photography and videography services for weddings, corporate events, and parties.',
    features: ['Full event coverage', 'Candid and posed shots', 'Highlight reels', 'Online galleries'],
    pricing: 'Starting at $800',
  },
  {
    icon: Building,
    title: 'Commercial Projects',
    description: 'Professional services for businesses including product photography, corporate headshots, and marketing materials.',
    features: ['Commercial licensing', 'Brand consistency', 'High-quality production', 'Flexible scheduling'],
    pricing: 'Custom pricing',
  },
  {
    icon: Heart,
    title: 'Personal Projects',
    description: 'Personal photography and videography for families, portraits, and special occasions.',
    features: ['Personalized sessions', 'Family packages', 'Maternity photos', 'Pet photography'],
    pricing: 'Starting at $200',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive creative services tailored to bring your vision to life with professional quality and artistic excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-blue-600">{service.pricing}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Contact us today to discuss your creative needs and get a custom quote.
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </main>
  )
}