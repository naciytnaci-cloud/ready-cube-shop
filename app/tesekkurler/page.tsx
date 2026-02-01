import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teşekkürler',
  description: 'Ödemeniz başarıyla alındı.',
}

export default function TesekkurlerPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl sm:text-4xl font-semibold text-dark tracking-tight">
          Teşekkürler 🎉
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          Ödemen başarıyla alındı. PDF dosyanız kısa süre içinde e-posta adresinize
          gönderilecektir.
        </p>
      </div>
    </div>
  )
}


