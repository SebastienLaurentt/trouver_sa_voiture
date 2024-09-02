import Hero from "@/components/LandingSections/Hero";
import Services from "@/components/LandingSections/Services";
import { Testimonials } from "@/components/LandingSections/Testimonials";
import Vehicules from "@/components/LandingSections/Vehicules";

import { getVehiclesList } from "@/lib/actions";

export default async function Home() {
  const vehicles = await getVehiclesList();
  return (
    <main>
      <Hero />
      <Vehicules vehicles={vehicles} />
      <Services />
      <Testimonials />
    </main>
  );
}
