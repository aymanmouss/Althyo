import { Block } from 'payload'
import { iconKeys } from './icon-keys'

export const ServicesBlock: Block = {
  slug: 'services',
  labels: {
    singular: 'Services',
    plural: 'Services',
  },
  admin: {
    disableBlockName: true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'buttonLabel',
          type: 'text',
          admin: { width: '50%' },
        },
        {
          name: 'buttonUrl',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'services',
      type: 'array',
      admin: {
        components: {
          RowLabel: {
            path: '/lib/RowLabel',
            exportName: 'RowLabel',
            clientProps: { field: 'title', label: 'Service' },
          },
        },
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          options: iconKeys.map((key) => ({
            label: key.charAt(0).toUpperCase() + key.slice(1),
            value: key,
          })),
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'linkLabel',
              type: 'text',
              admin: { width: '50%' },
            },
            {
              name: 'linkUrl',
              type: 'text',
              admin: { width: '50%' },
            },
          ],
        },
        {
          name: 'style',
          type: 'select',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Featured',
              value: 'featured',
            },
          ],
          defaultValue: 'default',
        },
      ],
    },
  ],
}
