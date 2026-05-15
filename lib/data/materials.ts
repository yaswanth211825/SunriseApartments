export interface MaterialCard {
  id: string
  category: string
  title: string
  recommendation: string
  grades: { name: string; use: string; durability: string }[]
  maintenance: string
  smartTip: string
}

export const materials: MaterialCard[] = [
  {
    id: 'plywood',
    category: 'Carpentry',
    title: 'Plywood Grade Guide',
    recommendation: 'BWP (Boiling Waterproof) for all wet areas, BWR for dry interior zones.',
    grades: [
      { name: 'MR Grade', use: 'Dry interior furniture', durability: '5–8 years' },
      { name: 'BWR Grade', use: 'Kitchens, wardrobes', durability: '10–15 years' },
      { name: 'BWP Grade', use: 'Bathrooms, wet areas', durability: '20+ years' },
    ],
    maintenance: 'Seal edges with PU edge tape — exposed core causes delamination in humidity.',
    smartTip:
      'ISI mark + cross-section inspection (7 or 9 ply for 18mm) confirms genuine grade before purchase.',
  },
  {
    id: 'tiles',
    category: 'Flooring',
    title: 'Tile Selection Matrix',
    recommendation: 'Double-charged vitrified for living areas; porcelain for bathrooms.',
    grades: [
      { name: 'Ceramic', use: 'Walls, low-traffic areas', durability: '10 years' },
      { name: 'Vitrified', use: 'Living, bedroom floors', durability: '20+ years' },
      { name: 'Porcelain', use: 'Bathrooms, outdoor', durability: '25+ years' },
    ],
    maintenance: 'Epoxy grout in wet areas prevents staining and bacterial growth.',
    smartTip: 'Order 10% extra tiles to account for breakage and future repairs with matching batch.',
  },
  {
    id: 'paints',
    category: 'Finishes',
    title: 'Paint System Selection',
    recommendation: 'Acrylic emulsion for interiors; elastomeric exterior for AP climate.',
    grades: [
      { name: 'Distemper', use: 'Budget interior walls', durability: '2–3 years' },
      { name: 'Acrylic Emulsion', use: 'Interior rooms', durability: '5–7 years' },
      { name: 'Elastomeric', use: 'Exterior, terrace parapet', durability: '8–10 years' },
    ],
    maintenance: '2 coats primer + 2 finish coats is minimum — single-coat coverage is a false saving.',
    smartTip:
      'Low-VOC paints reduce formaldehyde emission — critical for bedrooms and children\'s spaces.',
  },
  {
    id: 'waterproofing',
    category: 'Protection',
    title: 'Waterproofing Systems',
    recommendation: 'APP membrane for terraces; crystalline compound for underground walls.',
    grades: [
      { name: 'Chemical Coating', use: 'Bathroom floors', durability: '3–5 years' },
      { name: 'APP Membrane', use: 'Terrace, sunken slabs', durability: '15+ years' },
      { name: 'Crystalline', use: 'Foundation, basement walls', durability: 'Permanent' },
    ],
    maintenance: 'Annual inspection of drain mouths and membrane edges prevents 90% of failures.',
    smartTip: 'Waterproofing without slope correction is temporary — drainage design is non-negotiable.',
  },
]
