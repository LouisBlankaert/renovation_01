import Link from "next/link";

// Composant CTA pour la réservation d'appel
export function CallBookingCTA() {
  return (
    <div className="bg-green-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
              Réservez votre consultation gratuite avec un expert
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discutez de votre projet avec l&apos;un de nos architectes d&apos;intérieur. 
              Nous vous aiderons à clarifier vos idées et à définir les prochaines étapes.
            </p>
          </div>
          
          <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-semibold text-gray-900">Pourquoi réserver un appel ?</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">Consultation personnalisée avec un expert</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">Estimation budgétaire préliminaire</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">Conseils professionnels adaptés à votre projet</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">Sans engagement et totalement gratuit</p>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 md:p-12 bg-green-800 text-white">
                <h3 className="text-xl font-semibold">Réservez votre créneau</h3>
                <p className="mt-2 text-green-100">
                  Choisissez le moment qui vous convient le mieux pour un appel de 30 minutes avec l&apos;un de nos experts.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/reserver-appel" 
                    className="block w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-green-800 shadow-sm hover:bg-gray-100"
                  >
                    Réserver mon appel maintenant
                  </Link>
                  <p className="mt-4 text-sm text-green-100 text-center">
                    Ou appelez-nous directement au <span className="font-semibold">+32 2 123 45 67</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
