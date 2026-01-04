'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              Ready Cube
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-xs">
              {language === 'tr' 
                ? 'Speedcubing topluluğu için tasarlanmış premium ekipmanlar.'
                : 'Premium equipment designed for the speedcubing community.'}
            </p>
          </div>

          {/* Column 2: Menü */}
          <div>
            <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider mb-6">
              {language === 'tr' ? 'Menü' : 'Menu'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 hover:underline active:text-gray-700 transition-all duration-200 font-normal touch-manipulation min-h-[44px] flex items-center group/link"
                >
                  {language === 'tr' ? 'Ana Sayfa' : 'Home'}
                </Link>
              </li>
              <li>
                <Link
                  href="/cantalar"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 hover:underline active:text-gray-700 transition-all duration-200 font-normal touch-manipulation min-h-[44px] flex items-center"
                >
                  {language === 'tr' ? 'Çantalar' : 'Bags'}
                </Link>
              </li>
              <li>
                <span className="text-sm sm:text-base text-gray-400 font-normal">
                  {language === 'tr' ? 'WCA Küpleri' : 'WCA Cubes'}{' '}
                  <span className="text-xs">({language === 'tr' ? 'Yakında' : 'Coming Soon'})</span>
                </span>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 hover:underline active:text-gray-700 transition-all duration-200 font-normal touch-manipulation min-h-[44px] flex items-center"
                >
                  {language === 'tr' ? 'Hakkımızda' : 'About'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Bilgi */}
          <div>
            <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider mb-6">
              {language === 'tr' ? 'Bilgi' : 'Info'}
            </h4>
            <ul className="space-y-4">
              <li>
                <span className="text-sm sm:text-base text-gray-400 font-normal">
                  {language === 'tr' ? 'Sık Sorulan Sorular' : 'FAQ'}
                </span>
              </li>
              <li>
                <span className="text-sm sm:text-base text-gray-400 font-normal">
                  {language === 'tr' ? 'Kargo & Teslimat' : 'Shipping & Delivery'}{' '}
                  <span className="text-xs">({language === 'tr' ? 'Yakında' : 'Soon'})</span>
                </span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 hover:underline active:text-gray-700 transition-all duration-200 font-normal touch-manipulation min-h-[44px] flex items-center"
                >
                  {language === 'tr' ? 'İletişim' : 'Contact'}
                </Link>
              </li>
              <li>
                <span className="text-sm sm:text-base text-gray-400 font-normal">
                  {language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Durum */}
          <div>
            <h4 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider mb-6">
              {language === 'tr' ? 'Durum' : 'Status'}
            </h4>
            <ul className="space-y-4">
              <li>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {language === 'tr' 
                    ? 'Türkiye odaklı proje'
                    : 'Turkey-focused project'}
                </p>
              </li>
              <li>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {language === 'tr' 
                    ? 'Satışlar yakında açılacak'
                    : 'Sales opening soon'}
                </p>
              </li>
              <li>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {language === 'tr' 
                    ? 'Yeni ürünler yolda'
                    : 'New products coming'}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-normal">
            {language === 'tr' 
              ? '© 2026 Ready Cube — Türkiye'
              : '© 2026 Ready Cube — Turkey'}
          </p>
        </div>
      </div>
    </footer>
  )
}
