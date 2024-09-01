import Image from "next/image";
import { Button } from "./ui/button";

interface CarCardProps {
  kmNumber: number;
  boiteType: string;
  carType: string;
  name: string;
  price: number;
}

const CarCard = ({
  kmNumber,
  boiteType,
  carType,
  name,
  price,
}: CarCardProps) => {
  return (
    <div className="rounded-lg border p-2">
      <div>
        <Image
          src="/images/CarCardImg.jpg"
          alt="Image voiture"
          width={300}
          height={300}
          className="rounded-md"
        />
      </div>
      <div className="my-2 flex flex-row justify-between gap-x-2">
        <span>{kmNumber} km</span>
        <span className="border-x border-white px-2">{boiteType}</span>
        <span>{carType}</span>
      </div>
      <div className="flex flex-col items-start">
        <span>{name}</span>
        <div className="flex w-full flex-row items-center justify-between gap-x-2">
          {" "}
          <span>{price} euros</span>
          <Button>Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
