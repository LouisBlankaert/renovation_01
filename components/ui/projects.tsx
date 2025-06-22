import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Rénovation complète d'un appartement Art Déco",
    description: "Transformation complète d'un appartement de style Art Déco à Bruxelles, alliant modernité et respect du patrimoine architectural.",
    imageUrl: "/images/projects/project-5.jpg",
    href: "/realisations/renovation-appartement-art-deco",
  },
  {
    id: 2,
    title: "Réhabilitation d'une villa contemporaine",
    description: "Réhabilitation complète d'une villa contemporaine avec une attention particulière aux matériaux écologiques et à l'efficacité énergétique.",
    imageUrl: "/images/projects/project-2.jpg",
    href: "/realisations/rehabilitation-villa-contemporaine",
  },
  {
    id: 3,
    title: "Rénovation d'une maison de maître",
    description: "Rénovation complète d'une maison de maître du 19ème siècle, préservant les éléments d'origine tout en apportant confort et modernité.",
    imageUrl: "/images/projects/project-3.jpg",
    href: "/realisations/renovation-maison-maitre",
  },
  {
    id: 4,
    title: "Architecture d'intérieur d'un restaurant éco-responsable",
    description: "Conception et aménagement d'un restaurant éco-responsable, avec des matériaux durables et un design inspiré de la nature.",
    imageUrl: "/images/projects/project-4.jpg",
    href: "/realisations/restaurant-eco-responsable",
  },
];

export function Projects() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">Nos réalisations</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez quelques-uns de nos projets récents qui illustrent notre savoir-faire et notre approche créative.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="flex items-center gap-x-4">
                  <div className="flex gap-x-2.5">
                    <div className="flex-none rounded-full bg-green-800 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                    Projet récent
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={project.href}>
                  <span className="absolute inset-0" />
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-200">{project.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/realisations"
            className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-green-600"
          >
            Voir toutes nos réalisations
          </Link>
        </div>
      </div>
    </div>
  );
}
