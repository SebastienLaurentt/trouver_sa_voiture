import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface CarCardProps {
  src: string;
  kmNumber: number;
  boiteType: string;
  carType: string;
  name: string;
  price: number;
  sold: boolean;
  tag?: string;
  premium?: boolean; // Add the premium prop
}

const CarCard = ({
  src,
  kmNumber,
  boiteType,
  carType,
  name,
  price,
  sold,
  tag,
  premium,
}: CarCardProps) => {
  return (
    <div className="relative rounded-lg border shadow shadow-slate-800">
      <div className="relative h-[200px] w-full">
        {/* Image et tags */}
        <Image
          src={src}
          alt={`Image de ${name}`}
          width={320}
          height={320}
          className="size-full rounded-t-md"
        />

        {/* Tag "Nouveau" */}
        {tag && (
          <div className="absolute bottom-0 left-0 bg-[#f59e0b] px-2 py-1 text-xs font-bold text-white">
            {tag}
          </div>
        )}

        {/* Tag "Vendu" */}
        {sold && (
          <div className="absolute right-0 top-0 m-2 rounded-tr-md bg-red-500 px-2 py-1 text-xs font-bold text-white">
            Vendu
          </div>
        )}
      </div>
      <div className="rounded-b-lg p-3 ">
        <div
          className={`text-left text-lg font-medium ${
            premium ? "text-[#cead6f]" : ""
          }`}
        >
          {name}
        </div>
        <div className="my-4 flex flex-row gap-x-2 text-sm">
          <span
            className={`rounded-full px-2.5 py-1 ${
              premium ? "bg-[#cead6f] text-slate-950" : "bg-muted"
            }`}
          >
            {kmNumber} km
          </span>
          <span
            className={`rounded-full px-2.5 py-1 ${
              premium ? "bg-[#cead6f] text-slate-950" : "bg-muted"
            }`}
          >
            {boiteType}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 ${
              premium ? "bg-[#cead6f] text-slate-950" : "bg-muted"
            }`}
          >
            {carType}
          </span>
        </div>
        <div className="flex w-full flex-row items-center justify-between gap-x-2">
          <span
            className={`text-2xl font-semibold ${
              premium ? "text-[#cead6f]" : ""
            }`}
          >
            {price} €
          </span>
          <Button variant="ghost">
            En savoir plus <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
