import CarCard from "@/components/CarCard";
import Section from "@/components/Section";
import { getPremiumVehicles } from "@/lib/actions";

const PremiumVehiculesList = async () => {
  const premiumVehicles = await getPremiumVehicles();

  return (
    <Section marginTop marginBottom>
      <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {premiumVehicles.map((vehicle, index) => (
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
      </div>
    </Section>
  );
};

export default PremiumVehiculesList;
