'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  { id: 1, src: '/assets/design/design-01.jpeg', alt: 'Graphic design work 1', category: 'Graphic Design' },
  { id: 2, src: '/assets/design/design-02.jpeg', alt: 'Graphic design work 2', category: 'Graphic Design' },
  { id: 3, src: '/assets/design/design-03.jpeg', alt: 'Graphic design work 3', category: 'Graphic Design' },
  { id: 4, src: '/assets/design/design-04.jpeg', alt: 'Graphic design work 4', category: 'Graphic Design' },
  { id: 5, src: '/assets/photo/photo-01.jpeg', alt: 'Photography work 1', category: 'Photography' },
  { id: 6, src: '/assets/photo/photo-02.jpeg', alt: 'Photography work 2', category: 'Photography' },
]

export default function PortfolioHighlights() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see the quality of our creative work.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}