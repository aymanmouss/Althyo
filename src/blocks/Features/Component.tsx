import { Button } from '@/components/ui/button'
import { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'features' }>

export default function FeaturesComponent({ title, description, tags, features }: Props) {
  return (
    <section className="py-25 bg-[#efefef4a]">
      <div className="container-site flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col justify-between bg-gradient-btn text-white rounded-3xl px-10 py-12 lg:max-w-xl max-w-full gap-5">
          <h2 className="text-balance lg:text-5xl md:text-5xl text-4xl max-w-xl">{title}</h2>
          <div className="flex flex-wrap gap-2 my-7">
            {tags?.map((tag) => (
              <Button key={tag.id} variant={'outlineWhite'} size={'lg'} className="cursor-default">
                {tag.tag}
              </Button>
            ))}
          </div>
          <p className="text-balance  ">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features?.map((feature, i) => (
            <div key={feature.id} className="bg-secondary rounded-3xl  pb-7 pt-25 relative ">
              <div className="absolute top-15 left-0 w-full h-20  flex justify-center z-0">
                <span className="text-[180px] font-medium text-black/5 text-poppins z-0">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-col gap-1 bg-secondary z-10 relative pt-5 px-10 border-t border-black/5">
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-xl leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
