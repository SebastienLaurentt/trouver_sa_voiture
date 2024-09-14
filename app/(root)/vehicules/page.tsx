import PageHeader from "@/components/PageHeader";
import VehiculesList from "./VehiculeList";

export default async function Classiques() {
  return (
    <main>
      <PageHeader
        title="Notre collection de véhicules"
        description="Découvrez notre gamme complète de voitures, alliant style, performance et authenticité."
      />
      <VehiculesList />
    </main>
  );
}
