'use client'
import { Header } from '@/payload-types'
import { useState } from 'react'
import NavToggle from './NavToggle'
import Link from 'next/link'
import NavDropdown from '../NavDropdown'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MobileMenu({
  navItems,
  cta,
}: {
  navItems: Header['navItems']
  cta: Header['cta']
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="nav:hidden">
      <NavToggle isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setIsOpen(false)} />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-[320px] bg-white shadow-xl
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close button only — no logo */}
        <div className="flex items-center justify-end px-6 py-5">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav items — grows to fill space */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto">
          <ul className="flex flex-col px-6 gap-1">
            {navItems?.map((navItem, i) =>
              !navItem?.subItems?.length ? (
                <li key={navItem.id}>
                  <Link
                    href={navItem.link.url}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 text-foreground border-b border-border hover:text-primary transition-colors"
                  >
                    {navItem.label}
                  </Link>
                </li>
              ) : (
                <NavDropdown key={i} navItem={navItem} />
              ),
            )}
          </ul>
        </nav>

        {/* CTA buttons — pinned to bottom */}
        <div className="flex flex-col gap-3 px-6 py-6 border-t border-border">
          <Button variant="default" className="w-full" onClick={() => setIsOpen(false)}>
            {cta?.label}
          </Button>
          <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
            {cta?.label}
          </Button>
        </div>
      </div>
    </div>
  )
}
