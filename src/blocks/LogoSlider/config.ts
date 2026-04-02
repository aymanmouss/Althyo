import { Block } from 'payload'

export const LogoSliderBlock: Block = {
  slug: 'logo-slider',
  labels: {
    singular: 'Logo Slider',
    plural: 'Logo Slider',
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'logos',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
