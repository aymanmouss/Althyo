import { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'firstName',
    components: {
      views: {
        edit: {
          default: {
            Component: '@/components/admin/ContactView#ContactView',
          },
        },
      },
    },
  },
  access: {
    create: () => true, // API publique peut créer
    read: () => true,
    update: () => false, // personne ne peut modifier
    delete: () => false, // personne ne peut supprimer
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation !== 'create') return

        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY!,
          },
          body: JSON.stringify({
            sender: { name: 'Althyo', email: process.env.CONTACT_EMAIL },
            to: [{ email: process.env.CONTACT_EMAIL }],
            subject: `Nouveau message de ${doc.firstName} ${doc.lastName}`,
            htmlContent: `
              <h2>Nouveau message</h2>
              <p><strong>Nom:</strong> ${doc.firstName}</p>
              <p><strong>Prénom:</strong> ${doc.lastName}</p>
              <p><strong>Téléphone:</strong> ${doc.phone}</p>
              <p><strong>Email:</strong> ${doc.email}</p>
              <p><strong>Message:</strong> ${doc.message}</p>
            `,
          }),
        })
      },
    ],
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
}
