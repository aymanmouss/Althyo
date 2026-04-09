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
    <Link href="/" aria-label="Althyo — retour à l'accueil">
      <img src={image?.url || ''} alt="" style={logoStyle} />
    </Link>
  )
}
