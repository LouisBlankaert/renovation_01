import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content: "L'équipe des Créateurs d'intérieur a su transformer notre maison en un espace à la fois fonctionnel et esthétique. Leur écoute et leur professionnalisme ont fait toute la différence.",
    author: {
      name: "Sophie Dubois",
      role: "Propriétaire à Uccle",
      imageUrl: "/images/testimonials/testimonial-1.jpg",
    },
  },
  {
    id: 2,
    content: "Nous avons fait appel à ce collectif pour la rénovation complète de notre appartement. Le résultat dépasse nos attentes, avec une attention aux détails remarquable.",
    author: {
      name: "Marc et Julie Leroy",
      role: "Propriétaires à Etterbeek",
      imageUrl: "/images/testimonials/testimonial-2.jpg",
    },
  },
  {
    id: 3,
    content: "Pour l'aménagement de notre restaurant, nous cherchions un concept unique et durable. Leur approche créative et écologique a parfaitement répondu à nos besoins.",
    author: {
      name: "Thomas Verhaegen",
      role: "Restaurateur à Bruxelles",
      imageUrl: "/images/testimonials/testimonial-3.jpg",
    },
  },
];

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
            Témoignages de nos clients
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Découvrez ce que nos clients disent de notre travail et de notre collaboration.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div>
                <div className="flex items-center gap-x-2">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <div className="mt-6 text-lg leading-7 text-gray-700">
                  <p>&quot;{testimonial.content}&quot;</p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    className="object-cover"
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    fill
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                  <div className="text-gray-600">{testimonial.author.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
