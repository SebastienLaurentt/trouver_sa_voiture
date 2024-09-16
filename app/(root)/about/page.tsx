import Services from "@/components/LandingSections/Services";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const About = () => {
  return (
    <main className="mb-32 md:mb-36 xl:mb-48">
      <PageHeader
        title="Rencontrez notre équipe dédiée"
        description="Passionnés d'automobile et experts du marché, nous mettons notre savoir-faire à votre service pour vous offrir une expérience unique et personnalisée."
      />
      {/* <Section marginTop>
        <SectionHeader
          tag="Notre agence"
          description="A votre service depuis 2010"
        />
      </Section> */}

      <Section marginBottom marginTop>
        <SectionHeader
          tag="Notre équipe"
          description="Un groupe de passionnés à votre service"
        />
        <div className="flex flex-col gap-y-8 xl:flex-row xl:items-center xl:gap-x-4 xl:gap-y-0">
          <div className="mx-auto w-full xl:w-2/5">
            {" "}
            <Image
              src="/images/Serge.jpeg"
              width={1000}
              height={1000}
              alt="Serge Noukoudjo"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-1 flex-col gap-y-3">
            <div className="flex flex-row items-center justify-center gap-x-2 xl:justify-start">
              <h3>Serge Noukandjo </h3> -
              <span className="text-lg italic">Agent Automobile</span>
            </div>
            <div className="flex flex-col gap-y-4 text-muted-foreground">
              <p>
                Commercial de formation et expert automobile de métier, j’ai
                décidé d’allier ces deux compétences en créant{" "}
                <span className="font-semibold text-foreground">
                  Trouver-sa-voiture.com.
                </span>
              </p>{" "}
              <p>
                Le but est de répondre à une réelle demande du marché automobile
                en vous{" "}
                <span className="font-semibold text-foreground">
                  facilitant l’achat et/ou la vente
                </span>{" "}
                d’un véhicule d’occasion ou neuf.
              </p>{" "}
              <p>
                {" "}
                Aujourd’hui il n’est plus obligatoire d’avoir un ami mécanicien
                pour acheter un véhicule d’occasion ou de connaitre un salarié
                d’une concession pour avoir les{" "}
                <span className="font-semibold text-foreground">
                  meilleurs conseils et tarifs
                </span>
              </p>
              <p>
                {" "}
                <span className="font-semibold text-foreground">
                  Trouver-sa-voiture.com
                </span>{" "}
                est une entreprise offrant l’opportunité à toutes personnes de
                pouvoir acheter ou vendre sa voiture en faisant appel à des
                agents expert automobile.
              </p>
              <p className="text-[18px] font-bold text-foreground md:text-xl">
                Acheter ou vendre une voiture doit redevenir un plaisir !
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Services />
    </main>
  );
};

export default About;
