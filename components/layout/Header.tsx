'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Materials', href: '#materials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-black/90 backdrop-blur-xl border-b border-brand-border/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Sunrise Apartments Home">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/images/logo.png"
                alt="Sunrise Apartments & Interiors Logo"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-brand-cream text-sm font-semibold leading-tight">
                Sunrise Apartments
              </p>
              <p className="font-body text-brand-gold text-xs tracking-widest uppercase">
                & Interiors
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-brand-cream/70 hover:text-brand-cream animated-underline transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917013070030"
              className="btn-outline text-xs px-4 py-2.5"
              aria-label="Call us"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919652540850?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20construction%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2.5"
              aria-label="WhatsApp us"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-brand-cream transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-brand-cream transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-brand-cream transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-heading text-4xl text-brand-cream hover:text-brand-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12 flex flex-col gap-3"
              >
                <a
                  href="https://wa.me/919652540850"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary justify-center"
                >
                  WhatsApp Us
                </a>
                <a
                  href="tel:+917013070030"
                  onClick={() => setMenuOpen(false)}
                  className="btn-outline justify-center"
                >
                  Call Now
                </a>
              </motion.div>
            </div>

            <div className="px-8 pb-10">
              <p className="font-body text-xs text-brand-cream/30 uppercase tracking-widest">
                Andhra Pradesh, India
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
