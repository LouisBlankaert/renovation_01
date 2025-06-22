import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Architecte d'intérieur",
    description: "Conception de votre projet d'aménagement intérieur, de son étude à sa réalisation, par un architecte d'intérieur à Bruxelles.",
    href: "/metiers/architecte-interieur",
    imageSrc: "/images/services/architecte-interieur.jpg",
    longDescription: "Notre équipe d'architectes d'intérieur vous accompagne dans la conception et la réalisation de votre projet d'aménagement intérieur. Nous prenons en compte vos besoins, vos goûts et votre budget pour créer un espace qui vous ressemble et qui répond à vos attentes.",
  },
  {
    name: "Décorateur d'intérieur",
    description: "Conseils personnalisés pour harmoniser vos choix en matière de décoration d'intérieur à Bruxelles : peinture, textiles, mobilier, revêtements de sol, …",
    href: "/metiers/decorateur-interieur",
    imageSrc: "/images/services/decorateur-interieur.jpg",
    longDescription: "Nos décorateurs d'intérieur vous conseillent sur les couleurs, les matériaux, les textiles, le mobilier et les accessoires pour créer une ambiance harmonieuse et personnalisée dans votre intérieur.",
  },
  {
    name: "Architecture",
    description: "Conception de votre projet d'extension ou de construction, de l'étude du terrain à la réalisation de vos travaux.",
    href: "/metiers/architecture",
    imageSrc: "/images/services/architecture.jpg",
    longDescription: "Nos architectes vous accompagnent dans la conception et la réalisation de votre projet d'extension ou de construction neuve. Nous prenons en charge toutes les étapes du projet, de l'étude de faisabilité à la réception des travaux.",
  },
  {
    name: "Architecture commerciale",
    description: "Un espace professionnel qui reflète votre activité et qui correspond à l'identité de votre entreprise ou de votre marque : bureau, boutique, restaurant, café.",
    href: "/metiers/architecture-commerciale",
    imageSrc: "/images/services/architecture-commerciale.jpg",
    longDescription: "Nous concevons des espaces professionnels qui reflètent l'identité de votre entreprise et qui répondent aux besoins spécifiques de votre activité. Bureaux, boutiques, restaurants, cafés... nous créons des lieux uniques qui valorisent votre marque.",
  },
  {
    name: "Jardinier / Architecte Paysagiste",
    description: "Vous accompagner dans la conception, la réalisation et l'entretien de votre balcon, terrasse, jardin ou espace vert intérieur.",
    href: "/metiers/jardinier-paysagiste",
    imageSrc: "/images/services/paysagiste.jpg",
    longDescription: "Nos paysagistes conçoivent et réalisent des espaces extérieurs qui prolongent votre intérieur. Balcons, terrasses, jardins... nous créons des espaces verts harmonieux et adaptés à votre mode de vie.",
  },
];

export default function Metiers() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">Nos métiers</h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Découvrez nos différentes expertises pour vous accompagner dans tous vos projets d&apos;aménagement et de décoration.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <article key={service.name} className="flex flex-col items-start">
                  <div className="relative w-full">
                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                      <Image
                        src={service.imageSrc}
                        alt={service.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <div className="group relative">
                      <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={service.href}>
                          <span className="absolute inset-0" />
                          {service.name}
                        </Link>
                      </h3>
                      <p className="mt-5 text-base leading-6 text-gray-600">{service.description}</p>
                      <p className="mt-3 text-base leading-6 text-gray-600">{service.longDescription}</p>
                    </div>
                    <div className="mt-8">
                      <Link
                        href={service.href}
                        className="rounded-md bg-green-800 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-green-600"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
