'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { educationCards } from '@/lib/data/education'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'

export default function EducationalAuthority() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section
      id="knowledge"
      className="section-padding bg-brand-dark"
      aria-labelledby="knowledge-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16 text-center md:text-left">
          <p className="label-text mb-3">Knowledge Hub</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 id="knowledge-heading" className="heading-lg text-brand-cream max-w-xl">
              What Good Construction{' '}
              <span className="text-brand-gold">Actually Requires</span>
            </h2>
            <p className="body-lg text-sm md:text-base max-w-sm">
              We document the engineering principles behind every decision so you can hold any contractor accountable.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {educationCards.map((card) => (
            <motion.article
              key={card.id}
              variants={staggerItem}
              className="glass-card p-6 md:p-7 cursor-pointer group hover:border-brand-gold/30 transition-all duration-300"
              onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
              role="button"
              aria-expanded={activeCard === card.id}
              aria-label={`Learn about ${card.title}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="label-text">{card.category}</span>
                  <h3 className="font-heading text-xl text-brand-cream font-semibold mt-1 leading-snug">
                    {card.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-12 h-12 rounded-xl border border-brand-border flex items-center justify-center text-2xl bg-brand-surface group-hover:border-brand-gold/40 transition-colors">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Stat badge */}
              <div className="flex items-center gap-3 mb-5">
                <div className="border-l-2 border-brand-gold pl-3">
                  <p className="font-heading text-2xl text-brand-gold font-semibold">{card.stat.value}</p>
                  <p className="font-body text-xs text-brand-cream/40 uppercase tracking-wider">{card.stat.label}</p>
                </div>
              </div>

              {/* Insight */}
              <p className="font-body text-sm text-brand-cream/70 leading-relaxed">
                {card.insight}
              </p>

              {/* Expandable detail */}
              <AnimatePresence>
                {activeCard === card.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-5 mt-5 border-t border-brand-border">
                      <p className="font-body text-sm text-brand-gold/80 leading-relaxed">
                        💡 {card.detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expand toggle */}
              <div className="mt-4 flex items-center gap-2 text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                <span className="font-body text-xs uppercase tracking-wider">
                  {activeCard === card.id ? 'Less' : 'Learn more'}
                </span>
                <motion.span
                  animate={{ rotate: activeCard === card.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm"
                  aria-hidden="true"
                >
                  ↓
                </motion.span>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.2} className="mt-14 text-center">
          <div className="glass-card p-8 md:p-10 max-w-2xl mx-auto">
            <p className="label-text mb-3">Expert Consultation</p>
            <h3 className="heading-md text-brand-cream mb-4">
              Have specific questions about your project?
            </h3>
            <p className="body-lg text-sm mb-6">
              Our team can walk through soil conditions, structural requirements, and material specifications
              for your exact site — at no initial cost.
            </p>
            <a
              href="https://wa.me/919652540850?text=Hi%2C%20I%20have%20questions%20about%20my%20construction%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Ask Our Engineers
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
