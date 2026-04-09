import { Block } from 'payload'

export const FeaturesBlock: Block = {
  slug: 'features',
  labels: {
    singular: 'Features',
    plural: 'Features',
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
      name: 'tags',
      type: 'array',
      admin: {
        components: {
          RowLabel: {
            path: '/lib/RowLabel',
            exportName: 'RowLabel',
            clientProps: { field: 'tag', label: 'Tag' },
          },
        },
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'array',
      admin: {
        components: {
          RowLabel: {
            path: '/lib/RowLabel',
            exportName: 'RowLabel',
            clientProps: { field: 'title', label: 'Feature' },
          },
        },
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
    },
  ],
}
