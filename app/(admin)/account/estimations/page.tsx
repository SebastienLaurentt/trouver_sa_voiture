import { getAllEstimations } from "@/lib/actions";
import EstimationsList from "./EstimationsList";

const Page = async () => {
  const allEstimations = await getAllEstimations();
  return (
    <div>
      <EstimationsList allEstimations={allEstimations} />
    </div>
  );
};

export default Page;
