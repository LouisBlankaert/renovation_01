import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API de test fonctionnelle',
    timestamp: new Date().toISOString()
  });
}
