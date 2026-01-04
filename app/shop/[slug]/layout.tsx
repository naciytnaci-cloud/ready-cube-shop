import type { Metadata } from 'next'

const products: Record<string, {
  name: string
  description: string
}> = {
  '2x2': {
    name: '2x2 Rubik Küp',
    description: 'Professional 2x2 speedcube optimized for fast and smooth turning. Competition-level performance.',
  },
  '3x3': {
    name: '3x3 Rubik Küp',
    description: 'World record quality 3x3 speedcube. The preferred choice of top speedcubers worldwide.',
  },
  '4x4': {
    name: '4x4 Rubik Küp',
    description: 'Competition-grade 4x4 speedcube with excellent stability and speed.',
  },
  '5x5': {
    name: '5x5 Rubik Küp',
    description: 'Professional 5x5 speedcube with advanced internal mechanism.',
  },
  '6x6': {
    name: '6x6 Rubik Küp',
    description: 'High-quality 6x6 speedcube for professional use.',
  },
  '7x7': {
    name: '7x7 Rubik Küp',
    description: 'The largest standard speedcube with perfect engineering.',
  },
  'megaminx': {
    name: 'Megaminx',
    description: '12-sided professional Megaminx speedcube. Smooth turning and excellent control.',
  },
  'pyraminx': {
    name: 'Pyraminx',
    description: 'Fast and precise Pyraminx speedcube. Easy turning and excellent control.',
  },
  'skewb': {
    name: 'Skewb',
    description: 'Compact and fast Skewb speedcube. Smooth turning and professional quality.',
  },
  'square-1': {
    name: 'Square-1',
    description: 'Professional Square-1 speedcube with special mechanism. High quality and durability.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = products[params.slug]

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for could not be found.',
    }
  }

  return {
    title: `${product.name} | Ready Cube Shop`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Ready Cube Shop`,
      description: product.description,
      type: 'website',
    },
  }
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

