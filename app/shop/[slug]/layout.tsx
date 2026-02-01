import type { Metadata } from 'next'

const products: Record<string, {
  name: string
  description: string
}> = {
  '2x2': {
    name: '2x2 Rubik Küp',
    description: 'Hızlı ve akıcı dönüş için optimize edilmiş profesyonel 2x2 küp. Yarışma seviyesinde performans.',
  },
  '3x3': {
    name: '3x3 Rubik Küp',
    description: 'Dünya rekoru seviyesinde 3x3 küp kalitesi. Dünyadaki üst seviye hızlı küpçülerin tercih ettiği seçenek.',
  },
  '4x4': {
    name: '4x4 Rubik Küp',
    description: 'Mükemmel denge ve hız sunan yarışma seviyesinde 4x4 küp.',
  },
  '5x5': {
    name: '5x5 Rubik Küp',
    description: 'Gelişmiş iç mekanizmaya sahip profesyonel 5x5 küp.',
  },
  '6x6': {
    name: '6x6 Rubik Küp',
    description: 'Profesyonel kullanım için yüksek kaliteli 6x6 küp.',
  },
  '7x7': {
    name: '7x7 Rubik Küp',
    description: 'Mükemmel mühendislik ile üretilmiş en büyük standart küp.',
  },
  'megaminx': {
    name: 'Megaminx',
    description: '12 yüzlü profesyonel Megaminx. Akıcı dönüş ve yüksek kontrol.',
  },
  'pyraminx': {
    name: 'Pyraminx',
    description: 'Hızlı ve hassas Pyraminx. Kolay dönüş ve yüksek kontrol.',
  },
  'skewb': {
    name: 'Skewb',
    description: 'Kompakt ve hızlı Skewb. Akıcı dönüş ve profesyonel kalite.',
  },
  'square-1': {
    name: 'Square-1',
    description: 'Özel mekanizmaya sahip profesyonel Square-1. Yüksek kalite ve dayanıklılık.',
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
      title: 'Ürün bulunamadı',
      description: 'Aradığınız ürün bulunamadı.',
    }
  }

  return {
    title: `${product.name} | Ready Cube Mağaza`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Ready Cube Mağaza`,
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

