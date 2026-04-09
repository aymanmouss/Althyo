// components/ContactForm.tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormData, contactSchema } from '@/lib/validators/contact'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    const res = await fetch('/api/contact-submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="firstName">Prénom</label>
          <input
            id="firstName"
            {...register('firstName')}
            placeholder="John"
            className="border rounded-md px-3 py-2"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="lastName">Nom</label>
          <input
            id="lastName"
            {...register('lastName')}
            placeholder="Doe"
            className="border rounded-md px-3 py-2"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone">Téléphone</label>
        <input
          id="phone"
          {...register('phone')}
          placeholder="+33 6 00 00 00 00"
          className="border rounded-md px-3 py-2"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder="john@example.com"
          className="border rounded-md px-3 py-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          placeholder="Votre message..."
          className="border rounded-md px-3 py-2 resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {isSubmitSuccessful && <p className="text-green-500 text-sm">Message envoyé avec succès !</p>}

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          {...register('consent')}
          className="mt-1 h-4 w-4 rounded border-gray-300 accent-primary cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-gray-600 leading-snug cursor-pointer">
          J&apos;accepte la{' '}
          <a
            href="/politique-de-confidentialite"
            className="underline underline-offset-2 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de confidentialité
          </a>{' '}
          et consens au traitement de mes données personnelles pour être recontacté(e).
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary text-primary-foreground rounded-md px-4 py-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  )
}
