import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'highlightWord', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
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
    { name: 'imageLeft', type: 'upload', relationTo: 'media' },
    { name: 'imageRight', type: 'upload', relationTo: 'media' },
  ],
}
