import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Fragment } from 'react/jsx-runtime'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const getPage = cache(async (slug: string) => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] ?? null
})

export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    limit: 100,
  })
  return docs.filter((page) => page.slug !== 'home').map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)
  const meta = page?.meta
  const imageUrl = typeof meta?.image === 'object' ? meta.image?.url : undefined
  const url = `https://althyo.fr/${slug}`

  return {
    title: meta?.title ?? 'Althyo — Agence Développement Web & Digital',
    description: meta?.description ?? 'Agence spécialisée en développement web sur-mesure.',
    metadataBase: new URL('https://althyo.fr'),
    alternates: { canonical: url },
    openGraph: {
      title: meta?.title ?? 'Althyo — Agence Développement Web & Digital',
      description: meta?.description ?? 'Agence spécialisée en développement web sur-mesure.',
      url,
      siteName: 'Althyo',
      locale: 'fr_FR',
      type: 'website',
      ...(imageUrl && {
        images: [{ url: imageUrl, width: 1200, height: 630, alt: meta?.title ?? 'Althyo' }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta?.title ?? 'Althyo — Agence Web & Solutions Digitales',
      description:
        meta?.description ?? 'Althyo fusionne créativité et technologie pour les TPE & PME.',
      ...(imageUrl && { images: [imageUrl] }),
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) notFound()

  return (
    <Fragment>
      <RenderBlocks blocks={page?.layout ?? []} />
    </Fragment>
  )
}
