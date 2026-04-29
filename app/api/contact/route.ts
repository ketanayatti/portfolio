import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // In production, forward to FastAPI backend:
    // const res = await fetch(process.env.API_URL + '/api/contact', { ... })

    // For now, log and return success
    console.log('Contact form submission:', { name, email, message })

    return NextResponse.json({ success: true, message: 'Message received!' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
