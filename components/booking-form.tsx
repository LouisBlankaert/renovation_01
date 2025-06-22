"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    callType: "video", // Par défaut "video"
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // États pour gérer les créneaux disponibles
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [minDate] = useState(() => {
    // Date minimum = aujourd'hui
    const today = new Date();
    return format(today, 'yyyy-MM-dd');
  });
  
  // État pour stocker la date formatée en français
  const [formattedDate, setFormattedDate] = useState<string>("");
  
  // Mettre à jour la date formatée lorsque la date change
  useEffect(() => {
    if (formData.date) {
      const date = new Date(formData.date);
      setFormattedDate(format(date, 'EEEE d MMMM yyyy', { locale: fr }));
    } else {
      setFormattedDate("");
    }
  }, [formData.date]);
  
  // Fonction pour charger les créneaux disponibles lorsque l'utilisateur sélectionne une date
  const fetchAvailableSlots = async (selectedDate: string) => {
    if (!selectedDate) return;
    
    setIsLoadingSlots(true);
    try {
      const response = await fetch(`/api/bookings/available-slots?date=${selectedDate}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des créneaux disponibles');
      }
      
      const data = await response.json();
      setAvailableSlots(data.availableSlots || []);
    } catch (err) {
      console.error('Erreur:', err);
      setError('Impossible de charger les créneaux disponibles');
      setAvailableSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Si la date change, récupérer les créneaux disponibles
    if (name === 'date' && value) {
      fetchAvailableSlots(value);
      // Réinitialiser l'heure sélectionnée
      setFormData(prev => ({
        ...prev,
        [name]: value,
        time: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Validation basique
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.date || !formData.time) {
        throw new Error("Veuillez remplir tous les champs obligatoires.");
      }
      
      // Envoyer les données à l'API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la réservation.');
      }
      
      // Réservation réussie
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        callType: "video",
        message: "",
      });
      
      // Réinitialiser après 5 secondes
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error('Erreur lors de la réservation:', err);
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (formSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <svg className="mx-auto h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="mt-3 text-lg font-medium text-green-800">Réservation confirmée !</h3>
        <p className="mt-2 text-sm text-green-600">
          Votre demande de consultation a bien été enregistrée. Nous vous contacterons très prochainement pour confirmer votre rendez-vous.
        </p>
        <div className="mt-4">
          <Link href="/" className="text-sm font-medium text-green-700 hover:text-green-500">
            Retour à l&apos;accueil <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom *</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom *</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>
        
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date souhaitée *</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            min={minDate}
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
          {formattedDate && (
            <p className="mt-1 text-sm text-gray-500 italic">
              {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Heure souhaitée *</label>
          {formData.date ? (
            isLoadingSlots ? (
              <div className="mt-1 flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-800 mr-2"></div>
                <span className="text-sm text-gray-500">Chargement des créneaux disponibles...</span>
              </div>
            ) : availableSlots.length > 0 ? (
              <select
                name="time"
                id="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              >
                <option value="">Sélectionnez un créneau</option>
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            ) : (
              <div className="mt-1">
                <p className="text-sm text-red-600">Aucun créneau disponible à cette date. Veuillez sélectionner une autre date.</p>
                <select
                  name="time"
                  id="time"
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
                >
                  <option value="">Aucun créneau disponible</option>
                </select>
              </div>
            )
          ) : (
            <div className="mt-1">
              <p className="text-sm text-gray-500">Veuillez d'abord sélectionner une date</p>
              <select
                name="time"
                id="time"
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm"
              >
                <option value="">Sélectionnez d'abord une date</option>
              </select>
            </div>
          )}
        </div>
        
        <div className="sm:col-span-2">
          <label htmlFor="callType" className="block text-sm font-medium text-gray-700">Type d&apos;appel *</label>
          <select
            name="callType"
            id="callType"
            required
            value={formData.callType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="video">Visioconférence</option>
            <option value="phone">Appel téléphonique</option>
          </select>
        </div>
        
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (facultatif)</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Décrivez brièvement votre projet ou vos questions..."
          />
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Traitement en cours...' : 'Réserver ma consultation'}
        </button>
      </div>
    </form>
  );
}
