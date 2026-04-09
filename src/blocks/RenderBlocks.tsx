import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import Hero from './Hero/Hero'
import LogoSlider from './LogoSlider/LogoSlider'
import AboutBlock from './About/AboutBlock'
import ServicesComponent from './Services/Component'
import FeaturesComponent from './Features/Component'
import ProjectsComponent from './Projects/Component'
import { ContactForm } from '@/blocks/Contact/ContactForm'
import CalComponent from '@/blocks/Cal/Cal'
import TestimonialComponent from './Testimonial/Component'

const blockComponents = {
  hero: Hero,
  'logo-slider': LogoSlider,
  about: AboutBlock,
  services: ServicesComponent,
  features: FeaturesComponent,
  projects: ProjectsComponent,
  contact: ContactForm,
  cal: CalComponent,
  testimonial: TestimonialComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              //  @ts-expect-error there may be some mismatch between the expected types here
              return <Block {...block} key={index} />
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
