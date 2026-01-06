'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import Logo, { LogoMinimal } from '@/components/Logo'

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  const navItems = [
    { href: '/', label: language === 'tr' ? 'Ana Sayfa' : 'Home' },
    { href: '/cantalar', label: language === 'tr' ? 'Çantalar' : 'Bags' },
    { href: '/shop', label: language === 'tr' ? 'Shop' : 'Shop', comingSoon: false },
    { href: '/about', label: language === 'tr' ? 'Hakkımızda' : 'About' },
  ]

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <Logo variant="default" showIcon={false} />

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium no-underline ${
                    item.comingSoon
                      ? 'text-gray-400 cursor-not-allowed'
                      : isActive
                      ? 'text-gray-900 underline'
                      : 'text-gray-600 hover:text-gray-900 hover:underline'
                  }`}
                  style={{ textUnderlineOffset: '4px' }}
                  onClick={(e) => {
                    if (item.comingSoon) {
                      e.preventDefault()
                    }
                  }}
                >
                  {item.label}
                  {item.comingSoon && (
                    <span className="ml-1.5 text-xs text-gray-400 font-normal">
                      ({language === 'tr' ? 'Yakında' : 'Soon'})
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right: Utility & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1 border border-gray-200 rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  language === 'tr'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                aria-label="Türkçe"
              >
                TR
              </button>
              <div className="w-px h-4 bg-gray-200"></div>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  language === 'en'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Disabled Store Button */}
            <button
              disabled
              className="hidden md:block text-sm font-medium text-gray-400 cursor-not-allowed px-4 py-2"
              aria-label={language === 'tr' ? 'Mağaza Yakında' : 'Store Coming Soon'}
            >
              {language === 'tr' ? 'Mağaza Yakında' : 'Store Soon'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 active:scale-95 transition-all duration-200 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Menu */}
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <LogoMinimal />
                {/* Language Switcher in Mobile Menu */}
                <div className="flex items-center gap-2 border border-gray-200 rounded-md overflow-hidden">
                  <button
                    onClick={() => setLanguage('tr')}
                    className={`px-2 py-1 text-xs font-medium transition-colors duration-200 ${
                      language === 'tr'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-600'
                    }`}
                    aria-label="Türkçe"
                  >
                    TR
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 text-xs font-medium transition-colors duration-200 ${
                      language === 'en'
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-600'
                    }`}
                    aria-label="English"
                  >
                    EN
                  </button>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:scale-110"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          if (item.comingSoon) {
                            e.preventDefault()
                            setMobileMenuOpen(false)
                            return
                          }
                          setMobileMenuOpen(false)
                        }}
                        className={`py-4 px-4 text-base font-medium no-underline touch-manipulation min-h-[44px] flex items-center ${
                          item.comingSoon
                            ? 'text-gray-400 cursor-not-allowed'
                            : isActive
                            ? 'text-gray-900 underline'
                            : 'text-gray-700 hover:text-gray-900 hover:underline'
                        }`}
                        style={{ textUnderlineOffset: '4px' }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.label}</span>
                          {item.comingSoon && (
                            <span className="text-xs text-gray-400 font-normal">
                              ({language === 'tr' ? 'Yakında' : 'Soon'})
                            </span>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
                
                {/* Mobile Store Status */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    disabled
                    className="w-full text-sm font-medium text-gray-400 cursor-not-allowed text-center py-3"
                    aria-label={language === 'tr' ? 'Mağaza Yakında' : 'Store Coming Soon'}
                  >
                    {language === 'tr' ? 'Mağaza Yakında' : 'Store Soon'}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
