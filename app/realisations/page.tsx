import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Rénovation complète d'un appartement Art Déco",
    description: "Transformation complète d'un appartement de style Art Déco à Bruxelles, alliant modernité et respect du patrimoine architectural.",
    imageUrl: "/images/projects/project-1.jpg",
    href: "/realisations/renovation-appartement-art-deco",
    location: "Bruxelles Centre",
    year: "2024",
    details: "Rénovation complète incluant la restauration des moulures d'origine, l'installation d'une cuisine moderne et la réorganisation des espaces de vie pour plus de luminosité.",
  },
  {
    id: 2,
    title: "Réhabilitation d'une villa contemporaine",
    description: "Réhabilitation complète d'une villa contemporaine avec une attention particulière aux matériaux écologiques et à l'efficacité énergétique.",
    imageUrl: "/images/projects/project-2.jpg",
    href: "/realisations/rehabilitation-villa-contemporaine",
    location: "Uccle",
    year: "2023",
    details: "Réhabilitation énergétique complète avec installation de panneaux solaires, pompe à chaleur et isolation renforcée. Réaménagement des espaces intérieurs pour créer une continuité entre l'intérieur et l'extérieur.",
  },
  {
    id: 3,
    title: "Rénovation d'une maison de maître",
    description: "Rénovation complète d'une maison de maître du 19ème siècle, préservant les éléments d'origine tout en apportant confort et modernité.",
    imageUrl: "/images/projects/project-3.jpg",
    href: "/realisations/renovation-maison-maitre",
    location: "Etterbeek",
    year: "2023",
    details: "Restauration des éléments architecturaux d'origine (parquets, cheminées, moulures) et modernisation des installations techniques. Création d'une extension contemporaine à l'arrière de la maison.",
  },
  {
    id: 4,
    title: "Architecture d'intérieur d'un restaurant éco-responsable",
    description: "Conception et aménagement d'un restaurant éco-responsable, avec des matériaux durables et un design inspiré de la nature.",
    imageUrl: "/images/projects/project-4.jpg",
    href: "/realisations/restaurant-eco-responsable",
    location: "Saint-Gilles",
    year: "2024",
    details: "Aménagement complet d'un restaurant de 120m² avec une attention particulière aux matériaux durables et recyclés. Création d'un jardin intérieur et d'une cuisine ouverte.",
  },
  {
    id: 5,
    title: "Rénovation d'une maison 4 façades",
    description: "Transformation complète d'une maison 4 façades des années 70 pour lui donner un style contemporain et améliorer ses performances énergétiques.",
    imageUrl: "/images/projects/project-5.jpg",
    href: "/realisations/renovation-maison-4-facades",
    location: "Woluwe-Saint-Pierre",
    year: "2022",
    details: "Rénovation énergétique complète et transformation des espaces intérieurs pour créer un grand espace de vie ouvert. Création d'une extension pour agrandir la cuisine et la salle à manger.",
  },
  {
    id: 6,
    title: "Rénovation intérieure d'une maison de maître",
    description: "Rénovation intérieure d'une maison de maître à Bruxelles, avec une attention particulière aux détails et aux finitions haut de gamme.",
    imageUrl: "/images/projects/project-6.jpg",
    href: "/realisations/renovation-interieure-maison-maitre",
    location: "Ixelles",
    year: "2023",
    details: "Rénovation complète des espaces intérieurs avec restauration des éléments d'origine et création d'une salle de bain luxueuse. Installation d'un système domotique pour contrôler l'éclairage, le chauffage et les volets.",
  },
];

export default function Realisations() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">Nos réalisations</h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Découvrez nos projets récents qui illustrent notre savoir-faire et notre approche créative en matière d&apos;architecture d&apos;intérieur et de décoration.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.id} className="flex flex-col items-start">
                  <div className="relative w-full">
                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-0 right-0 bg-white px-2 py-1 m-2 rounded text-sm font-medium text-gray-700">
                      {project.year}
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-4 flex items-center gap-x-4 text-xs">
                      <div className="text-gray-500">{project.location}</div>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={project.href}>
                          <span className="absolute inset-0" />
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{project.description}</p>
                      <p className="mt-3 text-sm leading-6 text-gray-600">{project.details}</p>
                    </div>
                    <div className="mt-8">
                      <Link
                        href={project.href}
                        className="text-sm font-semibold leading-6 text-green-800"
                      >
                        Voir le projet <span aria-hidden="true">→</span>
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
