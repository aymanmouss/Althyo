import { GlobalConfig } from 'payload'

const LegalMentions: GlobalConfig = {
  slug: 'legal-mentions',
  label: 'Legal Mentions',
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  versions: false,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}

export default LegalMentions
