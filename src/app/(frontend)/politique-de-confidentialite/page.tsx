import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Althyo — vos données, vos droits.',
  alternates: { canonical: 'https://althyo.fr/politique-de-confidentialite' },
  robots: { index: true, follow: false },
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="py-20 bg-[#efefef4a]">
      <div className="container-site">
        <h1 className="text-h3 font-heading mb-10 text-5xl text-center">
          Politique de confidentialité
        </h1>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">
            Responsable du traitement
          </h2>
          <p>Althyo — Ayman Moussa</p>
          <p>58 rue de Monceau, 75008 Paris</p>
          <p>Email : contact@althyo.fr</p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Données collectées</h2>
          <p>
            Nous collectons les données suivantes via le formulaire de contact et le calendrier de
            prise de rendez-vous :
          </p>
          <p>— Nom et prénom</p>
          <p>— Adresse email</p>
          <p>— Message et informations relatives à votre projet</p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Finalité du traitement</h2>
          <p>
            Ces données sont collectées uniquement pour répondre à vos demandes de contact et
            organiser des échanges commerciaux. Elles ne sont ni vendues, ni transmises à des tiers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de 3 ans à compter du dernier
            contact.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression
            et de portabilité de vos données. Pour exercer ces droits, contactez-nous à :
            contact@althyo.fr
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Cookies</h2>
          <p>
            Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des cookies
            techniques nécessaires au bon fonctionnement du site peuvent être déposés.
          </p>
        </section>
      </div>
    </main>
  )
}
