import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const team = [
  {
    id: 1,
    name: "Claire Dubois",
    role: "Architecte d'intérieur",
    imageUrl: "https://placehold.co/400x400/e2e8f0/1e293b?text=Claire+D",
    bio: "Diplômée de l'École de La Cambre, Claire possède plus de 15 ans d'expérience dans la conception d'espaces résidentiels et commerciaux. Sa vision allie fonctionnalité et esthétique pour créer des intérieurs qui reflètent la personnalité de ses clients.",
  },
  {
    id: 2,
    name: "Thomas Leroy",
    role: "Architecte",
    imageUrl: "https://placehold.co/400x400/e2e8f0/1e293b?text=Thomas+L",
    bio: "Architecte DPLG, Thomas est spécialisé dans la rénovation de bâtiments anciens et la création d'extensions contemporaines. Son approche respecte le patrimoine tout en y apportant une touche de modernité.",
  },
  {
    id: 3,
    name: "Sophie Martens",
    role: "Décoratrice d'intérieur",
    imageUrl: "https://placehold.co/400x400/e2e8f0/1e293b?text=Sophie+M",
    bio: "Passionnée par les tendances et les matériaux, Sophie excelle dans la création d'ambiances uniques. Elle travaille étroitement avec les clients pour traduire leurs goûts en espaces harmonieux et personnalisés.",
  },
  {
    id: 4,
    name: "Marc Vandenberghe",
    role: "Architecte paysagiste",
    imageUrl: "https://placehold.co/400x400/e2e8f0/1e293b?text=Marc+V",
    bio: "Spécialiste des jardins urbains et des terrasses, Marc crée des espaces extérieurs qui prolongent l'habitat. Son expertise en plantes adaptées au climat belge garantit des aménagements durables et faciles d'entretien.",
  },
  {
    id: 5,
    name: "Julie Peeters",
    role: "Chef de projet",
    imageUrl: "https://placehold.co/400x400/e2e8f0/1e293b?text=Julie+P",
    bio: "Avec son excellente organisation et sa connaissance approfondie des corps de métier, Julie assure le suivi rigoureux des chantiers. Elle est l'interlocutrice privilégiée des clients tout au long de la réalisation de leur projet.",
  },
  {
    id: 6,
    name: "Nicolas Dumont",
    role: "Designer d'espace commercial",
    imageUrl: "https://placehold.co/400x400/e2e8f0/1e293b?text=Nicolas+D",
    bio: "Spécialisé dans l'aménagement de commerces et restaurants, Nicolas conçoit des espaces qui allient expérience client optimale et identité de marque forte. Son portfolio inclut de nombreux établissements bruxellois reconnus.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
                Notre équipe
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Une équipe pluridisciplinaire de professionnels passionnés par l'architecture d'intérieur et le design.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {team.map((person) => (
                <li key={person.id}>
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      className="object-cover"
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-green-800">{person.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
                Notre approche
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Chez Créateurs d'intérieur, nous croyons que chaque projet est unique et mérite une attention particulière.
                Notre approche se base sur l'écoute, la créativité et le professionnalisme.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Créativité</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Nous proposons des solutions innovantes et personnalisées qui correspondent à vos besoins et à votre style de vie.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Rigueur</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Nous assurons un suivi méticuleux de chaque projet, du concept initial à la réalisation finale, en respectant les délais et les budgets.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">Écoute</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Nous prenons le temps de comprendre vos attentes et vos besoins pour créer des espaces qui vous ressemblent et dans lesquels vous vous sentirez bien.
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
