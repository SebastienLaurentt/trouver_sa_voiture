import CarCard from "@/components/CarCard";
import Section from "@/components/Section";
import { Vehicule } from "@prisma/client";

const ClassiquesVehiculesList = ({ vehicles }: { vehicles: Vehicule[] }) => {
  return (
    <Section classname="flex flex-row gap-x-4" marginTop marginBottom>
      {vehicles.map((vehicle: Vehicule) => (
        <CarCard
          key={vehicle.id}
          price={vehicle.price}
          boiteType={vehicle.boiteType}
          carType={vehicle.carType}
          kmNumber={vehicle.kmNumber}
          name={vehicle.name}
        />
      ))}
    </Section>
  );
};

export default ClassiquesVehiculesList;
