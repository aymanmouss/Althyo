import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Fragment } from 'react/jsx-runtime'
import type { Metadata } from 'next'

const getHomePage = cache(async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
    depth: 3,
  })
  return docs[0]
})

// export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePage()
  const meta = page?.meta
  const fallbackTitle = 'Agence Web Immobilier & Sites Web Performants | Althyo'
  const fallbackDescription =
    'Althyo conçoit des sites web performants pour l’immobilier et les entreprises. CRM, gestion d’annonces, multidiffusion, hébergement et maintenance inclus.'
  const imageUrl =
    typeof meta?.image === 'object' ? meta.image?.url : 'https://althyo.fr/og-default.png'

  return {
    title: meta?.title ?? fallbackTitle,
    description: meta?.description ?? fallbackDescription,
    metadataBase: new URL('https://althyo.fr'),
    alternates: { canonical: 'https://althyo.fr' },
    openGraph: {
      title: meta?.title ?? fallbackTitle,
      description: meta?.description ?? fallbackDescription,
      url: 'https://althyo.fr',
      siteName: 'Althyo',
      locale: 'fr_FR',
      type: 'website',
      ...(imageUrl && {
        images: [{ url: imageUrl, width: 1200, height: 630, alt: meta?.title ?? 'Althyo' }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta?.title ?? fallbackTitle,
      description: meta?.description ?? fallbackDescription,
      ...(imageUrl && { images: [imageUrl] }),
    },
  }
}

export default async function HomePage() {
  const page = await getHomePage()

  return (
    <Fragment>
      <RenderBlocks blocks={page?.layout ?? []} />
    </Fragment>
  )
}
