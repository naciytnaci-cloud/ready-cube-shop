import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Premium speedcubing gear by Ready Cube. Professional carry solutions and WCA puzzles.',
  openGraph: {
    title: 'Shop | Ready Cube',
    description: 'Premium speedcubing gear by Ready Cube. Professional carry solutions and WCA puzzles.',
    type: 'website',
  },
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

