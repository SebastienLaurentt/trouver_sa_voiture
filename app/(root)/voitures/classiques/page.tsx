import PageHeader from "@/components/PageHeader";
import ClassiquesVehiculesList from "./ClassiquesVehiculesList";

export default async function Classiques() {
  return (
    <main>
      <PageHeader
        title="Notre sélection de voitures classiques"
        description="Des modèles intemporels qui allient style et authenticité."
      />
      <ClassiquesVehiculesList />
    </main>
  );
}
