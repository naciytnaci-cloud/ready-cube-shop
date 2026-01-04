import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Review your items and proceed to checkout. Premium speedcubing products at Ready Cube.',
  openGraph: {
    title: 'Shopping Cart | Ready Cube',
    description: 'Review your items and proceed to checkout.',
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

