'use client'
import { Header } from '@/payload-types'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Props = {
  navItem: NonNullable<NonNullable<Header['navItems']>[number]>
}

export default function NavDropdownMobile({ navItem }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <p
        className="flex items-center justify-between w-full py-4 text-foreground cursor-pointer ui-text"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {navItem.label}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </p>

      {/* Accordion content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col pb-4 gap-1">
          {navItem.subItems?.map((subItem) => (
            <li key={subItem.id}>
              <Link
                href={subItem.url}
                className="block py-2 px-4 text-muted-foreground hover:text-primary transition-colors"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
