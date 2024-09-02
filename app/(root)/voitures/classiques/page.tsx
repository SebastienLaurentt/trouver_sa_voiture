import PageHeader from "@/components/PageHeader";
import { getVehiclesList } from "@/lib/actions";
import ClassiquesVehiculesList from "./ClassiquesVehiculesList";

export default async function Classiques() {
  const vehicles = await getVehiclesList();
  return (
    <main>
      <PageHeader
        title="Email for modern software companies"
        description="Send your product, marketing, and transactional email with Loops.
One simple interface, for all your email."
      />{" "}
      <ClassiquesVehiculesList vehicles={vehicles} />
    </main>
  );
}
