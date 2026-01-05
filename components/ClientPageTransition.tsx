'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientPageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Reset visibility on route change
    setIsVisible(false)
    
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsVisible(true)
    }, 10)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <div
      className={`${
        isVisible ? 'page-enter-active' : 'page-enter'
      }`}
    >
      {displayChildren}
    </div>
  )
}

