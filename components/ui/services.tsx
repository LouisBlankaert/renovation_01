import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Architecte d'intérieur",
    description: "Conception de votre projet d'aménagement intérieur, de son étude à sa réalisation.",
    href: "/metiers/architecte-interieur",
    imageSrc: "/images/services/architecte-interieur.jpg",
  },
  {
    name: "Décorateur d'intérieur",
    description: "Conseils personnalisés pour harmoniser vos choix en matière de décoration d'intérieur : peinture, textiles, mobilier, revêtements de sol, …",
    href: "/metiers/decorateur-interieur",
    imageSrc: "/images/services/decorateur-interieur.jpg",
  },
  {
    name: "Architecture",
    description: "Conception de votre projet d'extension ou de construction, de l'étude du terrain à la réalisation de vos travaux.",
    href: "/metiers/architecture",
    imageSrc: "/images/services/architecture.jpg",
  },
  {
    name: "Architecture commerciale",
    description: "Un espace professionnel qui reflète votre activité et qui correspond à l'identité de votre entreprise ou de votre marque : bureau, boutique, restaurant, café.",
    href: "/metiers/architecture-commerciale",
    imageSrc: "/images/services/architecture-commerciale.jpg",
  },
  {
    name: "Jardinier / Architecte Paysagiste",
    description: "Vous accompagner dans la conception, la réalisation et l'entretien de votre balcon, terrasse, jardin ou espace vert intérieur.",
    href: "/metiers/jardinier-paysagiste",
    imageSrc: "/images/services/paysagiste.jpg",
  },
];

export function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">Nos métiers</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez nos différentes expertises pour vous accompagner dans tous vos projets d&apos;aménagement et de décoration.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <Link
                    href={service.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    En savoir plus
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={service.href}>
                      <span className="absolute inset-0" />
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{service.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
