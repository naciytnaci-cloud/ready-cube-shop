import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ValueSection from '@/components/ValueSection'
import FeaturedCubesSection from '@/components/FeaturedCubesSection'
import ProductBenefitsSection from '@/components/ProductBenefitsSection'
import ProductDetailsSection from '@/components/ProductDetailsSection'
import TrustShippingPaymentSection from '@/components/TrustShippingPaymentSection'
import FeaturedProductSection from '@/components/FeaturedProductSection'
import ComingSoonSection from '@/components/ComingSoonSection'
import FinalCTASection from '@/components/FinalCTASection'
import SimpleFooter from '@/components/SimpleFooter'

export const metadata: Metadata = {
  title: 'Ready Cube - Hızlı Küp Ekipmanları',
  description: 'Yarışma ve günlük kullanım için üst seviye ekipmanlar.',
  openGraph: {
    title: 'Ready Cube',
    description: 'Yarışma ve günlük kullanım için üst seviye ekipmanlar.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ValueSection />
      <FeaturedCubesSection />
      <ProductBenefitsSection />
      <ProductDetailsSection />
      <TrustShippingPaymentSection />
      <FeaturedProductSection />
      <ComingSoonSection />
      <FinalCTASection />
      <SimpleFooter />
    </div>
  )
}
