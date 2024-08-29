import { MoveRight } from "lucide-react";
import Link from "next/link";

interface ServicesCardProps {
  serviceName: string;
  serviceDescription: string;
  href: string;
  classname?: string;
}

const ServicesCard = ({
  serviceName,
  serviceDescription,
  href,
  classname,
}: ServicesCardProps) => {
  return (
    <Link
      href={href}
      className={`${classname} flex flex-col justify-between p-9 hover:bg-muted`}
    >
      <span className="mb-2 font-bold text-lg">{serviceName}</span>
      <p className="mb-3">{serviceDescription}</p>
      <div className="flex flex-row gap-x-4 font-bold text-primary">
        <span>En savoir plus</span> <MoveRight />
      </div>
    </Link>
  );
};

export default ServicesCard;
