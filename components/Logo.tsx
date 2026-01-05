import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'minimal'
  showIcon?: boolean
  className?: string
}

export default function Logo({ variant = 'default', showIcon = false, className = '' }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`group focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Ready Cube Ana Sayfa"
    >
      <span className="text-gray-900 font-semibold text-lg sm:text-xl md:text-2xl tracking-tight">
        Ready Cube
      </span>
    </Link>
  )
}

// Minimal variant (text only, no icon)
export function LogoMinimal({ className = '' }: { className?: string }) {
  return (
    <Link 
      href="/" 
      className={`group focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Ready Cube Ana Sayfa"
    >
      <span className="text-gray-900 font-semibold text-base sm:text-lg tracking-tight">
        Ready Cube
      </span>
    </Link>
  )
}
