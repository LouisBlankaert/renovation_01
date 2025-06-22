"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useRouter } from "next/navigation";

// Clé d'API pour l'authentification (récupérée depuis les variables d'environnement)
// Nous utilisons une valeur par défaut au cas où la variable d'environnement n'est pas définie
const API_KEY = process.env.NEXT_PUBLIC_ADMIN_API_KEY || 'renovation_secure_api_key_2025';

// Type pour les réservations
type Booking = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  date: string;
  time: string;
  callType: string;
  message: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Mot de passe d'administration - Récupéré depuis les variables d'environnement
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "renovation2025";
  
  // Fonction pour authentifier l'utilisateur
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Vérification du mot de passe d'administration
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem("adminAuthenticated", "true");
      fetchBookings();
    } else {
      setError("Mot de passe incorrect");
    }
  };

  // Vérifier si l'utilisateur est déjà authentifié
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuthenticated") === "true";
    if (isAuth) {
      setAuthenticated(true);
      fetchBookings();
    } else {
      setIsLoading(false);
    }
  }, []);

  // Récupérer les réservations
  const fetchBookings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/bookings", {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des réservations");
      }

      const data = await response.json();
      setBookings(data);
    } catch (err) {
      console.error("Erreur:", err);
      setError("Impossible de charger les réservations");
    } finally {
      setIsLoading(false);
    }
  };

  // Mettre à jour le statut d'une réservation
  const updateBookingStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/bookings?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour du statut");
      }

      // Mettre à jour l'état local
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
    } catch (err) {
      console.error("Erreur:", err);
      setError("Impossible de mettre à jour le statut");
    }
  };

  // Supprimer une réservation
  const deleteBooking = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette réservation ?")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/bookings?id=${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression");
      }

      // Mettre à jour l'état local
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== id)
      );
    } catch (err) {
      console.error("Erreur:", err);
      setError("Impossible de supprimer la réservation");
    }
  };

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    setAuthenticated(false);
  };

  // Afficher le formulaire de connexion si non authentifié
  if (!authenticated) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Administration - Connexion
            </h1>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Se connecter
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Réservations d&apos;appels</h1>
            <button
              onClick={handleLogout}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
            >
              Déconnexion
            </button>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
              <button
                className="float-right font-bold"
                onClick={() => setError(null)}
              >
                &times;
              </button>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-green-800 border-r-transparent"></div>
              <p className="mt-2">Chargement...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="bg-white shadow overflow-hidden rounded-lg p-6 text-center">
              <p>Aucune réservation trouvée.</p>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Client
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Contact
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Rendez-vous
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Statut
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date de création
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {booking.firstName} {booking.lastName}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {booking.email}
                          </div>
                          {booking.phone && (
                            <div className="text-sm text-gray-500">
                              {booking.phone}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {formatDate(booking.date)}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.time}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              booking.callType === "video"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {booking.callType === "video"
                              ? "Visioconférence"
                              : "Téléphone"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={booking.status}
                            onChange={(e) =>
                              updateBookingStatus(booking.id, e.target.value)
                            }
                            className={`text-xs font-semibold rounded px-2 py-1 border ${
                              booking.status === "pending"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                                : booking.status === "confirmed"
                                ? "bg-green-100 text-green-800 border-green-300"
                                : booking.status === "completed"
                                ? "bg-blue-100 text-blue-800 border-blue-300"
                                : "bg-red-100 text-red-800 border-red-300"
                            }`}
                          >
                            <option value="pending">En attente</option>
                            <option value="confirmed">Confirmé</option>
                            <option value="completed">Terminé</option>
                            <option value="cancelled">Annulé</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(booking.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => deleteBooking(booking.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
