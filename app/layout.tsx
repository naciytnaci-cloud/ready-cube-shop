import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/contexts/CartContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import ClientPageTransition from '@/components/ClientPageTransition'

export const metadata: Metadata = {
  title: {
    default: 'Ready Cube - Profesyonel Speedcubing Ekipmanları',
    template: '%s | Ready Cube',
  },
  description: 'Ready Cube, Türkiye merkezli profesyonel speedcubing ekipmanları markası. WCA uyumlu speedcube\'ler ve profesyonel çantalar. Yarışma seviyesinde performans için tasarlandı.',
  keywords: ['speedcube', 'rubik küp', 'speedcubing', 'WCA', 'yarışma küpü', 'Türkiye', 'ready cube'],
  authors: [{ name: 'Ready Cube' }],
  creator: 'Ready Cube',
  publisher: 'Ready Cube',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://readycube.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://readycube.com',
    siteName: 'Ready Cube',
    title: 'Ready Cube - Profesyonel Speedcubing Ekipmanları',
    description: 'Ready Cube, Türkiye merkezli profesyonel speedcubing ekipmanları markası. WCA uyumlu speedcube\'ler ve profesyonel çantalar.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ready Cube - Profesyonel Speedcubing Ekipmanları',
    description: 'Ready Cube, Türkiye merkezli profesyonel speedcubing ekipmanları markası.',
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
          return (
            <html lang="tr" className="scroll-smooth">
              <body className="bg-dark text-white scroll-smooth">
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen">
              <ClientPageTransition>
                {children}
              </ClientPageTransition>
            </main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

