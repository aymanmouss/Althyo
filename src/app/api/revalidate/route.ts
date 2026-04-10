import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const secret = req.headers.get('x-revalidate-secret')

  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Missing REVALIDATE_SECRET' }, { status: 500 })
  }

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  revalidatePath('/')

  return NextResponse.json({
    revalidated: true,
    path: '/',
  })
}
