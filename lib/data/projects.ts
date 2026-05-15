export interface Project {
  id: string
  title: string
  category: string
  location: string
  area: string
  year: string
  tagline: string
  description: string
  heroImage: string
  galleryImages: string[]
  tags: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'cumbum-house',
    title: 'Cumbum Residence',
    category: 'Full Home Interiors',
    location: 'Cumbum, Andhra Pradesh',
    area: '2,400 sq ft',
    year: '2024',
    tagline: 'Where traditional craftsmanship meets modern precision.',
    description:
      'Natural light mapping was done before ceiling execution — every room receives balanced daylight without glare. Heat-resistant materials were selected for the kitchen zones given Cumbum\'s summer peaks.',
    heroImage: '/images/projects/cumbum-house/modern-house-elevation-yellow-stone.webp',
    galleryImages: [
      '/images/projects/cumbum-house/living-room-with-wooden-swing-jhula.webp',
      '/images/projects/cumbum-house/modular-kitchen-with-island-design.webp',
      '/images/projects/cumbum-house/modern-bedroom-wardrobe-sliding-door.webp',
      '/images/projects/cumbum-house/marble-bathroom-interior-with-bathtub.webp',
      '/images/projects/cumbum-house/modern-tv-unit-green-fluted-panel-sunrise-interiors.webp',
      '/images/projects/cumbum-house/rooftop-lounge-wooden-false-ceiling-design.webp',
    ],
    tags: ['Interiors', 'Modular Kitchen', 'False Ceiling', 'Luxury'],
    featured: true,
  },
  {
    id: 'giddalur-house',
    title: 'Giddalur Modern Home',
    category: 'Construction + Interiors',
    location: 'Giddalur, Andhra Pradesh',
    area: '3,100 sq ft',
    year: '2024',
    tagline: 'Engineered for two generations of comfortable living.',
    description:
      'Dual-floor structural planning with independent electrical circuits per zone. Waterproofing executed with APP membrane system at terrace — zero seepage risk across monsoon seasons.',
    heroImage: '/images/projects/giddalur-house/modern-house-exterior-elevation-giddalur.webp',
    galleryImages: [
      '/images/projects/giddalur-house/full-home-interior-giddalur-living-room-ground-floor.webp',
      '/images/projects/giddalur-house/modular-kitchen-interior-giddalur-ground-floor.webp',
      '/images/projects/giddalur-house/master-bedroom-interior-ground-floor.webp',
      '/images/projects/giddalur-house/bathroom-interior-design-giddalur.webp',
      '/images/projects/giddalur-house/dining-room-interior-design-giddalur.webp',
      '/images/projects/giddalur-house/entry-foyer-interior-design-giddalur.webp',
    ],
    tags: ['Construction', 'Turnkey', 'Waterproofing', 'Full Home'],
    featured: true,
  },
  {
    id: 'ongole-house',
    title: 'Ongole Premium Renovation',
    category: 'Renovation + Modular Interiors',
    location: 'Ongole, Andhra Pradesh',
    area: '1,800 sq ft',
    year: '2023',
    tagline: 'A complete transformation — structure to surface.',
    description:
      'Existing load-bearing walls were retained while all surface systems were rebuilt. Magnetic track lighting replaced conventional wiring to enable flexible reconfigurations without ceiling damage.',
    heroImage: '/images/projects/ongole-house/2-bhk-home-renovation-cnc-jali-exterior-design.webp',
    galleryImages: [
      '/images/projects/ongole-house/wooden-slat-partition-living-room-interior.webp',
      '/images/projects/ongole-house/modern-parallel-modular-kitchen-mint-green.webp',
      '/images/projects/ongole-house/luxury-blue-sliding-wardrobe-with-gold-accents.webp',
      '/images/projects/ongole-house/magnetic-recessed-track-lighting-ceiling-fan.webp',
      '/images/projects/ongole-house/vox-infratop-wooden-finish-ceiling-design.webp',
      '/images/projects/ongole-house/high-gloss-blue-modular-storage-cabinets.webp',
    ],
    tags: ['Renovation', 'Modular', 'Track Lighting', 'Modern'],
    featured: true,
  },
]
