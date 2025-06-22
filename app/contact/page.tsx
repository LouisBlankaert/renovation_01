"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  // Récupérer les paramètres d'URL pour voir si on vient du CTA de réservation d'appel
  const isClient = typeof window !== 'undefined';
  const urlParams = isClient ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const serviceParam = urlParams.get('service');
  const isCallBooking = serviceParam === 'appel-consultation';
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    projectType: "",
    callPreference: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Déterminer quel endpoint utiliser en fonction du type de formulaire
      const endpoint = isCallBooking ? '/api/bookings' : '/api/contact';
      
      // Préparer les données à envoyer
      const dataToSend = isCallBooking 
        ? {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            date: formData.preferredDate,
            time: formData.preferredTime,
            callType: formData.callPreference,
            message: formData.message
          }
        : {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            projectType: formData.projectType
          };
      
      // Envoyer les données à l'API
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      
      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de l\'envoi du formulaire.');
      }
      
      // Réinitialiser le formulaire après soumission réussie
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        projectType: "",
        callPreference: "",
        preferredDate: "",
        preferredTime: "",
      });
      
      // Réinitialiser l'état après 5 secondes
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Erreur lors de la soumission du formulaire:', err);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
                {isCallBooking ? "Réservez votre appel de consultation" : "Contactez-nous"}
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {isCallBooking 
                  ? "Choisissez un créneau qui vous convient pour discuter de votre projet avec l'un de nos experts." 
                  : "Vous avez un projet de rénovation ou d'aménagement ? N'hésitez pas à nous contacter pour en discuter."}
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
              <div>
                <div className="relative h-80 overflow-hidden rounded-2xl bg-gray-100 sm:h-96">
                  <Image
                    src="/images/contact-office.jpg"
                    alt="Nos bureaux"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="mt-8 text-xl font-semibold text-gray-900">Nos coordonnées</h3>
                <dl className="mt-8 space-y-6">
                  <div>
                    <dt className="text-base font-semibold text-gray-900">Adresse</dt>
                    <dd className="mt-1 text-base text-gray-700">
                      <address className="not-italic">
                        123 Rue de la Rénovation<br />
                        1000 Bruxelles<br />
                        Belgique
                      </address>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-base font-semibold text-gray-900">Téléphone</dt>
                    <dd className="mt-1 text-base text-gray-700">+32 2 123 45 67</dd>
                  </div>
                  <div>
                    <dt className="text-base font-semibold text-gray-900">Email</dt>
                    <dd className="mt-1 text-base text-gray-700">info@createurs-interieur.be</dd>
                  </div>
                  <div>
                    <dt className="text-base font-semibold text-gray-900">Horaires</dt>
                    <dd className="mt-1 text-base text-gray-700">
                      Lundi - Vendredi: 9h00 - 18h00<br />
                      Samedi: Sur rendez-vous<br />
                      Dimanche: Fermé
                    </dd>
                  </div>
                </dl>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900">Comment nous trouver</h3>
                  <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.2005529001!2d4.3517359!3d50.8465573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47f4a9c884f%3A0x8fc52157a7ff7d36!2sGrand-Place%20de%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1624456789012!5m2!1sfr!2sbe" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Formulaire de contact</h3>
                {formSubmitted ? (
                  <div className="mt-8 rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">Message envoyé</h3>
                        <div className="mt-2 text-sm text-green-700">
                          <p>Merci pour votre message. Nous vous contacterons dans les plus brefs délais.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          Prénom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Nom
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Téléphone
                        </label>
                        <div className="mt-1">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                          Type de projet
                        </label>
                        <div className="mt-1">
                          <select
                            id="projectType"
                            name="projectType"
                            value={isCallBooking && !formData.projectType ? "consultation" : formData.projectType}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                          >
                            <option value="">Sélectionnez un type de projet</option>
                            <option value="consultation" selected={isCallBooking}>Consultation / Appel avec un expert</option>
                            <option value="renovation">Rénovation complète</option>
                            <option value="decoration">Décoration d&apos;intérieur</option>
                            <option value="architecture">Architecture</option>
                            <option value="commercial">Architecture commerciale</option>
                            <option value="paysagisme">Paysagisme</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      {isCallBooking && (
                        <>
                          <div className="sm:col-span-2">
                            <label htmlFor="callPreference" className="block text-sm font-medium text-gray-700">
                              Préférence d&apos;appel
                            </label>
                            <div className="mt-1">
                              <select
                                id="callPreference"
                                name="callPreference"
                                value={formData.callPreference}
                                onChange={handleChange}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                                required={isCallBooking}
                              >
                                <option value="">Choisissez votre préférence</option>
                                <option value="phone">Appel téléphonique</option>
                                <option value="video">Visioconférence</option>
                              </select>
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
                              Date souhaitée
                            </label>
                            <div className="mt-1">
                              <input
                                type="date"
                                name="preferredDate"
                                id="preferredDate"
                                value={formData.preferredDate}
                                onChange={handleChange}
                                required={isCallBooking}
                                min={new Date().toISOString().split('T')[0]}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
                              Heure souhaitée
                            </label>
                            <div className="mt-1">
                              <select
                                id="preferredTime"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                required={isCallBooking}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                              >
                                <option value="">Choisissez un créneau horaire</option>
                                <option value="9h00-10h00">9h00 - 10h00</option>
                                <option value="10h00-11h00">10h00 - 11h00</option>
                                <option value="11h00-12h00">11h00 - 12h00</option>
                                <option value="14h00-15h00">14h00 - 15h00</option>
                                <option value="15h00-16h00">15h00 - 16h00</option>
                                <option value="16h00-17h00">16h00 - 17h00</option>
                                <option value="17h00-18h00">17h00 - 18h00</option>
                              </select>
                            </div>
                          </div>
                        </>
                      )}
                      
                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          {isCallBooking ? "Sujet de la consultation" : "Message"}
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="message"
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                            placeholder={isCallBooking ? "Décrivez brièvement le sujet que vous souhaitez aborder lors de l'appel..." : "Décrivez votre projet, vos besoins et vos attentes..."}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-green-600"
                      >
                        {isCallBooking ? "Réserver mon appel" : "Envoyer"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
