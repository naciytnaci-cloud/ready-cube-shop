import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Çantalar',
  description: 'Speedcubing için tasarlanmış premium taşıma çözümleri. Ready Cube çantaları ile tüm WCA küplerinizi güvenle taşıyın.',
  openGraph: {
    title: 'Çantalar | Ready Cube',
    description: 'Speedcubing için tasarlanmış premium taşıma çözümleri.',
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

