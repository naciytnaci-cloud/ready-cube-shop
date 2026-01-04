import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WCA Cubes | Shop',
  description: 'WCA cubes will be available after our first product launch. Coming soon.',
  openGraph: {
    title: 'WCA Cubes | Ready Cube Shop',
    description: 'WCA cubes will be available after our first product launch. Coming soon.',
    type: 'website',
  },
}

export default function CubesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

