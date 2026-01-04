import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bags | Shop',
  description: 'Designed for competitive speedcubers. Premium carry bags for all WCA puzzles and accessories.',
  openGraph: {
    title: 'Bags | Ready Cube Shop',
    description: 'Designed for competitive speedcubers. Premium carry bags for all WCA puzzles and accessories.',
    type: 'website',
  },
}

export default function BagsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

