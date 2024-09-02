import Hero from "@/components/LandingSections/Hero";
import Services from "@/components/LandingSections/Services";
import { Testimonials } from "@/components/LandingSections/Testimonials";
import Vehicules from "@/components/LandingSections/Vehicules";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Vehicules />
      <Services />
      <Testimonials />
    </main>
  );
}
