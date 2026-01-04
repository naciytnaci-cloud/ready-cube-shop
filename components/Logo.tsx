import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center justify-start group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark rounded-sm transition-opacity duration-200 hover:opacity-90"
      aria-label="Ready Cube Ana Sayfa"
    >
      <div className="relative flex-shrink-0 h-8 w-auto sm:h-10 md:h-11">
        <Image
          src="/logo.png"
          alt="Ready Cube - Profesyonel Speedcubing Ekipmanları Logosu"
          width={160}
          height={44}
          priority
          quality={95}
          className="h-full w-auto object-contain"
          style={{
            filter: 'brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))',
          }}
        />
      </div>
    </Link>
  )
}

