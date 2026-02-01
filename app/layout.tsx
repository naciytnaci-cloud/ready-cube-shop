import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { CartProvider } from '@/contexts/CartContext'
import ClientPageTransition from '@/components/ClientPageTransition'

export const metadata: Metadata = {
  title: {
    default: 'Ready Cube - Hızlı küpçüler için hızlı küpçülerden',
    template: '%s | Ready Cube',
  },
  description: "Ready Cube, hızlı küpçüler tarafından hızlı küpçüler için tasarlanmış bir platformdur. WCA topluluğu için yarışmaya hazır ekipmanlar ve kaynaklarla geliştirildi.",
  keywords: ['hızlı küp', 'rubik küp', 'ready cube', 'hızlı küpçü', 'küp çözme', 'wca', 'küp', 'rubik'],
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
    title: 'Ready Cube - Hızlı küpçüler için hızlı küpçülerden',
    description: "Ready Cube, hızlı küpçüler tarafından hızlı küpçüler için tasarlanmış bir platformdur. WCA topluluğu için yarışmaya hazır ekipmanlar ve kaynaklarla geliştirildi.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ready Cube - Hızlı küpçüler için hızlı küpçülerden',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ready Cube - Hızlı küpçüler için hızlı küpçülerden',
    description: 'Ready Cube, hızlı küpçüler tarafından hızlı küpçüler için tasarlanmış bir platformdur.',
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
    <html lang="tr" className="scroll-smooth">
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
