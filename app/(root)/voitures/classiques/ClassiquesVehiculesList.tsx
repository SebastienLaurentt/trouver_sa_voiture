import CarCard from "@/components/CarCard";
import Section from "@/components/Section";
import { getVehiclesList } from "@/lib/actions";

const ClassiquesVehiculesList = async () => {
  const vehicles = await getVehiclesList();
  return (
    <Section
      classname="flex flex-row justify-between gap-x-4"
      marginTop
      marginBottom
    >
      {vehicles.map((vehicle, index) => (
        <li key={index} className="list-none">
          <CarCard
            price={vehicle.price}
            boiteType={vehicle.boiteType}
            carType={vehicle.carType}
            kmNumber={vehicle.kmNumber}
            name={vehicle.name}
          />
        </li>
      ))}
    </Section>
  );
};

export default ClassiquesVehiculesList;
