import { Handshake } from "lucide-react";

interface PriceCardProps {
  commission: string;
  description: string;
  type: string;
}

const PriceCard = ({ commission, description, type }: PriceCardProps) => {
  return (
    <div className="relative flex flex-col gap-y-4 rounded-md border bg-muted p-6">
      <div className="">
        <span className="text-xs uppercase ">{type}</span>
        <p className="text-xl font-bold">{description}</p>
      </div>
      <hr className="border-gray-500" />
      <div className="flex flex-col">
        <span className="text-sm ">Notre Commission</span>
        <span className="text-xl font-bold">{commission}</span>
      </div>
      <Handshake className="absolute right-3 top-3" />
    </div>
  );
};

export default PriceCard;
