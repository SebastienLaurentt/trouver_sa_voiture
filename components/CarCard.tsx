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
    <div >
      <div>
        <Image
          src="/images/CarCardImg.jpg"
          alt="Image voiture"
          width={320}
          height={320}
          className="rounded-t-md"
        />
      </div>
      <div className="rounded-b-lg border p-3">
        <div className="text-left text-lg">{name}</div>
        <div className="my-4 flex flex-row  gap-x-2 text-sm">
          <span className="rounded-full bg-muted px-2.5 py-1 ">
            {kmNumber} km
          </span>
          <span className="rounded-full bg-muted px-2.5 py-1">{boiteType}</span>
          <span className="rounded-full bg-muted px-2.5 py-1">{carType}</span>
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-x-2">
          {" "}
          <span className="text-2xl font-semibold">{price} €</span>
          <Button>En savoir plus</Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
