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
      className={`${classname} flex flex-col justify-between hover:bg-muted md:p-2.5 xl:p-9`}
    >
      <span className=" mb-1.5 font-bold lg:mb-2 lg:text-lg">
        {serviceName}
      </span>
      <p className="mb-2 text-sm lg:mb-3 lg:text-base">{serviceDescription}</p>
      <div className="flex flex-row gap-x-4 font-bold text-primary">
        <span>En savoir plus</span> <MoveRight />
      </div>
    </Link>
  );
};

export default ServicesCard;
