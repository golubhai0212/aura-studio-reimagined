import { Hero } from "@/components/aura/Hero";
import { About } from "@/components/aura/About";
import { Services } from "@/components/aura/Services";
import { WhyAura } from "@/components/aura/WhyAura";
import { Team } from "@/components/aura/Team";
import { Packages } from "@/components/aura/Packages";
import { Testimonials } from "@/components/aura/Testimonials";
import { Booking } from "@/components/aura/Booking";
import { Footer } from "@/components/aura/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <Hero />
    <About />
    <Services />
    <WhyAura />
    <Team />
    <Packages />
    <Testimonials />
    <Booking />
    <Footer />
  </main>
);

export default Index;
