import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const siteUrl = 'https://sunriseapartments.in'
const siteName = 'Sunrise Apartments & Interiors'
const siteDescription =
  'Premium construction and interior design firm in Andhra Pradesh. Expert turnkey construction, modular interiors, and architectural planning — engineered for longevity, designed for life.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Construction & Interior Design`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'construction company Andhra Pradesh',
    'interior design AP',
    'turnkey construction',
    'modular kitchen',
    'home renovation Ongole',
    'interior designers Giddalur',
    'luxury interiors',
    'Sunrise Apartments',
    'home construction',
    'architectural design',
  ],
  authors: [{ name: 'Sunrise Apartments & Interiors' }],
  creator: 'Sunrise Apartments & Interiors',
  publisher: 'Sunrise Apartments & Interiors',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    title: `${siteName} | Premium Construction & Interior Design`,
    description: siteDescription,
    images: [
      {
        url: '/images/home1/hero-frame.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunrise Apartments — Premium Construction & Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Premium Construction & Interior Design`,
    description: siteDescription,
    images: ['/images/home1/hero-frame.jpg'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F1115',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/home1/hero-frame.jpg`,
  priceRange: '₹₹₹',
  areaServed: {
    '@type': 'State',
    name: 'Andhra Pradesh',
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  sameAs: [],
  serviceType: [
    'Turnkey Construction',
    'Interior Design',
    'Home Renovation',
    'Architectural Planning',
    'Modular Interiors',
    'Commercial Spaces',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-brand-black text-brand-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
