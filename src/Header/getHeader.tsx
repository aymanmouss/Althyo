import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function getHeader() {
  const payload = await getPayload({ config })

  const header = await payload.findGlobal({
    slug: 'header',
    depth: 1,
  })
  return header
}
