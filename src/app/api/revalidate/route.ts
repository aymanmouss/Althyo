import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const secret = req.headers.get('x-revalidate-secret')

  // Ensure env exists (avoids undefined comparison issues)
  if (!process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: 'Server misconfigured: missing REVALIDATE_SECRET' },
      { status: 500 },
    )
  }

  // Validate secret
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    revalidatePath('/')

    return NextResponse.json({
      revalidated: true,
      path: '/',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        revalidated: false,
        error: 'Error revalidating root',
      },
      { status: 500 },
    )
  }
}
