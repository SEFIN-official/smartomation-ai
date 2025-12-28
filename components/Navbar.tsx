'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon as Menu, XMarkIcon as X } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Integrations', href: '/integrations' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Resources', href: '/resources' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl font-bold gradient-text">
                Smartomation.ai
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/pricing"
                className="btn-primary text-sm px-4 py-2"
              >
                Try for Free
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container-custom py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/pricing"
                  className="btn-primary inline-block text-sm px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try for Free
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  )
}
