import Hero from "@/components/LandingSections/Hero";
import Services from "@/components/LandingSections/Services";
import { Testimonials } from "@/components/LandingSections/Testimonials";

import Voitures from "@/components/LandingSections/Voitures";

export default function Home() {
  return (
    <main>
      <Hero />
      <Voitures />
      <Services />
      <Testimonials />
    </main>
  );
}
