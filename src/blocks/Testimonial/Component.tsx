import StarIcon from '@/components/icons/star'
import { Page } from '@/payload-types'
import Image from 'next/image'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'testimonial' }>

export default function TestimonialComponent({ title, description, testimonials }: Props) {
  return (
    <section className="py-25">
      <div className="container-site flex flex-col items-center gap-5">
        <div className="w-full bg-gradient-btn px-10 rounded-xl py-10 flex flex-col gap-5 text-white items-center justify-center">
          <h2 className="text-center text-3xl md:text-5xl uppercase text-balance font-medium">
            {title}
          </h2>
          {description && (
            <p className="text-center text-lg md:text-xl text-balance max-w-3xl">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 mt-10 justify-items-stretch">
          {testimonials?.map((testimonial) => {
            if (typeof testimonial.image === 'number' || typeof testimonial.source === 'number')
              return null
            return (
              <div
                key={testimonial.id}
                className="flex flex-col justify-between gap-5 bg-secondary px-6 py-10 min-h-75 rounded-xl max-w-xl"
              >
                <div
                  className="flex items-center gap-2"
                  role="img"
                  aria-label={`Note : ${testimonial.rating || 0} étoile${(testimonial.rating || 0) > 1 ? 's' : ''} sur 5`}
                >
                  {Array.from({ length: testimonial.rating || 0 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>

                <p className="text-balance text-xl leading-relaxed">{testimonial.text}</p>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div className="flex items-center gap-2 ">
                    <Image
                      src={testimonial.image?.url || ''}
                      alt={testimonial.name || ''}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-balance md:text-xl text-lg font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-balance md:text-xl text-lg">{testimonial.company_name}</p>
                    </div>
                  </div>
                  <div className="relative w-28 h-10 shrink-0">
                    <Image
                      src={testimonial.source?.url || ''}
                      alt={testimonial.company_name || 'Logo entreprise'}
                      fill
                      sizes="(max-width: 768px) 112px, 112px"
                      className="object-contain"
                    />
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
