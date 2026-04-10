import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')

  return NextResponse.json({
    received: secret,
    env: process.env.REVALIDATE_SECRET,
  })
}
