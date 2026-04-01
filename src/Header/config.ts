import type { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  /**
   * Access control:
   * - Anyone can read (used on the public frontend).
   * - Only authenticated users (editors / admins) can update.
   */
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  // Optimisation: cache the global so Payload doesn't hit the DB on every request
  versions: false,
  fields: [
    // ─── Logo ────────────────────────────────────────────────────────────────
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image',
          admin: {
            description: 'Recommended: SVG or transparent PNG, ideally ≤ 200 × 60 px.',
          },
        },
        {
          name: 'dimensions',
          type: 'group',
          label: 'Logo Dimensions',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'width',
                  type: 'text',
                  label: 'Width (px)',
                  defaultValue: '120px',
                  admin: { width: '50%' },
                },
              ],
            },
          ],
        },
      ],
    },

    // ─── Navigation Menu ─────────────────────────────────────────────────────
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
            path: '/Header/RowLabel',
            exportName: 'NavRowLabel',
          },
        },
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'link',
          type: 'group',
          label: 'Link',
          fields: [
            {
              name: 'type',
              type: 'radio',
              label: 'Link Type',
              defaultValue: 'internal',
              options: [
                { label: 'Internal Page', value: 'internal' },
                { label: 'External URL', value: 'external' },
              ],
              admin: { layout: 'horizontal' },
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
              admin: {
                description: 'For internal links use a relative path, e.g. /about',
              },
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: false,
            },
          ],
        },
        // Optional dropdown sub-items
        {
          name: 'subItems',
          type: 'array',
          label: 'Dropdown Sub-items (optional)',
          maxRows: 6,
          admin: {
            initCollapsed: true,
            description: 'Leave empty for a simple link; populate for a dropdown menu.',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },

    // ─── CTA Button ──────────────────────────────────────────────────────────
    {
      name: 'cta',
      type: 'group',
      label: 'Call-to-Action Button',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show CTA button',
          defaultValue: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Button Label',
          required: true,
          defaultValue: 'Get Started',
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.enabled),
          },
        },
        {
          name: 'link',
          type: 'group',
          label: 'Button Link',
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.enabled),
          },
          fields: [
            {
              name: 'type',
              type: 'radio',
              label: 'Link Type',
              defaultValue: 'internal',
              options: [
                { label: 'Internal Page', value: 'internal' },
                { label: 'External URL', value: 'external' },
              ],
              admin: { layout: 'horizontal' },
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
              defaultValue: '/contact',
            },
            {
              name: 'newTab',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Style',
          defaultValue: 'primary',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
          ],
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.enabled),
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
