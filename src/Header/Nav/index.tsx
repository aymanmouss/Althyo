import type { Header } from '@/payload-types'
import Link from 'next/link'
import NavItemWithDropdown from './nav.client'

type Props = {
  navItems: Header['navItems']
}

export default function Nav({ navItems }: Props) {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-4">
        {navItems?.map((navItem, i) =>
          !navItem?.subItems?.length ? (
            <li key={navItem.id}>
              <Link href={navItem.link.url}>{navItem.label}</Link>
            </li>
          ) : (
            <NavItemWithDropdown key={i} navItem={navItem} />
          ),
        )}
      </ul>
    </nav>
  )
}
