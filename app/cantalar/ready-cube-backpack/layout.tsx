import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ready Cube Çanta',
  description: 'Hızlı küp ekipmanları için üst seviye taşıma çantası. Yakında satışta.',
  openGraph: {
    title: 'Ready Cube Çanta | Ready Cube',
    description: 'Hızlı küp ekipmanları için üst seviye taşıma çantası.',
    type: 'website',
  },
}

export default function ReadyCubeBackpackDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

