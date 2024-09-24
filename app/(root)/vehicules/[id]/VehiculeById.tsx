import Section from "@/components/Section";
import { EditVehicleFormData } from "@/lib/schema";

const VehiculeById = ({ vehicle }: { vehicle: EditVehicleFormData }) => {
  return (
    <Section>
      <h2 className="text-center">{vehicle.name}</h2>
      <span className="flex flex-row justify-center">A venir</span>
    </Section>
  );
};

export default VehiculeById;
