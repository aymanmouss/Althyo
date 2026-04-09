import { z } from 'zod'

export const contactSchema = z.object({
  firstName: z.string().min(2, 'Prénom requis'),
  lastName: z.string().min(2, 'Nom requis'),
  phone: z.string().min(8, 'Numéro invalide'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Message trop court'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' }),
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>
