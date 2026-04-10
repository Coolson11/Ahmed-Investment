'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-black/60 dark:bg-black/60 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className={`text-2xl font-bold ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
            Ahmed&apos;s Investment
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`${scrolled ? 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' : 'text-white hover:text-gray-300'} transition-colors font-medium`}>Home</Link>
            <Link href="/portfolio" className={`${scrolled ? 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' : 'text-white hover:text-gray-300'} transition-colors font-medium`}>Portfolio</Link>
            <Link href="/about" className={`${scrolled ? 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' : 'text-white hover:text-gray-300'} transition-colors font-medium`}>About</Link>
            <Link href="/services" className={`${scrolled ? 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' : 'text-white hover:text-gray-300'} transition-colors font-medium`}>Services</Link>
            <Link href="/contact" className={`${scrolled ? 'text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300' : 'text-white hover:text-gray-300'} transition-colors font-medium`}>Contact</Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle className={scrolled ? '' : 'text-white hover:bg-white/10'} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'} hover:text-gray-300 transition-colors`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 dark:bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/portfolio" className="block text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
              <Link href="/about" className="block text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/services" className="block text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/contact" className="block text-white hover:text-blue-400 transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}