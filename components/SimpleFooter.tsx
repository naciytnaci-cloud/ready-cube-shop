'use client'

import Link from 'next/link'

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <div className="text-base sm:text-lg font-semibold tracking-tight">
              Ready Cube
            </div>
            <p className="text-sm text-gray-300 max-w-md">
              Speedcubing için tasarlandı.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white rc-underline rc-underline-brand transition-colors duration-200 ease-out"
              style={{ textUnderlineOffset: '4px' }}
            >
              Gizlilik
            </Link>
            <Link
              href="/kvkk"
              className="text-gray-300 hover:text-white rc-underline rc-underline-brand transition-colors duration-200 ease-out"
              style={{ textUnderlineOffset: '4px' }}
            >
              KVKK
            </Link>
            <Link
              href="/distance-sales-contract"
              className="text-gray-300 hover:text-white rc-underline rc-underline-brand transition-colors duration-200 ease-out"
              style={{ textUnderlineOffset: '4px' }}
            >
              Mesafeli Satış
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white rc-underline rc-underline-brand transition-colors duration-200 ease-out"
              style={{ textUnderlineOffset: '4px' }}
            >
              Kullanım Koşulları
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white rc-underline rc-underline-brand transition-colors duration-200 ease-out"
              style={{ textUnderlineOffset: '4px' }}
            >
              İletişim
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-400">
            © {currentYear} Ready Cube — Türkiye
          </p>
        </div>
      </div>
    </footer>
  )
}
