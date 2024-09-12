import PageHeader from "@/components/PageHeader";
import PremiumVehiculesList from "./PremiumVehiculesList";

const Premium = () => {
  return (
    <main>
      <PageHeader
        title="Une sélection de voitures premium d'exception"
        description="Découvrez des véhicules luxueux et sophistiqués, conçus pour répondre aux plus hautes exigences."
      />{" "}
      <PremiumVehiculesList />
    </main>
  );
};

export default Premium;
