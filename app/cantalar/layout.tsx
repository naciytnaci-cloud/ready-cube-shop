import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Çantalar',
  description: 'Hızlı küp için tasarlanmış üst seviye taşıma çözümleri. Ready Cube çantaları ile tüm WCA küplerinizi güvenle taşıyın.',
  openGraph: {
    title: 'Çantalar | Ready Cube',
    description: 'Hızlı küp için tasarlanmış üst seviye taşıma çözümleri.',
    type: 'website',
  },
}

export default function CantalarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

