import { Header } from '@/payload-types'
import NavDropdownDesktop from './NavDropdownDesktop'
import NavDropdownMobile from './NavDropdownMobile'

type Props = {
  navItem: NonNullable<NonNullable<Header['navItems']>[number]>
}

export default function NavDropdown({ navItem }: Props) {
  return (
    <>
      {/* Desktop only */}
      <div className="hidden nav:block">
        <NavDropdownDesktop navItem={navItem} />
      </div>

      {/* Mobile only */}
      <div className="nav:hidden">
        <NavDropdownMobile navItem={navItem} />
      </div>
    </>
  )
}
