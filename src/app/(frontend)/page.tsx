import { getPayload } from 'payload'
import config from '@/payload.config'
import { blockComponents } from '@/blocks'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    limit: 1,
  })
  const page = docs[0]

  return (
    <div>
      {page?.layout?.map((block, i) => {
        const Component = blockComponents[block.blockType]
        if (!Component) return null
        return <Component key={i} {...block} />
      })}
    </div>
  )
}
