import { Page } from '@/payload-types'
import { ServiceIcons } from './Icons'
import { IconKey } from './icon-keys'
import { Button } from '@/components/ui/button'
import { CheckCheck } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'services' }>

export default function ServicesComponent({
  title,
  description,
  services,
  buttonLabel,
  buttonUrl,
}: Props) {
  return (
    <section className="py-25 bg-[#efefef4a]">
      <div className="container-site">
        <header className="flex flex-col justify-between items-start">
          <div className="flex flex-col justify-start w-full gap-10">
            <h2 className="text-balance lg:text-5xl md:text-5xl text-4xl max-w-xl">{title}</h2>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start w-full gap-5">
              <Link href={buttonUrl || '#'} className="lg:order-1 order-2">
                <Button size="lg" variant="outline">
                  {buttonLabel}
                  <CheckCheck className="size-7" />
                </Button>
              </Link>
              <p className="text-balance lg:w-1/2 w-full lg:order-2 order-1">{description}</p>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
          {services?.map((service) => {
            const Icon = ServiceIcons[service.icon as IconKey]
            return (
              <div
                key={service.id}
                className={cn(
                  'flex flex-col gap-5 px-5 py-10 rounded-3xl',
                  service.style === 'featured' ? 'bg-gradient-btn text-white' : 'bg-secondary',
                )}
              >
                <div className="w-15 min-h-15 rounded-full bg-white flex items-center justify-center mb-5">
                  <Icon className="size-7 text-primary" />
                </div>
                <p
                  className={cn(
                    'text-balance text-xl font-medium border-b-2 pb-5',
                    service.style === 'featured' ? 'border-[#ffffff63]' : 'border-border',
                  )}
                >
                  {service.title}
                </p>

                <div className="flex flex-col gap-5 justify-between h-full">
                  <p className="text-balance text-xl leading-relaxed">{service.description}</p>
                  <Link href={service.linkUrl || '#'} className="underline cursor-pointer">
                    {service.linkLabel}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
