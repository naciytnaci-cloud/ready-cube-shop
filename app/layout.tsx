import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { CartProvider } from '@/contexts/CartContext'
import ClientPageTransition from '@/components/ClientPageTransition'

export const metadata: Metadata = {
  title: {
    default: 'Ready Cube - Speedcubers for Speedcubers',
    template: '%s | Ready Cube',
  },
  description: 'Ready Cube is a platform designed by speedcubers, for speedcubers. Built for the speedcubing community with competition-ready tools and resources.',
  keywords: ['speedcubing', 'rubik cube', 'ready cube', 'speedcubers', 'speedcube', 'rubiks cube', 'cubing', 'WCA'],
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
    locale: 'en_US',
    url: 'https://readycube.com',
    siteName: 'Ready Cube',
    title: 'Ready Cube - Speedcubers for Speedcubers',
    description: 'Ready Cube is a platform designed by speedcubers, for speedcubers. Built for the speedcubing community with competition-ready tools and resources.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ready Cube - Speedcubers for Speedcubers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ready Cube - Speedcubers for Speedcubers',
    description: 'Ready Cube is a platform designed by speedcubers, for speedcubers. Built for the speedcubing community.',
    images: ['/og-image.png'],
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
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 scroll-smooth">
        <LanguageProvider>
          <CartProvider>
            <main className="min-h-screen">
              <ClientPageTransition>
                {children}
              </ClientPageTransition>
            </main>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
