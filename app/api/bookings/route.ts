import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/bookings - Récupérer toutes les réservations
export async function GET() {
  try {
    const bookings = await prisma.callBooking.findMany({
      orderBy: {
        date: 'asc',
      },
    });
    
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

// POST /api/bookings - Créer une nouvelle réservation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation des données
    const { firstName, lastName, email, phone, date, time, callType, message } = body;
    
    if (!firstName || !lastName || !email || !date || !time || !callType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Création de la réservation
    const booking = await prisma.callBooking.create({
      data: {
        firstName,
        lastName,
        email,
        phone: phone || '',
        date: new Date(date),
        time,
        callType,
        message: message || '',
      },
    });
    
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
