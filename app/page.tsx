import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { Projects } from "@/components/ui/projects";
import { Testimonials } from "@/components/ui/testimonials";
import { ContactSection } from "@/components/ui/contact-section";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { CallBookingCTA } from "@/components/ui/call-booking-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <CallBookingCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}