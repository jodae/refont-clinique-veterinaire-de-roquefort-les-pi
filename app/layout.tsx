import type { Metadata } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clinique Vétérinaire du Clos | Roquefort-les-Pins 06330',
  description: 'Vétérinaire à Roquefort-les-Pins : médecine, chirurgie, imagerie pour chiens, chats, NAC. 5 vétérinaires, équipement moderne. RDV au 04 93 77 53 50.',
  openGraph: {
    title: 'Clinique Vétérinaire du Clos - Roquefort-les-Pins',
    description: 'Soins vétérinaires complets à Roquefort-les-Pins : consultations, chirurgie, imagerie, dentisterie. Équipe expérimentée et clinique moderne.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Clinique Vétérinaire du Clos',
  },
  keywords: [
    'vétérinaire Roquefort-les-Pins',
    'clinique vétérinaire 06330',
    'vétérinaire chien chat',
    'chirurgie vétérinaire',
    'imagerie vétérinaire',
    'NAC vétérinaire',
    'dentisterie vétérinaire',
    'urgences vétérinaires',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Clinique Vétérinaire du Clos' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${nunito.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}