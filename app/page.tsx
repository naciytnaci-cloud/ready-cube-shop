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
import PreLaunchChecklistSection from '@/components/PreLaunchChecklistSection'
import SimpleFooter from '@/components/SimpleFooter'

export const metadata: Metadata = {
  title: 'Ready Cube - Speedcubing Ekipmanları',
  description: 'Yarışma ve günlük kullanım için premium ekipmanlar.',
  openGraph: {
    title: 'Ready Cube',
    description: 'Yarışma ve günlük kullanım için premium ekipmanlar.',
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
      {process.env.NODE_ENV === 'development' && <PreLaunchChecklistSection />}
      <SimpleFooter />
    </div>
  )
}
