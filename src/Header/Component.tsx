import getHeader from '@/Header/getHeader'
import HeaderLogo from '@/Header/Logo'
import Nav from '@/Header/Nav'

export default async function Header() {
  const header = await getHeader()

  const { logo, navItems, cta } = header
  return (
    <header className="">
      <div className="flex">
        <HeaderLogo logo={logo} />
        <Nav navItems={navItems} />
        <button>{cta?.label}</button>
      </div>
    </header>
  )
}
