// components/ContactForm.tsx
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormData, contactSchema } from '@/lib/validators/contact'
import type { Page } from '@/payload-types'

type Props = Extract<NonNullable<Page['layout']>[number], { blockType: 'contact' }>

export function ContactForm({ title, description, cta }: Props) {
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
    <section className="py-15 bg-[#efefef4a]" id="contact">
      <div className="container-site flex flex-col items-center gap-5">
        <div className="w-full rounded-xl py-10 flex flex-col gap-5 items-center justify-center">
          {title && (
            <h2 className="text-center text-4xl md:text-5xl uppercase text-balance font-medium">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-center text-lg md:text-xl text-balance max-w-3xl text-gray-600">
              {description}
            </p>
          )}

          <div className="bg-white p-8 md:p-12 rounded-xl max-w-2xl w-full mt-10 shadow-lg border border-[#efefef]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-500 mb-2 font-medium">Prénom</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Jean"
                    {...register('firstName')}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-1 focus:ring-2 focus:ring-blue-3/20 transition-all"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-500 mb-2 font-medium">Nom</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Dupont"
                    {...register('lastName')}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-1 focus:ring-2 focus:ring-blue-3/20 transition-all"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-sm text-gray-500 mb-2 font-medium">Adresse e-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@email.com"
                  {...register('email')}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-1 focus:ring-2 focus:ring-blue-3/20 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block text-sm text-gray-500 mb-2 font-medium">Numéro de téléphone</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  {...register('phone')}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-1 focus:ring-2 focus:ring-blue-3/20 transition-all"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-sm text-gray-500 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Décrivez votre projet ou posez votre question..."
                  {...register('message')}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-lg text-sm outline-none resize-y focus:border-blue-1 focus:ring-2 focus:ring-blue-3/20 transition-all"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-2">
                  <input
                    id="consent"
                    type="checkbox"
                    {...register('consent')}
                    className="w-5 h-5 mt-0.5 cursor-pointer accent-blue-1 rounded-[5px] text-gray-300"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-500 cursor-pointer leading-snug">
                    J&apos;accepte la{' '}
                    <a
                      href="/politique-de-confidentialite"
                      className="underline hover:text-blue-1 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      politique de confidentialité
                    </a>{' '}
                    et consens au traitement de mes données.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-xs mt-1">{errors.consent.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-linear-to-br from-blue-1 to-blue-2 disabled:opacity-50 text-white rounded-lg text-sm font-medium cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(18,88,222,0.3)]"
              >
                {isSubmitting ? 'Envoi...' : cta || 'Envoyer le message'}
              </button>

              {isSubmitSuccessful && (
                <p className="text-green-600 text-sm mt-4 text-center font-medium">
                  Message envoyé avec succès ! Nous vous recontacterons rapidement.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
