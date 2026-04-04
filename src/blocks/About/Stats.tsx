import { cn } from '@/lib/utils'
import { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'about' }>

export default function Stats({ stats, className }: { stats: Props['stats']; className?: string }) {
  return (
    <div className={cn('items-center gap-5 lg:gap-10', className)}>
      {stats?.map((stat, index) => (
        <div key={index} className="flex flex-col justify-between items-start gap-1">
          <p className="text-4xl lg:text-5xl font-medium text-gradient text-poppins">
            {stat.number}
          </p>
          <p className="text-lg text-balance">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}
