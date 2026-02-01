import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ready Cube Pro Taşıma Çantası (V2) | Çantalar',
  description: 'Hızlı küpçüler için üretildi. Yarışma için tasarlandı. Tüm WCA küpleri ve aksesuarlarına uyumlu üst seviye taşıma çantası.',
  openGraph: {
    title: 'Ready Cube Pro Taşıma Çantası (V2) | Ready Cube',
    description: 'Hızlı küpçüler için üretildi. Yarışma için tasarlandı. Tüm WCA küpleri ve aksesuarlarına uyumlu üst seviye taşıma çantası.',
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

