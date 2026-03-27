'use client'
import { Header } from '@/payload-types'
import Link from 'next/link'
import { useState } from 'react'

type props = {
  navItem: NonNullable<NonNullable<Header['navItems']>[number]>
}
export default function NavItemWithDropdown({ navItem }: props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <button aria-expanded={isOpen} aria-haspopup="true" onClick={() => setIsOpen(!isOpen)}>
        {navItem.label}
      </button>
      {isOpen && (
        <ul>
          {navItem.subItems?.map((subItem) => (
            <li key={subItem.id}>
              <Link href={subItem.url} onClick={() => setIsOpen(false)}>
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
