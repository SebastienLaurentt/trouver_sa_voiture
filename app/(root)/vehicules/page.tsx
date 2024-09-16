import PageHeader from "@/components/PageHeader";
import VehiculesList from "./VehiculeList";
import { getAllVehiclesList } from "@/lib/actions";

export default async function Classiques() {
  const vehicles = await getAllVehiclesList();
  return (
    <main>
      <PageHeader
        title="Notre collection de véhicules"
        description="Découvrez notre gamme complète de voitures, alliant style, performance et authenticité."
      />
      <VehiculesList vehicles={vehicles} />
    </main>
  );
}
