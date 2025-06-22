import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Consultation",
    description: "Une consultation initiale pour discuter de votre projet et de vos besoins.",
    price: "150€",
    duration: "2 heures",
    features: [
      "Visite sur place",
      "Évaluation des besoins",
      "Conseils préliminaires",
      "Discussion sur le budget",
      "Estimation des délais",
    ],
    cta: "Prendre rendez-vous",
    ctaLink: "/contact",
    mostPopular: false,
  },
  {
    name: "Projet complet",
    description: "Un service complet de conception et de suivi pour votre projet de rénovation ou d'aménagement.",
    price: "À partir de 90€/m²",
    duration: "Variable selon projet",
    features: [
      "Plans détaillés",
      "Sélection des matériaux",
      "Coordination des artisans",
      "Suivi de chantier",
      "Garantie de satisfaction",
    ],
    cta: "Demander un devis",
    ctaLink: "/contact",
    mostPopular: true,
  },
  {
    name: "Décoration",
    description: "Un service de décoration pour donner un nouveau souffle à votre intérieur.",
    price: "À partir de 60€/m²",
    duration: "2-4 semaines",
    features: [
      "Planche d'ambiance",
      "Sélection du mobilier",
      "Conseils couleurs et textiles",
      "Shopping list personnalisée",
      "Mise en place finale",
    ],
    cta: "En savoir plus",
    ctaLink: "/contact",
    mostPopular: false,
  },
];

const faqs = [
  {
    question: "Comment se déroule la première consultation ?",
    answer: "La première consultation se déroule généralement à votre domicile ou sur le lieu du projet. Nous discutons de vos besoins, de vos goûts et de votre budget. Nous prenons des mesures et des photos pour mieux comprendre l'espace. À l'issue de cette consultation, nous vous proposons une première approche et des pistes de réflexion.",
  },
  {
    question: "Combien de temps dure un projet complet de rénovation ?",
    answer: "La durée d'un projet dépend de son ampleur. Une simple rénovation d'une pièce peut prendre de 4 à 8 semaines, tandis qu'une rénovation complète d'un appartement ou d'une maison peut s'étendre sur 3 à 6 mois. Nous établissons un calendrier précis au début du projet et vous tenons informé de l'avancement des travaux.",
  },
  {
    question: "Travaillez-vous avec vos propres artisans ?",
    answer: "Oui, nous collaborons avec un réseau d'artisans et d'entrepreneurs qualifiés avec lesquels nous avons l'habitude de travailler. Cela nous permet de garantir la qualité des finitions et le respect des délais. Vous pouvez également proposer vos propres artisans si vous le souhaitez.",
  },
  {
    question: "Comment sont calculés vos honoraires ?",
    answer: "Nos honoraires sont calculés soit au forfait, soit en pourcentage du montant des travaux, selon la nature et l'ampleur du projet. Pour les projets de décoration, nous proposons généralement un tarif au m². Nous établissons un devis détaillé avant le début de chaque projet.",
  },
  {
    question: "Est-il possible de réaliser les travaux par phases ?",
    answer: "Absolument. Nous comprenons que des contraintes budgétaires ou pratiques peuvent nécessiter un phasage des travaux. Nous pouvons établir un plan de rénovation par étapes, en priorisant les interventions selon vos besoins et votre budget.",
  },
  {
    question: "Proposez-vous un service de home staging pour la vente d'un bien ?",
    answer: "Oui, nous proposons un service de home staging pour valoriser votre bien immobilier en vue d'une vente ou d'une location. Ce service comprend des conseils d'aménagement, de décoration et éventuellement la location de mobilier pour une durée déterminée.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-playfair">
                Nos tarifs
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nous proposons différentes formules adaptées à vos besoins et à votre budget.
                Chaque projet étant unique, n'hésitez pas à nous contacter pour un devis personnalisé.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
              {pricingPlans.map((plan, planIdx) => (
                <div
                  key={plan.name}
                  className={`${
                    plan.mostPopular
                      ? "relative bg-white shadow-2xl"
                      : "bg-white/60 sm:mx-8 lg:mx-0"
                  } rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10`}
                >
                  {plan.mostPopular && (
                    <div className="absolute -top-3 right-8 inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                      Le plus demandé
                    </div>
                  )}
                  <h2
                    id={`plan-${planIdx}`}
                    className="text-lg font-semibold leading-8 text-gray-900"
                  >
                    {plan.name}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {plan.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      {plan.duration}
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {plan.features.map((feature) => (
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaLink}
                    aria-describedby={`plan-${planIdx}`}
                    className={`${
                      plan.mostPopular
                        ? "bg-green-800 text-white hover:bg-green-700"
                        : "bg-green-50 text-green-800 hover:bg-green-100"
                    } mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-green-600`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 font-playfair">
                Questions fréquentes
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Vous avez des questions sur nos services ? Consultez notre FAQ ci-dessous ou
                contactez-nous directement.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10 lg:max-w-none lg:mt-10">
              <dl className="space-y-8 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <div key={faq.question} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-4">
                      {faq.question}
                    </dt>
                    <dd className="mt-4 lg:col-span-8 lg:mt-0">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-green-600"
              >
                Contactez-nous pour un devis personnalisé
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
