import type { Metadata } from "next";
import { Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Créateurs d'intérieurs | Architecte d'intérieur à Bruxelles",
  description: "Collectif d'architectes d'intérieur et de décorateurs d'intérieur qui vous accompagne dans la rénovation et l'aménagement de votre intérieur à Bruxelles.",
  keywords: "architecte intérieur, décorateur, rénovation, Bruxelles, aménagement intérieur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${raleway.variable} ${playfair.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
