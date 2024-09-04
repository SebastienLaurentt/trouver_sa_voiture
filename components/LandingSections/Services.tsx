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
      <div className="mx-4 flex flex-row rounded-lg md:border">
        <div className="flex w-full flex-col  justify-between gap-y-6 md:w-3/5 md:gap-y-0 md:border-r lg:w-1/2">
          <ServicesCard
            serviceName="Estimation"
            serviceDescription="Nous vous accompagnons pour l'estimation"
            href="/services/estimation"
            classname="rounded-tl-xl"
          />
          <ServicesCard
            serviceName="Achat"
            serviceDescription="Nous vous accompagnons pour vos achats"
            href="/services/achat"
            classname="md:border-y"
          />
          <ServicesCard
            serviceName="Ventes"
            serviceDescription="Nous vous accompagnons pour vos ventes"
            href="/services/vente"
            classname="rounded-bl-xl"
          />
        </div>
        <div className="hidden p-2 md:block md:w-1/2">
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
