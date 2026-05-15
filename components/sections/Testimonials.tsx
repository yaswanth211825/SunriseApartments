'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    id: 1,
    quote:
      'They explained exactly why the ceiling had to go in before the tiles — we understood every decision. That transparency built more trust than any portfolio could.',
    name: 'Ravi Kumar',
    project: 'Giddalur Home Construction',
    location: 'Giddalur, AP',
  },
  {
    id: 2,
    quote:
      'The kitchen was planned around how we actually cook — not just how it looks in photos. Three years later, zero leaks, zero regrets.',
    name: 'Priya Reddy',
    project: 'Cumbum Full Interior',
    location: 'Cumbum, AP',
  },
  {
    id: 3,
    quote:
      'Other contractors gave us numbers. Sunrise gave us a breakdown of why — what material, what grade, what it lasts. We knew what we were paying for.',
    name: 'Suresh Naidu',
    project: 'Ongole Renovation',
    location: 'Ongole, AP',
  },
  {
    id: 4,
    quote:
      'The ventilation planning alone made the house 4–5 degrees cooler. We run the AC two hours less per day every summer.',
    name: 'Lakshmi Devi',
    project: 'Nellore New Build',
    location: 'Nellore, AP',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section
      className="section-padding bg-brand-black"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-12 md:mb-16 text-center">
          <p className="label-text mb-3">Client Words</p>
          <h2 id="testimonials-heading" className="heading-lg text-brand-cream">
            What Families{' '}
            <span className="text-brand-gold">Remember Most</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto">
          {/* Main testimonial */}
          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="glass-card p-8 md:p-12"
                aria-label={`Testimonial from ${testimonials[active].name}`}
              >
                {/* Quote mark */}
                <div
                  className="font-heading text-6xl text-brand-gold/20 leading-none mb-4 select-none"
                  aria-hidden="true"
                >
                  "
                </div>
                <p className="font-heading text-xl md:text-2xl text-brand-cream font-medium leading-relaxed mb-8">
                  {testimonials[active].quote}
                </p>
                <footer>
                  <p className="font-body text-sm text-brand-cream font-semibold">
                    {testimonials[active].name}
                  </p>
                  <p className="font-body text-xs text-brand-gold/70 mt-0.5">
                    {testimonials[active].project}
                  </p>
                  <p className="font-body text-xs text-brand-cream/40 mt-0.5">
                    {testimonials[active].location}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div
            className="flex justify-center gap-3 mt-7"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={active === i}
                aria-label={`View testimonial from ${t.name}`}
                className={`transition-all duration-300 rounded-full ${
                  active === i
                    ? 'w-8 h-2 bg-brand-gold'
                    : 'w-2 h-2 bg-brand-cream/20 hover:bg-brand-cream/40'
                }`}
              />
            ))}
          </div>

          {/* Name list */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`font-body text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${
                  active === i
                    ? 'border-brand-gold/50 text-brand-gold bg-brand-gold/10'
                    : 'border-brand-border text-brand-cream/40 hover:text-brand-cream/70'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
