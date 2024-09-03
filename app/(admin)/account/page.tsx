import { getAllVehiclesList } from "@/lib/actions";
import VehiculeList from "./VehiculeList";

const Page = async () => {
  const allVehicles = await getAllVehiclesList();
  return (
    <div>
      <VehiculeList allVehicles={allVehicles} />
    </div>
  );
};

export default Page;
