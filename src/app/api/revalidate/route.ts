import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  console.log('Secret reçu:', secret)
  console.log('Secret attendu:', process.env.REVALIDATE_SECRET)
  console.log('Match:', secret === process.env.REVALIDATE_SECRET)

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  revalidatePath('/', 'layout')
  return NextResponse.json({ revalidated: true })
}
