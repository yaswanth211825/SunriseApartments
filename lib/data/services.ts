export interface Service {
  id: string
  icon: string
  title: string
  shortDescription: string
  details: string[]
  accent: string
}

export const services: Service[] = [
  {
    id: 'turnkey-construction',
    icon: '⬡',
    title: 'Turnkey Construction',
    shortDescription:
      'From foundation to finishing — a single accountable team manages every phase, removing coordination overhead for you.',
    details: [
      'Structural planning with soil report analysis',
      'Material procurement with quality verification',
      'Site supervision with progress documentation',
      'Electrical, plumbing & civil in one scope',
    ],
    accent: '#C6A87D',
  },
  {
    id: 'interior-design',
    icon: '◈',
    title: 'Interior Design',
    shortDescription:
      'Spaces are planned for how people actually live — lighting, airflow, and ergonomics before aesthetics.',
    details: [
      '3D visualization before execution',
      'Lighting layout mapped to ceiling plan',
      'Material board with tactile samples',
      'Furniture procurement with installation',
    ],
    accent: '#C6A87D',
  },
  {
    id: 'renovation',
    icon: '◉',
    title: 'Renovation & Remodelling',
    shortDescription:
      'Structural integrity is assessed before any surface work begins — retrofitting done without compromising load paths.',
    details: [
      'Load-bearing wall assessment',
      'Waterproofing audit & correction',
      'Electrical re-wiring with load calculation',
      'Phased execution to minimise disruption',
    ],
    accent: '#C6A87D',
  },
  {
    id: 'architecture',
    icon: '⬜',
    title: 'Architecture & Planning',
    shortDescription:
      'Building plans are optimised for ventilation cross-flow, natural light penetration, and future-proofed layouts.',
    details: [
      'Vastu-conscious spatial planning',
      'Municipal approval documentation',
      'Structural engineer collaboration',
      'Energy-efficient orientation planning',
    ],
    accent: '#C6A87D',
  },
  {
    id: 'modular-interiors',
    icon: '▣',
    title: 'Modular Interiors',
    shortDescription:
      'Factory-calibrated units ensure tolerances below 1mm — site-built carpentry cannot achieve this consistency.',
    details: [
      'BWP-grade plywood for wet areas',
      'Soft-close hardware as standard',
      'HDHMR board for high-humidity zones',
      '10-year structural warranty on units',
    ],
    accent: '#C6A87D',
  },
  {
    id: 'commercial-spaces',
    icon: '▦',
    title: 'Commercial Spaces',
    shortDescription:
      'Commercial fitouts require fire-rated materials, accessibility compliance, and high-traffic durability planning.',
    details: [
      'Fire NOC documentation support',
      'ADA-compliant spatial planning',
      'High-traffic flooring specification',
      'MEP coordination for tenants',
    ],
    accent: '#C6A87D',
  },
]
