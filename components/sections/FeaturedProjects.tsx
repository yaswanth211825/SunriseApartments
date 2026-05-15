'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const project = projects[activeProject]

  return (
    <section
      id="projects"
      className="section-padding bg-brand-black"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="label-text mb-3">Portfolio</p>
              <h2 id="projects-heading" className="heading-lg text-brand-cream">
                Featured <span className="text-brand-gold">Projects</span>
              </h2>
            </div>
            <p className="body-lg max-w-md text-sm md:text-base">
              Each project is documented with material specifications, engineering decisions, and the reasoning
              behind every design choice.
            </p>
          </div>
        </AnimatedSection>

        {/* Project tabs */}
        <AnimatedSection delay={0.1} className="flex gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className={`flex-shrink-0 font-body text-sm px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeProject === i
                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                  : 'border-brand-border text-brand-cream/50 hover:border-brand-cream/30 hover:text-brand-cream/80'
              }`}
              aria-pressed={activeProject === i}
            >
              {p.title}
            </button>
          ))}
        </AnimatedSection>

        {/* Active project feature */}
        <AnimatedSection delay={0.15}>
          <motion.article
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-brand-border/40"
            aria-label={`Project: ${project.title}`}
          >
            {/* Hero image */}
            <div className="relative h-72 md:h-96 lg:h-full min-h-[400px]">
              <Image
                src={project.heroImage}
                alt={`${project.title} — ${project.category}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-dark/20" />
              <div className="absolute top-4 left-4">
                <span className="label-text bg-brand-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-brand-border/40">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="bg-brand-dark p-7 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex gap-4 mb-6 text-xs text-brand-cream/40 font-body uppercase tracking-wider">
                  <span>{project.location}</span>
                  <span>·</span>
                  <span>{project.area}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="heading-md text-brand-cream mb-3">{project.title}</h3>
                <p className="font-body text-brand-gold text-sm italic mb-5">{project.tagline}</p>
                <p className="body-lg text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-3 py-1 rounded-full border border-brand-border text-brand-cream/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery thumbnails */}
              <div className="mt-8">
                <p className="label-text mb-3">Gallery</p>
                <div
                  ref={scrollRef}
                  className="flex gap-3 overflow-x-auto hide-scrollbar pb-1"
                >
                  {project.galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-brand-border/40 hover:border-brand-gold/40 transition-colors"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} interior view ${i + 1}`}
                        fill
                        sizes="96px"
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatedSection>

        {/* All projects mini-grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <AnimatedSection key={p.id} delay={0.1 + i * 0.08}>
              <button
                onClick={() => setActiveProject(i)}
                className={`w-full group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                  activeProject === i ? 'border-brand-gold/50' : 'border-brand-border/40 hover:border-brand-border'
                }`}
                aria-label={`View ${p.title}`}
              >
                <div className="relative h-52">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="label-text mb-1">{p.category}</p>
                  <h3 className="font-heading text-lg text-brand-cream font-semibold">{p.title}</h3>
                  <p className="font-body text-xs text-brand-cream/40 mt-0.5">{p.location}</p>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
