import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ready Cube Bag',
  description: 'Speedcubing ekipmanları için premium taşıma çantası. Yakında satışta.',
  openGraph: {
    title: 'Ready Cube Bag | Ready Cube',
    description: 'Speedcubing ekipmanları için premium taşıma çantası.',
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

