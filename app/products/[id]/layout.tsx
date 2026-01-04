import type { Metadata } from 'next'

const products: Record<string, {
  name: string
  description: string
}> = {
  '2x2': {
    name: '2x2 Rubik Küp',
    description: 'Hızlı ve akıcı dönüş için optimize edilmiş profesyonel 2x2 speedcube. Yarışma seviyesinde performans için tasarlandı.',
  },
  '3x3': {
    name: '3x3 Rubik Küp',
    description: 'Dünya rekorları için kullanılan profesyonel 3x3 speedcube. En iyi speedcuberlar tarafından tercih edilen model.',
  },
  '4x4': {
    name: '4x4 Rubik Küp',
    description: 'Yarışma seviyesinde 4x4 speedcube, mükemmel stabilite ve hız. Profesyonel kullanım için optimize edilmiştir.',
  },
  '5x5': {
    name: '5x5 Rubik Küp',
    description: 'Profesyonel 5x5 speedcube, gelişmiş iç mekanizma ile. Büyük küpler için mükemmel stabilite.',
  },
  '6x6': {
    name: '6x6 Rubik Küp',
    description: 'Yüksek kaliteli 6x6 speedcube, profesyonel kullanım için. Mükemmel mühendislik ve kalite.',
  },
  '7x7': {
    name: '7x7 Rubik Küp',
    description: 'En büyük standart speedcube, mükemmel mühendislik. Profesyonel yarışmalar için ideal.',
  },
  'megaminx': {
    name: 'Megaminx',
    description: '12 yüzlü profesyonel Megaminx speedcube. Akıcı dönüş ve mükemmel kontrol.',
  },
  'pyraminx': {
    name: 'Pyraminx',
    description: 'Hızlı ve hassas Pyraminx speedcube. Kolay dönüş ve mükemmel kontrol.',
  },
  'skewb': {
    name: 'Skewb',
    description: 'Kompakt ve hızlı Skewb speedcube. Smooth dönüş ve profesyonel kalite.',
  },
  'square-1': {
    name: 'Square-1',
    description: 'Profesyonel Square-1 speedcube, özel mekanizma. Yüksek kalite ve dayanıklılık.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const product = products[params.id]

  if (!product) {
    return {
      title: 'Ürün Bulunamadı',
      description: 'Aradığınız ürün bulunamadı.',
    }
  }

  return {
    title: product.name,
    description: `${product.description} WCA uyumlu, profesyonel speedcubing için tasarlandı. Ready Cube'dan satın alın.`,
    openGraph: {
      title: `${product.name} | Ready Cube`,
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

