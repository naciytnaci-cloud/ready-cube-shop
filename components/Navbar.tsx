'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import { SALES_ENABLED } from '@/lib/publicConfig'

const navItems = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Çanta', href: '/shop' },
  { name: 'PDF', href: '/pdf' },
  { name: 'WCA Küpleri', href: '#', comingSoon: true },
  { name: 'Hakkımızda', href: '/about', comingSoon: false },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { getItemCount } = useCart()
  const itemCount = Math.min(1, getItemCount())

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#111111]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* LEFT — Brand */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-semibold text-dark hover:opacity-80 transition-opacity duration-200"
          >
            Ready Cube
          </Link>

          {/* CENTER — Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              const isComingSoon = item.comingSoon
              
              return (
                <Link
                  key={item.name}
                  href={isComingSoon ? '#' : item.href}
                  onClick={(e) => {
                    if (isComingSoon) {
                      e.preventDefault()
                    }
                    handleNavClick()
                  }}
                  className={`text-sm font-medium transition-colors duration-200 ease-out ${
                    isComingSoon
                      ? 'text-gray-400 cursor-default'
                      : isActive
                      ? 'text-dark rc-underline rc-underline-brand rc-underline-active'
                      : 'text-gray-700 hover:text-dark rc-underline rc-underline-brand'
                  }`}
                  style={{ textUnderlineOffset: '4px' }}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* RIGHT — Status / CTA */}
          <div className="hidden md:flex items-center gap-6">
            {!SALES_ENABLED ? (
              <span className="text-xs sm:text-sm text-gray-500 font-normal">
                Satışlar Yakında
              </span>
            ) : (
              <span className="text-xs sm:text-sm text-emerald-700 font-medium">
                Satışta
              </span>
            )}
            <Link
              href="/cart"
              className="relative text-dark hover:opacity-80 transition-opacity duration-200 ease-out min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Sepet"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/cart"
              className="relative text-dark p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-opacity duration-200 hover:opacity-70 active:opacity-50 touch-manipulation"
              aria-label="Sepet"
              onClick={handleNavClick}
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark p-2 min-h-[44px] min-w-[44px] flex items-center justify-center transition-opacity duration-200 hover:opacity-70 active:opacity-50 touch-manipulation"
              aria-label="Menüyü aç/kapat"
              aria-expanded={isOpen}
            >
              {isOpen ? (
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? 'max-h-screen border-t border-[#111111]/10' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            const isComingSoon = item.comingSoon
            
            return (
              <Link
                key={item.name}
                href={isComingSoon ? '#' : item.href}
                onClick={(e) => {
                  if (isComingSoon) {
                    e.preventDefault()
                  }
                  handleNavClick()
                }}
                className={`block w-full text-left py-3 px-3 text-base font-medium min-h-[48px] flex items-center transition-colors duration-200 touch-manipulation ${
                  isComingSoon
                    ? 'text-gray-400 cursor-default'
                    : isActive
                    ? 'text-dark'
                    : 'text-gray-700 active:bg-gray-50'
                }`}
              >
                {item.name}
                {isComingSoon && (
                  <span className="ml-2 text-sm text-gray-400 font-normal">
                    (Yakında)
                  </span>
                )}
              </Link>
            )
          })}
          <div className="pt-2 px-3">
            {!SALES_ENABLED ? (
              <span className="text-xs text-gray-500 font-normal">Satışlar Yakında</span>
            ) : (
              <span className="text-xs text-emerald-700 font-medium">Satışta</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
