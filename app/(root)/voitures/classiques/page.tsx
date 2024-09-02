import PageHeader from "@/components/PageHeader";
import ClassiquesVehiculesList from "./ClassiquesVehiculesList";

export default async function Classiques() {
  return (
    <main>
      <PageHeader
        title="Email for modern software companies"
        description="Send your product, marketing, and transactional email with Loops.
One simple interface, for all your email."
      />
      <ClassiquesVehiculesList />
    </main>
  );
}
