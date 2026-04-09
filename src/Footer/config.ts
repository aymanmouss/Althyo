import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  versions: false,
  fields: [
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: '© 2026 Althyo. All rights reserved.',
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Items',
      minRows: 0,
      maxRows: 8,
      admin: {
        description: 'Add up to 8 top-level navigation links.',
        initCollapsed: true,
        components: {
          // Row label shows the nav item label for quick scanning
          RowLabel: {
            path: '/lib/RowLabel',
            exportName: 'RowLabel',
            clientProps: { field: 'label', label: 'Navigation Item' },
          },
        },
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            description: 'The text displayed in the navigation menu.',
          },
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          admin: {
            description: 'The URL the link points to (e.g., /about, /contact, or an external URL).',
          },
        },
      ],
    },
  ],
}
