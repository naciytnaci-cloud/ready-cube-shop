import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ValueSection from '@/components/ValueSection'
import BrandStorySection from '@/components/BrandStorySection'
import ShopCTASection from '@/components/ShopCTASection'
import SimpleFooter from '@/components/SimpleFooter'

export const metadata: Metadata = {
  title: 'Ready Cube - Speedcubing Ekipmanları',
  description: 'İlk ürünümüz: Ready Cube Backpack. Speedcubing topluluğu için özenle tasarlanmış çanta. Yakında satışta.',
  openGraph: {
    title: 'Ready Cube - İlk Ürünümüz: Ready Cube Backpack',
    description: 'Speedcubing topluluğu için özenle tasarlanmış ilk ürünümüz. Yakında satışta.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ValueSection />
      <BrandStorySection />
      <ShopCTASection />
      <SimpleFooter />
    </div>
  )
}
