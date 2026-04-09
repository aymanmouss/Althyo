import { CollectionConfig } from 'payload'
import { HeroBlock } from '@/blocks/Hero/config'
import { LogoSliderBlock } from '@/blocks/LogoSlider/config'
import { AboutBlock } from '@/blocks/About/config'
import { ServicesBlock } from '@/blocks/Services/config'
import { FeaturesBlock } from '@/blocks/Features/config'
import { ProjectsBlock } from '@/blocks/Projects/config'
import { ContactBlock } from '@/blocks/Contact/config'
import CalBlock from '@/blocks/Cal/config'
import TestimonialBlock from '@/blocks/Testimonial/config'

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
        FeaturesBlock,
        ProjectsBlock,
        ContactBlock,
        CalBlock,
        TestimonialBlock,
      ],
    },
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
