import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Çantalar | Mağaza',
  description: 'Yarışmacı hızlı küpçüler için tasarlandı. Tüm WCA küpleri ve aksesuarlar için üst seviye taşıma çantaları.',
  openGraph: {
    title: 'Çantalar | Ready Cube Mağaza',
    description: 'Yarışmacı hızlı küpçüler için tasarlandı. Tüm WCA küpleri ve aksesuarlar için üst seviye taşıma çantaları.',
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

