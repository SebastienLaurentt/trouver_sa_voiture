import CarCard from "@/components/CarCard";
import Section from "@/components/Section";
import { getAllVehiclesList } from "@/lib/actions";

const VehiculesList = async () => {
  const vehicles = await getAllVehiclesList();

  return (
    <Section marginTop marginBottom>
      <div className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((vehicle, index) => (
          <li key={index} className="list-none">
            <CarCard
              src={`https://aotdlnddxemcekzntizx.supabase.co/storage/v1/object/public/images/${vehicle.imageUrl}`}
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

export default VehiculesList;
