import PageHeader from "@/components/PageHeader";
import PremiumVehiculesList from "./PremiumVehiculesList";

const Premium = () => {
  return (
    <main>
      <PageHeader
        title="Email for modern software companies"
        description="Send your product, marketing, and transactional email with Loops.
One simple interface, for all your email."
      />{" "}
      <PremiumVehiculesList />
    </main>
  );
};

export default Premium;
