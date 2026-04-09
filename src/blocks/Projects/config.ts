import { Block } from 'payload'

export const ProjectsBlock: Block = {
  slug: 'projects',
  labels: {
    singular: 'Projects',
    plural: 'Projects',
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
      name: 'projects',
      type: 'array',
      admin: {
        components: {
          RowLabel: {
            path: '/lib/RowLabel',
            exportName: 'RowLabel',
            clientProps: { field: 'title', label: 'Project' },
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
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
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
      ],
    },
  ],
}

export default ProjectsBlock
