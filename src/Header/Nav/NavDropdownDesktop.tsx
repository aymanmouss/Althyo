'use client'
import { Header } from '@/payload-types'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Props = {
  navItem: NonNullable<NonNullable<Header['navItems']>[number]>
}

export default function NavDropdownDesktop({ navItem }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger */}
      <p
        className="flex items-center gap-1 py-2 hover:text-primary transition-colors ui-text cursor-pointer"
        aria-expanded={isOpen}
      >
        {navItem.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </p>

      {/* Invisible bridge — fills the gap between trigger and panel */}
      <div className="absolute top-full left-0 right-0 h-3" />

      {/* Mega menu panel */}
      <div
        className={`
          absolute top-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2 z-50
          w-[640px] bg-white rounded-2xl shadow-xl border border-border
          transition-all duration-200 ease-in-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex gap-0 overflow-hidden rounded-2xl">
          {/* Left — image placeholder */}
          <div className="w-[240px] shrink-0 bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Image</span>
          </div>

          {/* Right — links */}
          <div className="flex-1 p-6">
            <p className="text-sm text-muted-foreground mb-4">{navItem.label}</p>
            <ul className="flex flex-col gap-1">
              {navItem.subItems?.map((subItem) => (
                <li key={subItem.id}>
                  <Link
                    href={subItem.url}
                    className="flex items-center justify-between py-2 px-3 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors group"
                  >
                    {subItem.label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
