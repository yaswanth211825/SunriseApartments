# Sunrise Interiors — Markapur

Premium home interior design portfolio website for **Sunrise Interiors**, based in Markapur, Andhra Pradesh. Serves clients across AP & Telangana.

**Live site:** [sunriseinteriorsmarkapur.in](https://www.sunriseinteriorsmarkapur.in)  
**GitHub:** [yaswanth211825/SunriseApartments](https://github.com/yaswanth211825/SunriseApartments)  
**Hosting:** Vercel (static site, auto-deploy on push to `main`)

---

## Tech Stack

- Pure HTML / CSS / Vanilla JS — no framework, no build step
- Hosted on Vercel (`vercel.json` in root)
- Fonts: Playfair Display (serif), Jost (sans), DM Mono — loaded from Google Fonts
- No external JS libraries or dependencies

---

## Project Structure

```
SUNRISE_INTERIORS/
├── index.html          # Homepage
├── interiors.html      # Dedicated interiors showcase page
├── projects.html       # All projects with filter bar
├── services.html       # Detailed services + transparent pricing
├── contact.html        # Contact form, map, quick-contact chips
├── css/
│   └── style.css       # All styles — single file, ~1400 lines
├── js/
│   └── main.js         # All interactivity — single file, ~400 lines
├── images/
│   ├── logo.png
│   ├── home1/          # Project 1 stills (extracted from video)
│   ├── home2/          # Project 2 stills (extracted from video)
│   ├── home3-cumbum/   # Project 3 — Cumbum full home transformation
│   └── home4-giddalur/ # Project 4 — Giddalur home
├── sitemap.xml         # XML sitemap with image extensions for SEO
├── robots.txt          # Search engine crawl rules
└── vercel.json         # Vercel routing config
```

---

## Pages

### `index.html` — Homepage
- **Hero** — Full-bleed image (`home3-cumbum/living-room-1.jpg`), cinematic dark overlay, WhatsApp CTA
- **About strip** — 4 stat counters (projects, years, cities, satisfaction)
- **Room Journey** — Apple-style scroll storytelling: sticky image left + scrolling room descriptions right (desktop). Stacks vertically on mobile. 5 rooms: Living Room, Kitchen, Bedroom, Pooja Room, Bathroom
- **Horizontal Gallery** — Drag-to-scroll + arrow buttons, 8 real project cards with snap scroll
- **YouTube section** — Links to `@sunriseinteriors` channel with thumbnail
- **Services overview** — 6 service cards (emoji icons)
- **Mood Board Quiz** — 3-step interactive style quiz, result sent via WhatsApp
- **Testimonials** — 3 client reviews
- **Areas Served** — Districts grid across AP & Telangana
- **CTA Banner** — Final conversion section

### `interiors.html` — Interiors Page
- **Hero** — Carved teak main door with festive garland (`home3-cumbum/entry-1.jpg`)
- **Intro** — Brand philosophy quote section
- **The Sunrise Difference** — 6 unique value props including signature **Radha Krishna Water Fountain**, free home visits, transparent pricing
- **Room Showcase** — 5 tabs (Living Room / Kitchen / Bedroom / Pooja Room / Bathroom) each with photo gallery + description
- **Before/After Slider** — Drag handle comparison slider
- **Materials & Craft** — 4-photo grid of materials used

### `projects.html` — All Projects
- **Filter bar** — All / Living Room / Kitchen / Bedroom / Pooja Room / Entry & Exterior
- **Featured project** card — Home 3 Cumbum full transformation
- **17-card masonry grid** — All project photos with `data-type` attributes for JS filtering

### `services.html` — Services
- **6 detailed service cards** with photo, feature list, and CTA per service
- **Transparent Pricing Guide** — 3 tiers (Essential / Premium / Luxury) with price ranges

### `contact.html` — Contact
- **Quick-contact chips** — WhatsApp, Call, Email, YouTube
- **Contact form** — On submit, builds a WhatsApp message URL with all form fields pre-filled and opens WhatsApp
- **Hours & info cards** — Office hours, address, service area
- **Google Maps embed** — Markapur location
- **Mini testimonials** — 4 compact review cards

---

## Key JavaScript Features (`js/main.js`)

| Feature | How it works |
|---|---|
| Navbar scroll effect | Adds `.scrolled` class at 50px scroll, changes background |
| Hamburger menu | Toggles `.open` on `#mobileMenu`, `aria-expanded` for a11y |
| Fade-up animations | `IntersectionObserver` on `.fade-up` elements |
| Stat counter animation | Counts up to target number when scrolled into view |
| Room Journey (desktop) | `IntersectionObserver` on `.journey-step`, switches `.journey-img` active state. Only runs at `min-width: 1024px` |
| Gallery drag-to-scroll | `mousedown` / `mousemove` tracking on `#galleryTrack` |
| Gallery arrows | Scroll by one card width + 24px gap per click |
| Room tabs (interiors) | Toggles `.active` on `.room-tab` and `.room-panel` by `data-room` attribute |
| Before/After slider | Drag handle sets `after.style.width` as viewport percentage |
| Projects filter | Shows/hides `.proj-grid-card[data-type]` by filter button value |
| Mood board quiz | 3-step stepper, builds WhatsApp URL with answers |
| Contact form | On submit, builds `wa.me` URL with all form fields, opens in new tab |
| Custom cursor | Brass dot that follows mouse — **desktop only** (`hover: hover` + `min-width: 1025px`) |

---

## CSS Architecture (`css/style.css`)

Single file, organized in sections with comment headers. Uses CSS custom properties (variables) throughout.

### Design Tokens
```css
--color-obsidian: #1C1C1C   /* Primary dark */
--color-brass:    #C9A96E   /* Brand gold accent */
--color-cream:    #FDFC FA   /* Off-white backgrounds */
--color-linen:    #F5F0E8   /* Section backgrounds */
--color-stone:    #888880   /* Body text / muted */
--font-serif:     'Playfair Display'
--font-sans:      'Jost'
--font-mono:      'DM Mono'
--max-width:      1200px
```

### Breakpoints
| Name | Value | Used for |
|---|---|---|
| Small mobile | 500px | Button stacking |
| Mobile | 600px | Minor grid tweaks |
| Tablet | 768px | 2-column grids |
| Desktop | 1024px | Full layout, Room Journey sticky |
| Wide | 1200px | Max content width |

---

## Images

All images are **JPEG stills extracted from `.MOV` project videos** using `ffmpeg`:
```bash
ffmpeg -ss 2 -i VIDEO.MOV -frames:v 1 -q:v 2 output.jpg
```

### Image Inventory

**`home3-cumbum/`** — Full home transformation, Cumbum, AP
- `living-room-1.jpg` — Hero living room (chandelier, marigold garlands)
- `living-room-bright.jpg` — Alternate living room angle (bright)
- `living-room-3.jpg`, `living-room-wide.jpg` — More angles
- `kitchen-1.jpg`, `kitchen-2.jpg`, `kitchen-loft.jpg` — Modular kitchen
- `master-bedroom-1.jpg`, `bedroom-2.jpg`
- `entry-1.jpg` — **Hero for interiors page** (carved teak sunflower door with garland)
- `entry-2.jpg` — Entry exterior
- `pooja-IMG_8380.jpg` — Pooja room
- `water-fountain.jpg` — Signature Radha Krishna water fountain
- `bathroom-1.jpg`
- `outer-IMG_8596.jpg` — Exterior

**`home4-giddalur/`** — Home transformation, Giddalur, AP
- `living-room-1.jpg`, `living-room-floor2.jpg`
- `kitchen-1.jpg`, `kitchen-floor2.jpg`
- `bedroom-1.jpg`, `bedroom-2.jpg`
- `pooja-1.jpg`
- `dining-1.jpg`
- `outer-1.jpg`

**`home1/`**, **`home2/`** — Earlier projects (frames extracted, used in gallery/projects grid)

> **Note:** `living-room-2.jpg` in home3-cumbum is a **dark frame** (camera adjusting exposure at video start — 454KB vs 688KB for the bright version). Do not use it as a hero. Use `living-room-bright.jpg` instead.

---

## SEO Implementation

- **Schema.org structured data** on every page:
  - `index.html` — `InteriorDesigner` (LocalBusiness)
  - `interiors.html` — `Service` + `BreadcrumbList`
  - `projects.html` — `ItemList` of projects
  - `services.html` — `Service` schema per service
  - `contact.html` — `LocalBusiness` with address
- **`sitemap.xml`** — 5 URLs with `<image:image>` extensions for Google Image Search
- **`robots.txt`** — Allows all crawlers, points to sitemap
- **Canonical URLs** on every page
- **Open Graph + Twitter Card** meta tags
- **Geo meta tags** (`geo.region: IN-AP`, `geo.placename: Markapur`)
- **Descriptive alt text** on all images including location names

---

## Contact & Business Info

| | |
|---|---|
| **Phone / WhatsApp** | +91 70130 70030 |
| **Phone 2** | +91 96525 40850 |
| **Email** | madinarayana66@gmail.com |
| **Address** | SVKP College Road, Markapur, AP 523316 |
| **YouTube** | [@sunriseinteriors](https://youtube.com/@sunriseinteriors) |
| **Service area** | All of Andhra Pradesh & Telangana |

---

## Deployment

Hosted on Vercel. Auto-deploys on every push to `main`.

```bash
# To deploy manually
vercel --prod

# To run locally
python3 -m http.server 3000
# then open http://localhost:3000
```

---

## Known Notes for Next Developer

1. **No dark-mode support** — site is light/cream themed only
2. **No CMS** — all content is hardcoded in HTML. To add a project, duplicate a `.proj-grid-card` in `projects.html` and add a new `data-type` attribute
3. **Contact form doesn't send email** — it opens WhatsApp with a pre-filled message. This was intentional (client prefers WhatsApp)
4. **Before/After slider** on `interiors.html` uses `home3-cumbum/living-room-1.jpg` as both before and after (placeholder — replace with actual before photo when available)
5. **`home1/` and `home2/` images** are available in `images/` but not yet featured as dedicated project pages — they're used in the grid on `projects.html`
6. **Add `.claude/` to `.gitignore`** if using Claude Code for further development — run: `echo ".claude/" >> .gitignore`
