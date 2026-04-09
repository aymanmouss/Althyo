import type { Header } from '@/payload-types'
import Link from 'next/link'
import NavDropdown from './NavDropdown'

type Props = {
  navItems: Header['navItems']
}

export default function Nav({ navItems }: Props) {
  return (
    <nav aria-label="Main navigation" className="hidden nav:flex">
      <ul className="flex items-center gap-4">
        {navItems?.map((navItem, i) =>
          !navItem?.subItems?.length ? (
            <li key={navItem.id} className="hover:text-primary transition-colors">
              <a href={navItem.link.url}>{navItem.label}</a>
            </li>
          ) : (
            <NavDropdown key={i} navItem={navItem} />
          ),
        )}
      </ul>
    </nav>
  )
}
