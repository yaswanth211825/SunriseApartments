import Image from 'next/image'
import Link from 'next/link'

const quickLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Knowledge Hub', href: '#knowledge' },
  { label: 'Material Guide', href: '#materials' },
]

const services = [
  'Turnkey Construction',
  'Interior Design',
  'Renovation',
  'Architecture & Planning',
  'Modular Interiors',
  'Commercial Spaces',
]

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border/40" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="Sunrise Apartments Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-heading text-brand-cream text-sm font-semibold">Sunrise Apartments</p>
                <p className="font-body text-brand-gold text-xs tracking-widest uppercase">& Interiors</p>
              </div>
            </div>
            <p className="body-lg text-sm leading-relaxed mb-6">
              Construction and interior design built on engineering intelligence — not just aesthetics.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/919652540850"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-brand-gold hover:text-brand-gold-light transition-colors"
              >
                WhatsApp →
              </a>
              <a
                href="tel:+917013070030"
                className="font-body text-sm text-brand-cream/60 hover:text-brand-cream transition-colors"
              >
                +91 70130 70030
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="label-text mb-5">Navigate</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-brand-cream/60 hover:text-brand-cream transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-text mb-5">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-body text-sm text-brand-cream/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="label-text mb-5">Service Areas</h3>
            <ul className="flex flex-col gap-2">
              {[
                'Ongole, AP',
                'Giddalur, AP',
                'Cumbum, AP',
                'Nellore, AP',
                'Kurnool, AP',
                'Pan Andhra Pradesh',
              ].map((loc) => (
                <li key={loc} className="font-body text-sm text-brand-cream/60">
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-brand-cream/30">
            © {new Date().getFullYear()} Sunrise Apartments & Interiors. All rights reserved.
          </p>
          <p className="font-body text-xs text-brand-cream/30">
            Andhra Pradesh, India · Premium Construction & Interior Design
          </p>
        </div>
      </div>
    </footer>
  )
}
