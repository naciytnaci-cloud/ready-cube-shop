import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ready Cube Pro Carry Bag (V2) | Bags',
  description: 'Built for speedcubers. Designed for competition. Premium carry bag that fits all WCA puzzles and accessories.',
  openGraph: {
    title: 'Ready Cube Pro Carry Bag (V2) | Ready Cube',
    description: 'Built for speedcubers. Designed for competition. Premium carry bag that fits all WCA puzzles and accessories.',
    type: 'website',
  },
}

export default function ReadyCubeProBagLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

