import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'
import PdfPageContent from '@/app/pdf/PdfPageContent'

export const metadata: Metadata = {
  title: 'PDF Rehberleri',
  description: 'Speedcubing için hazırlanmış dijital rehberler.',
}

export default function PdfMarketPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PdfPageContent />

      <SimpleFooter />
    </div>
  )
}


