import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mağaza',
  description: 'Ready Cube ürünleri: üst seviye taşıma çözümleri ve WCA küpleri.',
  openGraph: {
    title: 'Mağaza | Ready Cube',
    description: 'Ready Cube ürünleri: üst seviye taşıma çözümleri ve WCA küpleri.',
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

