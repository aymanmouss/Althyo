import { Block } from 'payload'

const TestimonialBlock: Block = {
  slug: 'testimonial',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
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
      name: 'testimonials',
      type: 'array',
      admin: {
        components: {
          RowLabel: {
            path: '/lib/RowLabel',
            exportName: 'RowLabel',
            clientProps: { field: 'company_name', label: 'Company name' },
          },
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'company_name',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'rating',
          type: 'number',
        },
        {
          name: 'text',
          type: 'textarea',
        },
        {
          name: 'source',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

export default TestimonialBlock
