import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

export const revalidatePage: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context.disableRevalidate) return doc

  const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
  payload.logger.info(`Revalidating page: ${path}`)

  try {
    revalidatePath(path)
  } catch (err) {
    payload.logger.error(`Error revalidating page ${path}: ${err}`)
  }

  if (previousDoc && previousDoc.slug && previousDoc.slug !== doc.slug) {
    const previousPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`
    payload.logger.info(`Revalidating old page slug: ${previousPath}`)
    try {
      revalidatePath(previousPath)
    } catch (err) {
      payload.logger.error(`Error revalidating old page slug ${previousPath}: ${err}`)
    }
  }

  return doc
}

export const revalidateDeletePage: CollectionAfterDeleteHook = ({
  doc,
  req: { payload, context },
}) => {
  if (context.disableRevalidate) return doc

  if (doc && doc.slug) {
    const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
    payload.logger.info(`Revalidating page (deleted): ${path}`)
    try {
      revalidatePath(path)
    } catch (err) {
      payload.logger.error(`Error revalidating page ${path}: ${err}`)
    }
  }

  return doc
}
