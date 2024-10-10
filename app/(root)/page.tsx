import Hero from "@/components/LandingSections/Hero";
import Services from "@/components/LandingSections/Services";
import { Testimonials } from "@/components/LandingSections/Testimonials";
import Vehicules from "@/components/LandingSections/Vehicules";
import { getNonPremiumVehicles, getPremiumVehicles } from "@/lib/actions";

export default async function Home() {
  const premiumVehicles = await getPremiumVehicles();
  const classicVehicles = await getNonPremiumVehicles();

  return (
    <main>
      <Hero />
      <Vehicules premiumVehicles={premiumVehicles} classicVehicles={classicVehicles} />
      <Services />
      <Testimonials />
    </main>
  );
}
