import { Block } from 'payload'

const CalBlock: Block = {
  slug: 'cal',
  labels: {
    singular: 'Cal.com',
    plural: 'Cal.com',
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
  ],
}

export default CalBlock
