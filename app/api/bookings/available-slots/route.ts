import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

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

// Durée d'un rendez-vous en minutes
const APPOINTMENT_DURATION = 60;

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
    
    console.log('Date paramètre reçue:', dateParam);
    
    // Formatage de la date pour la requête Prisma
    // Extraire année, mois, jour de la date (format YYYY-MM-DD)
    const [year, month, day] = dateParam.split('-').map(Number);
    
    // Vérifier que les composants de la date sont valides
    if (!year || !month || !day || isNaN(year) || isNaN(month) || isNaN(day)) {
      console.log('Format de date invalide:', { year, month, day });
      return NextResponse.json(
        { error: 'Format de date invalide. Utilisez YYYY-MM-DD.' },
        { status: 400 }
      );
    }
    
    // Créer une date UTC pour éviter les problèmes de fuseau horaire
    const searchDate = new Date(Date.UTC(year, month - 1, day));
    console.log('Date de recherche:', searchDate.toISOString());
    
    // Créer les dates de début et de fin pour la requête
    const startOfDay = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
    const endOfDay = new Date(Date.UTC(year, month - 1, day, 23, 59, 59));
    
    console.log('Début de journée:', startOfDay.toISOString());
    console.log('Fin de journée:', endOfDay.toISOString());
    
    // Récupérer les réservations existantes pour cette date
    // Utiliser une plage de dates pour éviter les problèmes de fuseau horaire
    const existingBookings = await prisma.callBooking.findMany({
      where: {
        date: {
          gte: startOfDay,
          lte: endOfDay
        },
        status: {
          in: ['pending', 'confirmed'] // Ne pas prendre en compte les annulés ou terminés
        }
      },
      select: {
        time: true
      }
    });
    
    console.log('Réservations trouvées:', existingBookings.length);
    
    // Extraire les heures déjà réservées
    const bookedTimes = existingBookings.map((booking: { time: string }) => booking.time);
    console.log('Heures réservées:', bookedTimes);
    
    // Calculer les créneaux disponibles
    const availableSlots = calculateAvailableSlots(bookedTimes);
    console.log('Créneaux disponibles:', availableSlots);
    
    return NextResponse.json({
      date: dateParam,
      availableSlots
    });
  } catch (error) {
    console.error('Error fetching available slots:', error);
    // Ajouter plus de détails sur l'erreur
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue';
    const errorStack = error instanceof Error ? error.stack : 'Pas de stack trace';
    console.error('Détails de l\'erreur:', { message: errorMessage, stack: errorStack });
    
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des créneaux disponibles', details: errorMessage },
      { status: 500 }
    );
  }
}

// Fonction pour calculer les créneaux disponibles
function calculateAvailableSlots(bookedTimes: string[]): string[] {
  // Convertir les heures réservées en ensemble pour une recherche plus rapide
  const bookedTimesSet = new Set(bookedTimes);
  
  // Filtrer les heures de travail pour ne garder que celles qui ne sont pas réservées
  const availableSlots = WORKING_HOURS.filter(time => {
    // Vérifier si ce créneau est déjà réservé
    if (bookedTimesSet.has(time)) {
      return false;
    }
    
    // Vérifier si ce créneau chevauche un rendez-vous existant
    // (pour les rendez-vous de plus de 30 minutes)
    const timeMinutes = convertTimeToMinutes(time);
    
    for (const bookedTime of bookedTimes) {
      const bookedTimeMinutes = convertTimeToMinutes(bookedTime);
      
      // Si le début du créneau est pendant un rendez-vous existant
      if (timeMinutes >= bookedTimeMinutes && 
          timeMinutes < bookedTimeMinutes + APPOINTMENT_DURATION) {
        return false;
      }
      
      // Si la fin du créneau est pendant un rendez-vous existant
      if (timeMinutes + 30 > bookedTimeMinutes && 
          timeMinutes + 30 <= bookedTimeMinutes + APPOINTMENT_DURATION) {
        return false;
      }
    }
    
    return true;
  });
  
  return availableSlots;
}

// Fonction pour convertir une heure (format "HH:MM") en minutes depuis minuit
function convertTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}
