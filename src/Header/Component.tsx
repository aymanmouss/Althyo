import { Button } from '@/components/ui/button'
import getHeader from '@/Header/getHeader'
import HeaderLogo from '@/Header/Logo'
import Nav from '@/Header/Nav'
import { Globe, Rocket } from 'lucide-react'
import MobileMenu from './Nav/Mobile/MobileMenu'

export default async function Header() {
  const header = await getHeader()

  const { logo, navItems, cta } = header
  return (
    <header className="py-5 relative border-b border-gray-200 nav:border-none container-site">
      <div className="flex justify-between items-center max-w-site mx-auto">
        <HeaderLogo logo={logo} />
        <Nav navItems={navItems} />
        <div className="flex items-center gap-5">
          <Button variant="outline" size="defaultIconBtn" className="hidden lg:inline-flex">
            <span className="flex items-center justify-center gap-1.5 ui-text">
              EN <Globe className="size-5" />
            </span>
          </Button>
          <Button className="hidden sm:flex">{cta?.label}</Button>
          <MobileMenu navItems={navItems} cta={cta} />
        </div>
      </div>
    </header>
  )
}
