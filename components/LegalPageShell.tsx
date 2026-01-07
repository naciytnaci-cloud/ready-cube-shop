import Navbar from '@/components/Navbar'
import SimpleFooter from '@/components/SimpleFooter'

type LegalPageShellProps = {
  title: string
  updatedAt: string
  children: React.ReactNode
}

export default function LegalPageShell({ title, updatedAt, children }: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20">
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-dark tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            Son güncelleme: {updatedAt}
          </p>
          <div className="mt-8 h-px bg-[#111111]/10" />
        </header>

        <article className="space-y-10 text-gray-600 leading-relaxed">
          {children}
        </article>
      </main>
      <SimpleFooter />
    </div>
  )
}


