'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { materials } from '@/lib/data/materials'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'

export default function MaterialIntelligence() {
  const [openId, setOpenId] = useState<string>(materials[0].id)

  return (
    <section
      id="materials"
      className="section-padding bg-brand-dark"
      aria-labelledby="materials-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <p className="label-text mb-3">Material Intelligence</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 id="materials-heading" className="heading-lg text-brand-cream max-w-lg">
              Know Your Materials{' '}
              <span className="text-brand-gold">Before You Build</span>
            </h2>
            <p className="body-lg text-sm md:text-base max-w-sm">
              Material selection is the most consequential decision in construction — and the least discussed.
              We change that.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Category tabs */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible hide-scrollbar pb-2 lg:pb-0">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setOpenId(mat.id)}
                  className={`flex-shrink-0 lg:flex-shrink text-left px-5 py-4 rounded-2xl border transition-all duration-300 ${
                    openId === mat.id
                      ? 'bg-brand-gold/10 border-brand-gold/40 text-brand-cream'
                      : 'bg-brand-surface/40 border-brand-border text-brand-cream/50 hover:border-brand-border hover:text-brand-cream/80'
                  }`}
                  aria-pressed={openId === mat.id}
                  aria-label={`View ${mat.title}`}
                >
                  <p className={`label-text mb-0.5 ${openId === mat.id ? 'text-brand-gold' : 'text-brand-cream/30'}`}>
                    {mat.category}
                  </p>
                  <p className="font-heading text-base font-semibold leading-snug">{mat.title}</p>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Detail panel */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {materials.map((mat) =>
                mat.id === openId ? (
                  <motion.div
                    key={mat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="glass-card p-7 md:p-9"
                  >
                    {/* Recommendation banner */}
                    <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-xl px-5 py-4 mb-7">
                      <p className="label-text mb-1">Our Recommendation</p>
                      <p className="font-body text-sm text-brand-cream/85 leading-relaxed">
                        {mat.recommendation}
                      </p>
                    </div>

                    {/* Grades table */}
                    <div className="mb-7">
                      <h3 className="label-text mb-4">Grade Comparison</h3>
                      <div className="flex flex-col gap-3">
                        {mat.grades.map((grade, i) => (
                          <div
                            key={grade.name}
                            className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                              i === mat.grades.length - 1
                                ? 'border-brand-gold/30 bg-brand-gold/5'
                                : 'border-brand-border/60 bg-brand-surface/30'
                            }`}
                          >
                            <div className="flex-1">
                              <p className="font-heading text-sm font-semibold text-brand-cream">{grade.name}</p>
                              <p className="font-body text-xs text-brand-cream/50 mt-0.5">{grade.use}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="font-body text-xs text-brand-gold/80 font-medium">{grade.durability}</p>
                              {i === mat.grades.length - 1 && (
                                <p className="font-body text-[10px] text-brand-gold/50 uppercase tracking-wider mt-0.5">Recommended</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Maintenance tip */}
                    <div className="border-l-2 border-brand-gold/40 pl-4 mb-6">
                      <p className="label-text mb-1.5">Maintenance</p>
                      <p className="font-body text-sm text-brand-cream/70 leading-relaxed">{mat.maintenance}</p>
                    </div>

                    {/* Smart tip */}
                    <div className="bg-brand-surface/60 rounded-xl p-5">
                      <p className="label-text mb-2">Field Tip</p>
                      <p className="font-body text-sm text-brand-cream/70 leading-relaxed">
                        🔍 {mat.smartTip}
                      </p>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
