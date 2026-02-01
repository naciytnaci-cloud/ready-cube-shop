import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WCA Küpleri | Mağaza',
  description: 'WCA küpleri ilk ürün lansmanımızdan sonra satışa sunulacak. Yakında.',
  openGraph: {
    title: 'WCA Küpleri | Ready Cube Mağaza',
    description: 'WCA küpleri ilk ürün lansmanımızdan sonra satışa sunulacak. Yakında.',
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

