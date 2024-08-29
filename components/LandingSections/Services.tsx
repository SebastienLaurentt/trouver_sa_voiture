import { MoveRight } from "lucide-react";
import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import ServicesCard from "../ServicesCard";

const Services = () => {
  return (
    <Section marginTop>
      <SectionHeader
        tag="Nos Services"
        description="Vous accompagner dans vos démarches"
      />
      <div className="flex flex-row rounded-xl border">
        <div className="w-1/2 border-r">
          <ServicesCard
            serviceName="Estimation"
            serviceDescription="Nous vous accompagnons pour l'estimation"
            href="/services/estimation"
            classname="hover:rounded-tl-xl"
          />
          <ServicesCard
            serviceName="Achat"
            serviceDescription="Nous vous accompagnons pour vos achats"
            href="/services/achat"
            classname="border-y"
          />
          <ServicesCard
            serviceName="Ventes"
            serviceDescription="Nous vous accompagnons pour vos ventes"
            href="/services/vente"
            classname="hover:rounded-bl-xl"
          />
        </div>
        <div className="w-1/2 p-2">
          <Image
            src="/images/CarPremium.jpg"
            alt="Image de voiture classique"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
};

export default Services;
