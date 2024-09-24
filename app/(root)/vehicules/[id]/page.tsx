import { getVehicleById } from "@/lib/actions";
import VehiculeById from "./VehiculeById";

const page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const vehicle = await getVehicleById(id);

  return (
    <div>
      <VehiculeById vehicle={vehicle} />
    </div>
  );
};

export default page;
