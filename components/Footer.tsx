import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Ready Cube</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Türkiye merkezli profesyonel speedcubing ekipmanları.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-primary transition-colors duration-300 ease-out">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-white/80 hover:text-primary transition-colors duration-300 ease-out">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-primary transition-colors duration-300 ease-out">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-primary transition-colors duration-300 ease-out">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Destek
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-primary transition-colors duration-300 ease-out">
                  İletişim
                </Link>
              </li>
              <li>
                <a href="mailto:info@readycube.com" className="text-sm text-white/80 hover:text-primary transition-colors duration-300 ease-out">
                  E-posta
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Sosyal Medya
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-lg text-white/80 hover:text-primary hover:bg-gray-800 transition-all duration-300 ease-out"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-lg text-white/80 hover:text-primary hover:bg-gray-800 transition-all duration-300 ease-out"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-7.377.505a3.023 3.023 0 0 0-2.122 2.136C2.25 7.69 2.25 12 2.25 12s0 4.31.251 5.814a3.015 3.015 0 0 0 2.122 2.136c.128.505 7.377.505 7.377.505s7.505 0 7.377-.505a3.015 3.015 0 0 0 2.122-2.136c.251-1.503.251-5.814.251-5.814s0-4.31-.251-5.814zM9.75 15.02V8.98l6.75 3.02-6.75 3.02z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Ready Cube. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
