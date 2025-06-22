import { NextRequest, NextResponse } from 'next/server';

// Définir les heures de travail disponibles (9h à 18h, par tranches de 30 minutes)
const WORKING_HOURS = [
  '09:00', '09:30', 
  '10:00', '10:30', 
  '11:00', '11:30', 
  '12:00', '12:30', 
  '13:00', '13:30', 
  '14:00', '14:30', 
  '15:00', '15:30', 
  '16:00', '16:30', 
  '17:00', '17:30'
];

// GET /api/bookings/available-slots?date=YYYY-MM-DD
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const dateParam = url.searchParams.get('date');
    
    if (!dateParam) {
      return NextResponse.json(
        { error: 'Date requise' },
        { status: 400 }
      );
    }
    
    // Retourner directement tous les créneaux disponibles sans vérifier les réservations
    // Cela nous permettra de vérifier si le problème vient de la requête Prisma
    return NextResponse.json({
      date: dateParam,
      availableSlots: WORKING_HOURS
    });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des créneaux disponibles', details: errorMessage },
      { status: 500 }
    );
  }
}
