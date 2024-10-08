import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface CarCardProps {
  id: string;
  src: string;
  kmNumber: number;
  boiteType: string;
  carType: string;
  name: string;
  price: number;
  sold: boolean;
  tag?: string;
  premium?: boolean;
}

const CarCard = ({
  id,
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
    <Link href={`/vehicules/${id}`}>
      <div className="relative w-full rounded-sm border shadow shadow-slate-800">
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
            <div className="absolute left-0 top-0 rounded-tl-sm bg-accent px-2 py-1.5 text-xs font-bold text-white">
              {tag}
            </div>
          )}

          {/* Tag "Vendu" */}
          {sold && (
            <div className="absolute right-0 top-0  rounded-tr-md bg-red-800 px-2 py-1.5 text-xs font-bold text-white">
              Vendu
            </div>
          )}
        </div>
        <div className="rounded-b-lg p-3 ">
          <div
            className={`text-left text-lg font-semibold ${
              premium ? "text-tertiary" : ""
            }`}
          >
            {name}
          </div>
          <div className="my-4 flex flex-row gap-x-2 text-sm">
            <span
              className={`rounded-full px-2.5 py-1 ${
                premium ? "bg-tertiary text-slate-950" : "bg-muted"
              }`}
            >
              {kmNumber} km
            </span>
            <span
              className={`rounded-full px-2.5 py-1 ${
                premium ? "bg-tertiary text-slate-950" : "bg-muted"
              }`}
            >
              {boiteType}
            </span>
            <span
              className={`rounded-full px-2.5 py-1 ${
                premium ? "bg-tertiary text-slate-950" : "bg-muted"
              }`}
            >
              {carType}
            </span>
          </div>
          <div className="flex w-full flex-row items-center justify-between gap-x-2">
            <span
              className={`text-2xl font-bold ${premium ? "text-tertiary" : ""}`}
            >
              {price} €
            </span>
            <Button variant="ghost">
              En savoir plus <ArrowRight className="ml-1" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
