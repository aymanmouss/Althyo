import { Page } from '@/payload-types'
import Stats from './Stats'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'about' }>

export default function AboutBlock({ title, description, stats }: Props) {
  return (
    <section className="py-25">
      <div className="container-site flex flex-col lg:flex-row justify-between items-stretch gap-10">
        <div className="flex lg:flex-col md:flex-row flex-col gap-10 justify-between flex-1">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium">{title}</h2>
          <Stats stats={stats || []} className="hidden md:flex" />
        </div>
        <p className="text-balance lg:max-w-xl leading-11 font-medium">{description}</p>
        <Stats stats={stats || []} className="md:hidden flex md:justify-start justify-around" />
      </div>
    </section>
  )
}
