import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sepet',
  description: 'Ürünlerinizi gözden geçirin ve ödemeye devam edin.',
  openGraph: {
    title: 'Sepet | Ready Cube',
    description: 'Ürünlerinizi gözden geçirin ve ödemeye devam edin.',
    type: 'website',
  },
}

export default function CartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

