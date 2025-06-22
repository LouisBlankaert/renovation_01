import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";

const beforeAfterProjects = [
  {
    id: 1,
    title: "Rénovation d'un salon Art Déco",
    description: "Transformation complète d'un salon dans un appartement Art Déco à Bruxelles.",
    beforeImageUrl: "/images/before-after/salon-before.jpg",
    afterImageUrl: "/images/before-after/salon-after.jpg",
    details: "Restauration des moulures d'origine, installation d'un nouveau parquet en chêne, rénovation complète de l'éclairage et choix d'un mobilier contemporain qui s'harmonise avec le style Art Déco."
  },
  {
    id: 2,
    title: "Modernisation d'une cuisine",
    description: "Transformation d'une cuisine vieillissante en un espace moderne et fonctionnel.",
    beforeImageUrl: "/images/before-after/cuisine-before.jpg",
    afterImageUrl: "/images/before-after/cuisine-after.jpg",
    details: "Démolition complète de l'ancienne cuisine, création d'un îlot central, installation d'équipements haut de gamme et optimisation de l'espace de rangement."
  },
  {
    id: 3,
    title: "Réaménagement d'une salle de bain",
    description: "Transformation d'une salle de bain classique en un espace de bien-être contemporain.",
    beforeImageUrl: "/images/before-after/sdb-before.jpg",
    afterImageUrl: "/images/before-after/sdb-after.jpg",
    details: "Installation d'une douche à l'italienne, d'une baignoire îlot, d'un meuble vasque sur mesure et d'un chauffage au sol pour plus de confort."
  },
  {
    id: 4,
    title: "Rénovation d'une chambre principale",
    description: "Transformation d'une chambre défraîchie en un espace de repos élégant et apaisant.",
    beforeImageUrl: "/images/before-after/chambre-before.jpg",
    afterImageUrl: "/images/before-after/chambre-after.jpg",
    details: "Création d'un dressing sur mesure, installation d'une tête de lit capitonnée, rénovation du parquet et choix d'une palette de couleurs apaisantes."
  },
];

export default function AvantApres() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">Avant / Après</h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Découvrez les transformations spectaculaires que nous avons réalisées pour nos clients.
              </p>
            </div>
            
            <div className="mx-auto mt-16 space-y-20 lg:mt-20 lg:space-y-32">
              {beforeAfterProjects.map((project) => (
                <section key={project.id} className="relative">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:col-start-1">
                      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl font-playfair">{project.title}</h2>
                      <p className="mt-3 text-lg text-gray-600">{project.description}</p>
                      
                      <div className="mt-12 space-y-12">
                        <div className="relative">
                          <h3 className="text-xl font-semibold text-gray-900">Avant</h3>
                          <div className="mt-3 aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                              src={project.beforeImageUrl}
                              alt={`Avant - ${project.title}`}
                              width={800}
                              height={600}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="relative">
                          <h3 className="text-xl font-semibold text-gray-900">Après</h3>
                          <div className="mt-3 aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                              src={project.afterImageUrl}
                              alt={`Après - ${project.title}`}
                              width={800}
                              height={600}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12 lg:col-start-2 lg:mt-0">
                      <div className="rounded-lg bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">Détails de la transformation</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">{project.details}</p>
                        
                        <div className="mt-8 border-t border-gray-200 pt-8">
                          <h4 className="text-base font-semibold text-gray-900">Les points clés de cette rénovation</h4>
                          <ul role="list" className="mt-4 space-y-2">
                            <li className="flex gap-x-3">
                              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">Respect du budget initial</span>
                            </li>
                            <li className="flex gap-x-3">
                              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">Délais respectés</span>
                            </li>
                            <li className="flex gap-x-3">
                              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">Matériaux de qualité</span>
                            </li>
                            <li className="flex gap-x-3">
                              <svg className="h-6 w-5 flex-none text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-600">Satisfaction client</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
