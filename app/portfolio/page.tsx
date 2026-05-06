'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Lightbox } from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const portfolioItems = [
  { id: 1, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8hSDSz3GHo1vkZIC0lTbEcRXrPxsy7WO2qtmL', alt: 'Graphic design work 1', category: 'Graphic Design' },
  { id: 2, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8tynGKiwkef3J7zrZFHIoTA25Shi4Unaju9cE', alt: 'Graphic design work 2', category: 'Graphic Design' },
  { id: 3, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8uzbCcZUt7vAwKPi8bgmY6SyGxZUXTqMFpl4s', alt: 'Graphic design work 3', category: 'Graphic Design' },
  { id: 4, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8kcZqMvi7Nf9zgt2hJw1oaCdkcGMqTEbXlinj', alt: 'Graphic design work 4', category: 'Graphic Design' },
  { id: 5, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8hSDSz3GHo1vkZIC0lTbEcRXrPxsy7WO2qtmL', alt: 'Graphic design work 5', category: 'Graphic Design' },
  { id: 6, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8tynGKiwkef3J7zrZFHIoTA25Shi4Unaju9cE', alt: 'Graphic design work 6', category: 'Graphic Design' },
  { id: 7, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8cEBLfRVQNDw63yL5G0uzcVZR8HfaMY1AokjF', alt: 'Photography work 1', category: 'Photography' },
  { id: 8, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8tjoqvvkef3J7zrZFHIoTA25Shi4Unaju9cEQ', alt: 'Photography work 2', category: 'Photography' },
  { id: 9, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8eCQX03FIONK8hE4YrnfAeMwtcTgoGFaCuq70', alt: 'Photography work 3', category: 'Photography' },
  { id: 10, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8IB40ZKNc2HjWiuk6CADy7mXMBv0Q4NEwtfgp', alt: 'Photography work 4', category: 'Photography' },
  { id: 11, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8HgbAO9FXl397iYXVD0UrMQ1gTsRuhztWcvAy', alt: 'Photography work 5', category: 'Photography' },
  { id: 12, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8Fbg45d1fyAnRUuqYP8SGD1T5vWNF9sBmecHZ', alt: 'Photography work 6', category: 'Photography' },
  { id: 13, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8DG5Bn5YWXKiRUzVhND98qwv0SlQ5ErA63Jn2', alt: 'Photography work 7', category: 'Photography' },
  { id: 14, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8o88m6WfOVeLAm7PlyKGzrs3Rd8HtFJbnha42', alt: 'Photography work 8', category: 'Photography' },
  { id: 15, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8Guc16MpVgtHilFo1KkuPswZ0A5n4LYXEWJGT', alt: 'Photography work 9', category: 'Photography' },
  { id: 16, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8VqKyoQWReqAUVgbKI0ycd9f7aM8x3htBZkJO', alt: 'Photography work 10', category: 'Photography' },
  { id: 17, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8kc7SAki7Nf9zgt2hJw1oaCdkcGMqTEbXlinj', alt: 'Photography work 11', category: 'Photography' },
  { id: 18, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8OD55twd3jbzYaKShdfr7lURZswuQE01LPA8V', alt: 'Photography work 12', category: 'Photography' },
  { id: 19, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8koo3HSpi7Nf9zgt2hJw1oaCdkcGMqTEbXlin', alt: 'Photography work 13', category: 'Photography' },
  { id: 20, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8HAH90LXl397iYXVD0UrMQ1gTsRuhztWcvAye', alt: 'Photography work 14', category: 'Photography' },
  { id: 21, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8jvHXOR4iTrFVYNbCRUQHEIfSDa1PZKA29t6m', alt: 'Photography work 15', category: 'Photography' },
  { id: 22, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8UMhJ1THxAfXP0UqYtmOjTnyMQLG9i56KszbC', alt: 'Photography work 16', category: 'Photography' },
  { id: 23, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8yavUy2o6ILyKDs70j5AcR9XBOpStbmZToHhn', alt: 'Photography work 17', category: 'Photography' },
  { id: 24, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8jIAdEm4iTrFVYNbCRUQHEIfSDa1PZKA29t6m', alt: 'Photography work 18', category: 'Photography' },
  { id: 25, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK84hsko5qjRZ0zdVCnLYoXgbmFBDQ1klJKyuh7', alt: 'Photography work 19', category: 'Photography' },
  { id: 26, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8RB2ajG7uIbfmcTYazDdAt81LM2nrxCQ7NOSj', alt: 'Photography work 20', category: 'Photography' },
  { id: 27, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8gZ4NgVMcMVsnNEizJ2RmCeOFb9vpQhYIGkgl', alt: 'Photography work 21', category: 'Photography' },
  { id: 28, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8tBWloIkef3J7zrZFHIoTA25Shi4Unaju9cEQ', alt: 'Photography work 22', category: 'Photography' },
  { id: 29, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK83SWYNxtpeQ8TW6w2vi09FGrdjoSDUMZbVRnc', alt: 'Photography work 23', category: 'Photography' },
  { id: 30, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8H6dB9nXl397iYXVD0UrMQ1gTsRuhztWcvAye', alt: 'Photography work 24', category: 'Photography' },
  { id: 31, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK8zXD1emnvKO1VkexdpGMhNRSPyACU6T0f5Q4W', alt: 'Photography work 25', category: 'Photography' },
  { id: 32, src: 'https://ngrzf4k9ko.ufs.sh/f/e4Sw6wFIONK81LFXXX2rRc2zyWleOtfdoVsYZuiAn7kBTFmx', alt: 'Photography work 26', category: 'Photography' },
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