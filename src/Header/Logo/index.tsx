import type { Header } from '@/payload-types'
import Link from 'next/link'

export default function HeaderLogo({ logo }: { logo: Header['logo'] }) {
  const image = logo?.image
  if (!image || typeof image === 'number') return null

  const logoStyle = {
    width: logo?.dimensions?.width || '120px',
    height: 'auto',
  }

  return (
    <Link href="/">
      <img src={image?.url || ''} alt={image?.alt || 'Althyo — Agence web'} style={logoStyle} />
    </Link>
  )
}
