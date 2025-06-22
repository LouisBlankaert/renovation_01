import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const services = [
  {
    id: 1,
    title: "Conception architecturale",
    description: "De l'esquisse aux plans détaillés, nous concevons votre projet architectural en tenant compte de vos besoins, des contraintes techniques et des réglementations en vigueur.",
    imageUrl: "/images/services/architecture.jpg",
    features: [
      "Plans et coupes",
      "Modélisation 3D",
      "Dossier de permis d'urbanisme",
      "Études de faisabilité",
      "Optimisation des espaces",
    ],
  },
  {
    id: 2,
    title: "Architecture d'intérieur",
    description: "Nous repensons vos espaces intérieurs pour les rendre plus fonctionnels, esthétiques et adaptés à votre mode de vie ou à votre activité professionnelle.",
    imageUrl: "/images/services/architecte-interieur.jpg",
    features: [
      "Space planning",
      "Conception de mobilier sur mesure",
      "Choix des matériaux et finitions",
      "Études d'éclairage",
      "Plans techniques détaillés",
    ],
  },
  {
    id: 3,
    title: "Décoration d'intérieur",
    description: "Nous créons des ambiances personnalisées qui reflètent votre personnalité ou l'identité de votre marque, en sélectionnant mobilier, couleurs, textiles et accessoires.",
    imageUrl: "/images/services/decorateur-interieur.jpg",
    features: [
      "Planches d'ambiance",
      "Sélection de mobilier et accessoires",
      "Conseils en colorimétrie",
      "Choix des textiles et revêtements",
      "Mise en place et styling",
    ],
  },
  {
    id: 4,
    title: "Suivi de chantier",
    description: "Nous coordonnons et supervisons les différents corps de métier pour garantir la bonne exécution des travaux, le respect des délais et la qualité des finitions.",
    imageUrl: "/images/projects/project-1.jpg",
    features: [
      "Planification des interventions",
      "Coordination des artisans",
      "Contrôle qualité",
      "Gestion des imprévus",
      "Réception des travaux",
    ],
  },
  {
    id: 5,
    title: "Aménagement paysager",
    description: "Nous concevons et réalisons vos espaces extérieurs (jardins, terrasses, balcons) pour créer un prolongement harmonieux de votre intérieur.",
    imageUrl: "/images/services/paysagiste.jpg",
    features: [
      "Conception de jardins et terrasses",
      "Sélection des végétaux",
      "Plans d'aménagement extérieur",
      "Éclairage paysager",
      "Mobilier d'extérieur",
    ],
  },
  {
    id: 6,
    title: "Home staging",
    description: "Nous valorisons votre bien immobilier pour la vente ou la location en créant une ambiance attractive qui séduira les potentiels acquéreurs ou locataires.",
    imageUrl: "/images/services/architecture-commerciale.jpg",
    features: [
      "Mise en valeur des atouts du bien",
      "Réagencement du mobilier existant",
      "Conseils de dépersonnalisation",
      "Accessoirisation temporaire",
      "Photographie professionnelle",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
                Nos prestations
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Découvrez l&apos;ensemble des services que nous proposons pour transformer vos espaces
                et concrétiser vos projets d&apos;architecture et de décoration.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {services.map((service) => (
                  <div key={service.id} className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="relative h-64 overflow-hidden rounded-t-2xl">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                          {service.description}
                        </p>
                        <ul role="list" className="mt-8 space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                              <svg
                                className="h-6 w-5 flex-none text-green-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm leading-6 text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg leading-8 text-gray-600">
                Vous ne trouvez pas ce que vous cherchez ? Nous proposons également des prestations sur mesure.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-green-600"
                >
                  Contactez-nous pour discuter de votre projet
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
                Notre processus de travail
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Une approche méthodique et personnalisée pour mener à bien votre projet, de la conception à la réalisation.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-white">
                    <span className="text-lg font-semibold">1</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Consultation initiale</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Nous prenons le temps de vous écouter pour comprendre vos besoins, vos goûts et vos contraintes.
                    Cette première étape est essentielle pour établir un cahier des charges précis.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-white">
                    <span className="text-lg font-semibold">2</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Conception et proposition</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Nous élaborons des propositions créatives adaptées à votre projet, incluant plans, esquisses, 
                    sélection de matériaux et estimation budgétaire.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-800 text-white">
                    <span className="text-lg font-semibold">3</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Réalisation et suivi</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Nous coordonnons les différents intervenants et assurons le suivi du chantier jusqu&apos;à la livraison finale,
                    en veillant au respect des délais et de la qualité d&apos;exécution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
