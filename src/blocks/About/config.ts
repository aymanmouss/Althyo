import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'about',
  labels: {
    singular: 'About',
    plural: 'About',
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
      name: 'stats',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
      maxRows: 2,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
