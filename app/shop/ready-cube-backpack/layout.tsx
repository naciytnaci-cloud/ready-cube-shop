import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ready Cube Premium Speedcubing Backpack',
  description: 'Speedcubing için özel tasarlanmış premium çanta. 2x2\'den 7x7\'ye tüm WCA küplerine uyum, özel süngerli iç düzen, laptop ve şarj alanı.',
  openGraph: {
    title: 'Ready Cube Premium Speedcubing Backpack | Ready Cube',
    description: 'Speedcubing için özel tasarlanmış premium çanta.',
    type: 'website',
  },
}

export default function ReadyCubeBackpackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

