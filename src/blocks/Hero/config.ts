import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero',
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: 'heading',
      type: 'group',
      fields: [
        { name: 'text1', type: 'text' },
        { name: 'text2', type: 'text' },
      ],
    },
    { name: 'highlightWord', type: 'text', required: true },
    {
      name: 'subtitle',
      type: 'group',
      fields: [
        { name: 'text1', type: 'textarea' },
        { name: 'text2', type: 'textarea' },
        { name: 'text3', type: 'textarea' },
      ],
    },
    {
      name: 'primaryCta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}
