import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import Hero from './Hero/Hero'
import LogoSlider from './LogoSlider/LogoSlider'

const blockComponents = {
  hero: Hero,
  'logo-slider': LogoSlider,
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
              // @ts-expect-error there may be some mismatch between the expected types here
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
