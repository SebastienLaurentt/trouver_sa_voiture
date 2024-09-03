import CarCard from "@/components/CarCard";
import Section from "@/components/Section";
import { getNonPremiumVehicles } from "@/lib/actions";

const ClassiquesVehiculesList = async () => {
  const classicVehicles = await getNonPremiumVehicles();
  return (
    <Section
      classname="flex flex-row justify-between gap-x-4"
      marginTop
      marginBottom
    >
      {classicVehicles.map((vehicle, index) => (
        <li key={index} className="list-none">
          <CarCard
            price={vehicle.price}
            boiteType={vehicle.boiteType}
            carType={vehicle.carType}
            kmNumber={vehicle.kmNumber}
            name={vehicle.name}
            sold={vehicle.sold}
            tag={vehicle.tag || ""}
          />
        </li>
      ))}
    </Section>
  );
};

export default ClassiquesVehiculesList;
