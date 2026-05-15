'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero — Sunrise Apartments & Interiors"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="/images/home1/hero-frame.jpg"
          alt="Premium construction and interior design — Sunrise Apartments"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center scale-110"
        />
      </motion.div>

      {/* Cinematic overlay layers */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-black/60 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-5 md:px-10 pb-24 md:pb-32 lg:pb-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5"
        >
          <span className="label-text">Andhra Pradesh · Since 2018</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="heading-xl text-brand-cream max-w-3xl mb-6 text-balance"
        >
          Spaces Built With{' '}
          <span className="text-brand-gold">Engineering Precision</span>{' '}
          & Interior Intelligence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-body text-brand-cream/70 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Lighting layouts planned before ceiling execution. Waterproofing designed
          as a system, not a product. Construction that respects science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="btn-primary text-base px-8 py-4">
            Explore Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://wa.me/919652540850?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-8 py-4"
          >
            Book Consultation
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 flex flex-wrap gap-8 md:gap-12"
        >
          {[
            { value: '120+', label: 'Projects Completed' },
            { value: '8+', label: 'Years of Expertise' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl md:text-4xl text-brand-gold font-semibold">{stat.value}</p>
              <p className="font-body text-xs text-brand-cream/50 uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 right-6 z-20 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-brand-gold/60" />
        <p className="font-body text-[10px] text-brand-cream/40 uppercase tracking-widest rotate-90 origin-center translate-x-4">
          Scroll
        </p>
      </motion.div>
    </section>
  )
}
