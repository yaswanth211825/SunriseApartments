'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/lib/data/services'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      id="services"
      className="section-padding bg-brand-black"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="label-text mb-3">What We Build</p>
              <h2 id="services-heading" className="heading-lg text-brand-cream">
                Every Service,{' '}
                <span className="text-brand-gold">Engineered Right</span>
              </h2>
            </div>
            <a
              href="https://wa.me/919652540850?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline self-start"
            >
              Discuss Your Project
            </a>
          </div>
        </AnimatedSection>

        {/* Services grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              className="glass-card p-7 md:p-8 group cursor-default overflow-hidden relative"
              aria-label={service.title}
            >
              {/* Glow effect on hover */}
              <AnimatePresence>
                {hovered === service.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <div className="text-3xl mb-6 text-brand-gold/70 group-hover:text-brand-gold transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl text-brand-cream font-semibold mb-3 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-brand-gold/40 mb-5 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className="font-body text-sm text-brand-cream/65 leading-relaxed mb-6">
                {service.shortDescription}
              </p>

              {/* Detail list */}
              <ul className="flex flex-col gap-2.5" role="list">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <span className="text-brand-gold mt-0.5 text-sm flex-shrink-0" aria-hidden="true">◆</span>
                    <span className="font-body text-xs text-brand-cream/55 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* CTA link */}
              <a
                href={`https://wa.me/919652540850?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center gap-2 text-brand-gold/60 hover:text-brand-gold text-xs font-body uppercase tracking-wider transition-colors group/link"
                aria-label={`Enquire about ${service.title}`}
              >
                Enquire
                <motion.span
                  animate={{ x: hovered === service.id ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </a>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
