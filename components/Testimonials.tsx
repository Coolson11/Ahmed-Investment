'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Their photography captured the essence of our brand perfectly. Highly recommend!",
    author: "Jane Doe",
    company: "Tech Startup Inc.",
  },
  {
    quote: "The videography team delivered beyond our expectations. Professional and creative.",
    author: "John Smith",
    company: "Marketing Agency",
  },
  {
    quote: "Outstanding graphic design work. They understood our vision and executed flawlessly.",
    author: "Alice Johnson",
    company: "Fashion Brand",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}