export interface EducationCard {
  id: string
  category: string
  title: string
  insight: string
  detail: string
  stat: { value: string; label: string }
  icon: string
}

export const educationCards: EducationCard[] = [
  {
    id: 'ventilation',
    category: 'Air & Comfort',
    title: 'Ventilation Planning',
    insight:
      'Cross-ventilation is designed into the floor plan — not added as an afterthought. Opposite-wall openings create a pressure differential that moves air naturally, eliminating the need for constant AC.',
    detail:
      'Homes with planned cross-ventilation reduce AC electricity consumption by 30–40% during shoulder seasons.',
    stat: { value: '40%', label: 'AC cost reduction' },
    icon: '🌬',
  },
  {
    id: 'waterproofing',
    category: 'Structural Integrity',
    title: 'Waterproofing Science',
    insight:
      'Waterproofing is a system, not a product. A terrace requires APP modified bitumen membrane + screed slope + drain mouth protection. Using only chemical coating without slope correction causes pooling and eventual failure.',
    detail:
      'Most seepage complaints trace to incorrect slope (should be 1:50 minimum) rather than membrane failure.',
    stat: { value: '1:50', label: 'Minimum terrace slope' },
    icon: '💧',
  },
  {
    id: 'lighting',
    category: 'Lighting Design',
    title: 'Lighting Psychology',
    insight:
      'Ceiling lights are planned alongside furniture layout before execution. A bedroom with a single central light creates harsh shadows. Task + ambient + accent layering takes the same wiring but transforms how a space feels.',
    detail: 'Colour temperature: 2700K for bedrooms (warm), 4000K for kitchens (neutral cool).',
    stat: { value: '3-layer', label: 'Lighting architecture' },
    icon: '💡',
  },
  {
    id: 'tiles',
    category: 'Material Selection',
    title: 'Tile Selection Logic',
    insight:
      'Tile size changes how large a room appears. Tiles ≥800mm with minimal grout lines make small rooms feel 20% larger. Rectified tiles (machine-cut edges) allow grout joints as thin as 1.5mm vs standard 3–5mm.',
    detail: 'Anti-skid coefficient ≥0.5 is mandatory for bathroom floors per safety standards.',
    stat: { value: '800mm+', label: 'Tiles for visual space' },
    icon: '◼',
  },
  {
    id: 'structural',
    category: 'Construction Science',
    title: 'Structural Planning',
    insight:
      'Column and beam sizing should be done by a structural engineer based on soil bearing capacity — not copied from a neighbour\'s plan. Soft soil (below 12 t/sqm) requires isolated or raft foundations.',
    detail:
      'Overloaded slabs are the most common cause of cracks appearing 5–10 years after construction.',
    stat: { value: '12 t/m²', label: 'Soil bearing minimum' },
    icon: '🏗',
  },
  {
    id: 'electrical',
    category: 'Electrical Foresight',
    title: 'Electrical Load Planning',
    insight:
      'Wiring is planned with 30% spare capacity for future appliances. Kitchen requires a dedicated 15A circuit for microwave, oven, and refrigerator. Running high-load appliances on shared circuits causes breaker trips and fire risk.',
    detail: 'MCB rating, earth leakage protection, and RCCB are non-negotiable in every modern home.',
    stat: { value: '30%', label: 'Spare capacity designed in' },
    icon: '⚡',
  },
]
