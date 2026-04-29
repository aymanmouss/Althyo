import React from 'react'
import './styles.css'
import { Poppins, DM_Sans } from 'next/font/google'
import Header from '@/Header/Component'
import Footer from '@/Footer/Footer'
import CookieConsent from '@/components/CookieConsent'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Althyo — Agence Web Immobilier & Développement Web',
    template: '%s | Althyo',
  },
  description:
    'Agence web spécialisée dans la création de sites performants pour l’immobilier et les entreprises, avec CRM, gestion d’annonces, hébergement et maintenance.',
  metadataBase: new URL('https://althyo.fr'),
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'Althyo',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Althyo',
  url: 'https://althyo.fr',
  email: 'contact@althyo.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '58 rue de Monceau',
    addressLocality: 'Paris',
    postalCode: '75008',
    addressCountry: 'FR',
  },
  description:
    'Agence web spécialisée dans la création de sites performants pour l’immobilier et les entreprises, avec CRM, gestion d’annonces, hébergement et maintenance.',
  priceRange: '€€',
  areaServed: 'France',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fr" className={`${poppins.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6a240315-062d-4b7b-835c-bbca3bb89036"
        ></script>
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent variant="default" />
      </body>
    </html>
  )
}
