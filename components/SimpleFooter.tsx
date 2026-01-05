export default function SimpleFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contact" className="bg-white border-t border-gray-200 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 section-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div>
            <p className="text-gray-900 text-sm sm:text-base font-medium mb-1">
              Ready Cube
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Speedcubing ekipmanları
            </p>
          </div>

          {/* Contact Info */}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <div>
              <p className="text-gray-500 text-xs sm:text-sm mb-1">
                İletişim
              </p>
              <a
                href="mailto:iletisim@readycube.shop"
                className="text-gray-600 text-xs sm:text-sm hover:text-gray-900 transition-colors duration-200"
              >
                iletisim@readycube.shop
              </a>
            </div>
          </div>

          {/* Trust Notes */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Ready Cube bireysel bir projedir.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Satışlar açılmadan önce gerekli bilgiler eklenecektir.
            </p>
          </div>

          {/* Growth Signals */}
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <p className="text-gray-400 text-xs sm:text-sm">
              Yeni ürünler yolda
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Topluluktan gelen geri bildirimlerle geliştiriliyor
            </p>
          </div>

          {/* Brand Message */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-gray-500 text-xs sm:text-sm font-medium mb-2">
              Ready Cube — Speedcubers for speedcubers.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-2">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Ready Cube. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

