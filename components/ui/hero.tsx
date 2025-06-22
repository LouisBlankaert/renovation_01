import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Intérieur design"
          fill
          className="h-full w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-playfair">
            Créateurs d&apos;intérieur Bruxelles
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Collectif d&apos;architectes d&apos;intérieur, d&apos;architectes, de décorateurs et de paysagistes 
            exerçant à Bruxelles et ses environs.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-green-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-green-600"
            >
              Contactez-nous
            </Link>
            <Link href="/realisations" className="text-sm font-semibold leading-6 text-white">
              Découvrir nos réalisations <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
