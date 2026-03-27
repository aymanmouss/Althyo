import type { Header } from '@/payload-types'

export default function HeaderLogo({ logo }: { logo: Header['logo'] }) {
  const image = logo?.image
  if (!image || typeof image === 'number') return null

  const logoStyle = {
    width: logo?.dimensions?.width || '120px',
    height: 'auto',
  }

  return <img src={image?.url || ''} alt={image?.alt || ''} style={logoStyle} />
}
