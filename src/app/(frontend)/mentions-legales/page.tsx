// app/mentions-legales/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Althyo',
  description: 'Mentions légales du site Althyo.',
  alternates: { canonical: 'https://althyo.fr/mentions-legales' },
}

export default function MentionsLegales() {
  return (
    <main className="  py-20 bg-[#efefef4a]">
      <div className="container-site">
        <h1 className="text-h3 font-heading mb-10 text-5xl text-center">Mentions légales</h1>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Éditeur du site</h2>
          <p>Althyo</p>
          <p>Forme juridique : Auto-entrepreneur</p>
          <p>SIRET : 789 327 988 00034</p>
          <p>Adresse : 58 rue de Monceau, 75008 Paris</p>
          <p>Email : contact@althyo.fr</p>
          <p>Directeur de publication : Ayman Moussa</p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Hébergement</h2>
          <p>Ce site est hébergé par :</p>
          <p>Althyo — infrastructure hébergée chez Hetzner Online GmbH</p>
          <p>Industriestr. 25, 91710 Gunzenhausen, Allemagne</p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété
            exclusive d'Althyo et est protégé par les lois françaises et internationales relatives à
            la propriété intellectuelle.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-body-headline font-heading mb-3 text-2xl">Données personnelles</h2>
          <p>
            Les informations collectées via le formulaire de contact sont utilisées uniquement pour
            répondre à vos demandes. Conformément au RGPD, vous disposez d'un droit d'accès, de
            rectification et de suppression de vos données en contactant : contact@althyo.fr
          </p>
        </section>
      </div>
    </main>
  )
}
