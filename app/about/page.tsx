'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are a passionate team of creatives dedicated to bringing your visions to life through exceptional photography, videography, and design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2015, our agency has been at the forefront of creative excellence. We believe that every project is an opportunity to tell a unique story and create something truly remarkable.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Our team combines technical expertise with artistic vision to deliver work that not only meets but exceeds expectations. From intimate portraits to large-scale productions, we approach each project with the same level of passion and dedication.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We&apos;re not just service providers; we&apos;re your creative partners, committed to understanding your vision and bringing it to life in ways that inspire and captivate.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/team.jpg"
              alt="Our team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/team-member1.jpg"
                alt="Team member 1"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600 dark:text-gray-300">Lead Photographer</p>
            </div>
            <div className="text-center">
              <Image
                src="/team-member2.jpg"
                alt="Team member 2"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Bob Smith</h3>
              <p className="text-gray-600 dark:text-gray-300">Videographer</p>
            </div>
            <div className="text-center">
              <Image
                src="/team-member3.jpg"
                alt="Team member 3"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Carol Davis</h3>
              <p className="text-gray-600 dark:text-gray-300">Graphic Designer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Want to see our work, learn more about services, or start a project?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/portfolio" className="inline-flex justify-center rounded-full bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
              View Portfolio
            </Link>
            <Link href="/services" className="inline-flex justify-center rounded-full border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition-colors">
              Explore Services
            </Link>
            <Link href="/contact" className="inline-flex justify-center rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}