import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'Hello from API',
    timestamp: new Date().toISOString(),
    serverTime: new Date().toLocaleString()
  }

  return NextResponse.json(data)
}
