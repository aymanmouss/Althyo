import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function Footer() {
  const payload = await getPayload({ config })

  const footer = await payload.findGlobal({
    slug: 'footer',
    depth: 1,
  })
  return (
    <footer className="bg-secondary py-5">
      <div className="border-b border-border flex flex-col sm:flex-row items-center justify-center  pb-3 gap-2">
        {footer?.navItems?.map((item, index) => (
          <Link href={item.link} key={item.id} className="uppercase text-sm md:text-lg">
            {item.label}{' '}
            {footer?.navItems && index !== footer?.navItems?.length - 1 ? (
              <span className="mx-2 hidden sm:block" aria-hidden="true">
                |
              </span>
            ) : (
              ''
            )}
          </Link>
        ))}
      </div>
      <div className="container-site flex items-center justify-center pt-3">
        <p className="text-center text-sm md:text-lg text-balance">{footer?.copyright}</p>
      </div>
    </footer>
  )
}
