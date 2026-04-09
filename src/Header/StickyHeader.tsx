'use client'

import { useEffect, useState } from 'react'

export default function StickyHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200/60'
          : 'bg-white border-b border-transparent',
      ].join(' ')}
    >
      {children}
    </header>
  )
}
