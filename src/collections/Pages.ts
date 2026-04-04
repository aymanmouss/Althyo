import { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero/config'
import { LogoSliderBlock } from '@/blocks/LogoSlider/config'
import { AboutBlock } from '@/blocks/About/config'
import { ServicesBlock } from '@/blocks/Services/config'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'e.g. "home", "about", "services"',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        LogoSliderBlock,
        AboutBlock,
        ServicesBlock,
        // add more blocks later
      ],
    },
    // SEO
    {
      name: 'meta',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
