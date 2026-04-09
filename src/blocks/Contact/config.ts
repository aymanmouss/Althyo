import { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
  labels: {
    singular: 'Contact',
    plural: 'Contact',
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'cta',
      type: 'text',
    },
  ],
}
