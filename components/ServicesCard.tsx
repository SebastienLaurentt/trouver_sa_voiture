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
      className={`${classname} flex flex-col items-center justify-between rounded-lg bg-muted p-2.5 md:p-1.5 hover:bg-muted md:items-start md:rounded-none md:bg-background lg:p-2.5 xl:p-9`}
    >
      <span className=" mb-1.5 font-bold lg:mb-2 lg:text-lg">
        {serviceName}
      </span>
      <p className="mb-2 w-[200px] text-center text-sm md:w-full md:text-left lg:mb-3 xl:text-base">
        {serviceDescription}
      </p>
      <div className="flex flex-row gap-x-4 font-bold text-primary">
        <span>En savoir plus</span> <MoveRight />
      </div>
    </Link>
  );
};

export default ServicesCard;
