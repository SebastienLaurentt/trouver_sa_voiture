import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const Services = () => {
  return (
    <Section marginTop>
      <SectionHeader
        tag="Nos Services"
        description="Vous accompagner dans vos démarches automobiles"
      />
      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0">
        <Link
          href="/services/estimation"
          className="group flex w-full flex-col justify-between rounded-xl border p-8 lg:w-1/2"
        >
          <div className="space-y-4">
            <h3>Estimation</h3>
            <p className="text-muted-foreground">
              Obtenez une{" "}
              <span className="font-semibold text-foreground">estimation</span>{" "}
              précise de la valeur de votre véhicule grâce à notre{" "}
              <span className="font-semibold text-foreground">expertise</span>.
              Nous analysons le marché pour vous offrir une estimation juste et
              réaliste, vous aidant ainsi à mieux{" "}
              <span className="font-semibold text-foreground">valoriser </span>
              votre bien.
            </p>
            <div className="flex flex-row items-center gap-x-2 font-bold text-primary">
              <span>En savoir plus</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
          <Image
            src="/images/HeroImg.jpg"
            width={1000}
            height={1000}
            alt="Image de voiture"
            className="mb-8 hidden lg:block xl:mb-0"
          />
        </Link>
        <div className="flex w-full flex-col gap-4 md:flex-row lg:w-1/2 lg:flex-col lg:gap-x-0">
          <Link
            href="/services/achat"
            className="group space-y-4 rounded-xl border p-8"
          >
            <h3>Achat</h3>
            <p className="text-muted-foreground">
              Laissez-nous vous{" "}
              <span className="font-semibold text-foreground">accompagner</span>{" "}
              dans l&apos;achat de votre prochaine voiture. Nous vous{" "}
              <span className="font-semibold text-foreground">guidons</span>{" "}
              dans le choix du modèle idéal,{" "}
              <span className="font-semibold text-foreground">négocions</span>{" "}
              les meilleures offres et vous{" "}
              <span className="font-semibold text-foreground">aidons</span> à
              chaque étape jusqu&apos;à la livraison.
            </p>
            <div className="flex flex-row items-center gap-x-2 font-bold text-primary">
              <span>En savoir plus</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </Link>
          <Link
            href="/services/vente"
            className="group space-y-4 rounded-xl border p-8"
          >
            <h3>Vente</h3>
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Maximisez</span>{" "}
              la vente de votre voiture avec notre service dédié. Nous vous
              aidons à préparer votre véhicule, le{" "}
              <span className="font-semibold text-foreground">promouvoir</span>{" "}
              auprès des acheteurs potentiels et finaliser la{" "}
              <span className="font-semibold text-foreground">transaction</span>{" "}
              en toute tranquillité.
            </p>
            <div className="flex flex-row items-center gap-x-2 font-bold text-primary">
              <span>En savoir plus</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Services;
