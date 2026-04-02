import { Page } from '@/payload-types'
import Image from 'next/image'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'logo-slider' }>

export default function LogoSlider({ title, logos }: Props) {
  const brands =
    logos?.flatMap((brand) => {
      const logo = brand.logo
      if (!logo || typeof logo === 'number') return []
      return [logo]
    }) ?? []

  if (brands.length === 0) return null

  return (
    <section className="py-15" aria-label={title ?? 'Nos clients'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-center mb-10 text-[font-size-body-headline]">{title}</h2>
        )}

        {/* Desktop: static grid */}
        <div
          className="hidden lg:grid grid-cols-4 gap-8"
          role="list"
          aria-label="Logo clients"
        >
          {brands.map((logo, i) => (
            <div
              key={logo.id ?? i}
              role="listitem"
              className="flex justify-center items-center border border-gray-200 shadow-sm h-24 rounded-2xl p-4"
            >
              <Image
                src={logo.url!}
                alt={logo.alt}
                width={logo.width!}
                height={logo.height!}
                sizes="(max-width: 1280px) 25vw, 200px"
                className="h-9 w-auto object-contain"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Mobile: marquee — purely visual, hidden from screen readers */}
        <div
          className="lg:hidden overflow-hidden [mask:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
          aria-hidden="true"
        >
          <div className="flex w-max gap-4 animate-marquee">
            {/* First set — visible */}
            {brands.map((logo, i) => (
              <div
                key={`a-${logo.id ?? i}`}
                className="flex justify-center items-center border border-gray-200 shadow-sm h-20 w-36 rounded-2xl shrink-0 p-4"
              >
                <Image
                  src={logo.url!}
                  alt=""
                  width={logo.width!}
                  height={logo.height!}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop — decorative */}
            {brands.map((logo, i) => (
              <div
                key={`b-${logo.id ?? i}`}
                className="flex justify-center items-center border border-gray-200 shadow-sm h-20 w-36 rounded-2xl shrink-0 p-4"
              >
                <Image
                  src={logo.url!}
                  alt=""
                  width={logo.width!}
                  height={logo.height!}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
