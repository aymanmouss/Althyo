import { Button } from '@/components/ui/button'
import getHeader from '@/Header/getHeader'
import HeaderLogo from '@/Header/Logo'
import Nav from '@/Header/Nav'
import { Globe } from 'lucide-react'
import MobileMenu from './Nav/Mobile/MobileMenu'
import Link from 'next/link'
import StickyHeader from './StickyHeader'

export default async function Header() {
  const header = await getHeader()

  const { logo, navItems, cta } = header
  return (
    <StickyHeader>
      <div className="py-5 container-site">
        <div className="flex justify-between items-center max-w-site mx-auto">
          <HeaderLogo logo={logo} />
          <Nav navItems={navItems} />
          <div className="flex items-center gap-5">
            <Button variant="outline" size="defaultIconBtn" className="hidden lg:inline-flex">
              <span className="flex items-center justify-center gap-1.5 ui-text">
                FR <Globe className="size-5" />
              </span>
            </Button>
            <Link href={cta?.link?.url || '#'}>
              <Button className="hidden sm:flex">{cta?.label}</Button>
            </Link>
            <MobileMenu navItems={navItems} cta={cta} />
          </div>
        </div>
      </div>
    </StickyHeader>
  )
}
