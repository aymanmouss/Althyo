import { Button } from '@/components/ui/button'
import { Page } from '@/payload-types'
import Image from 'next/image'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'projects' }>

export default function ProjectsComponent({ title, projects }: Props) {
  return (
    <section className="py-20" id="projects">
      <div className="container-site flex flex-col items-center justify-center ">
        <h2 className="lg:text-5xl md:text-4xl text-4xl text-balance text-center mb-20">{title}</h2>
        <div className="flex flex-col w-full">
          {projects?.map((project, index) => {
            if (typeof project.image === 'number') return null
            return (
              <div key={project.id} className="sticky top-0 pt-4" style={{ zIndex: index + 1 }}>
                <div className="flex lg:flex-row flex-col lg:gap-5 gap-3 bg-secondary rounded-3xl items-center justify-center overflow-hidden p-5">
                  <Image
                    src={project.image?.url || ''}
                    alt={project.title || ''}
                    width={project.image?.width || 0}
                    height={project.image?.height || 0}
                    className="lg:max-w-xl max-w-full h-full object-cover"
                  />
                  <div className="col-span-2 flex flex-col justify-between gap-10 h-full px-5 py-10">
                    <h3 className="lg:text-2xl md:text-2xl text-xl font-medium flex-1 border-b border-border uppercase pb-5">
                      {project.title}
                    </h3>
                    <p className="text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags?.map((tag) => (
                        <Button
                          key={tag.id}
                          size={'sm'}
                          variant={'outline'}
                          className="cursor-default"
                        >
                          {tag.tag}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
