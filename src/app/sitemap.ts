import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'pages',
    limit: 100,
    select: { slug: true, updatedAt: true },
  })

  const dynamicPages: MetadataRoute.Sitemap = docs
    .filter((p) => p.slug && p.slug !== 'home')
    .map((p) => ({
      url: `https://althyo.fr/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  return [
    {
      url: 'https://althyo.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://althyo.fr/mentions-legales',
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://althyo.fr/politique-de-confidentialite',
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...dynamicPages,
  ]
}
