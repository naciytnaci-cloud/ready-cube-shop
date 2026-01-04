import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-dark transform will-change-transform'
  
  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-dark active:scale-[0.98] focus:ring-primary transition-all duration-200 ease-out',
    secondary:
      'bg-transparent text-primary border border-primary hover:bg-primary-dark hover:text-white active:scale-[0.98] focus:ring-primary transition-all duration-200 ease-out',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}

