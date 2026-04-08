'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Lightbox } from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const portfolioItems = [
  { id: 1, src: '/assets/design/design-01.jpeg', alt: 'Graphic design work 1', category: 'Graphic Design' },
  { id: 2, src: '/assets/design/design-02.jpeg', alt: 'Graphic design work 2', category: 'Graphic Design' },
  { id: 3, src: '/assets/design/design-03.jpeg', alt: 'Graphic design work 3', category: 'Graphic Design' },
  { id: 4, src: '/assets/design/design-04.jpeg', alt: 'Graphic design work 4', category: 'Graphic Design' },
  { id: 5, src: '/assets/design/design-01.jpeg', alt: 'Graphic design work 5', category: 'Graphic Design' },
  { id: 6, src: '/assets/design/design-02.jpeg', alt: 'Graphic design work 6', category: 'Graphic Design' },
  { id: 7, src: '/assets/photo/photo-01.jpeg', alt: 'Photography work 1', category: 'Photography' },
  { id: 8, src: '/assets/photo/photo-02.jpeg', alt: 'Photography work 2', category: 'Photography' },
  { id: 9, src: '/assets/photo/photo-03.jpeg', alt: 'Photography work 3', category: 'Photography' },
  { id: 10, src: '/assets/photo/photo-04.jpeg', alt: 'Photography work 4', category: 'Photography' },
  { id: 11, src: '/assets/photo/photo-05.jpeg', alt: 'Photography work 5', category: 'Photography' },
  { id: 12, src: '/assets/photo/photo-06.jpeg', alt: 'Photography work 6', category: 'Photography' },
]

const categories = ['All', 'Photography', 'Videography', 'Graphic Design']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our diverse collection of creative work across photography, videography, and graphic design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded-full transition-colors min-w-[6rem] ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => openLightbox(index)}
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
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={filteredItems.map(item => ({ src: item.src }))}
          index={currentIndex}
        />

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Want to learn more about our creative process or start a collaboration?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/about" className="inline-flex justify-center rounded-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
              About Us
            </Link>
            <Link href="/services" className="inline-flex justify-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="inline-flex justify-center rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}