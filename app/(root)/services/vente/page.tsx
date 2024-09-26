import PageHeader from "@/components/PageHeader";
import PriceCard from "@/components/PriceCard";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Step from "@/components/Step";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

const Vente = () => {
  return (
    <main>
      <PageHeader
        title="Vendez votre voiture en toute confiance"
        description="Simplifiez la vente de votre véhicule avec notre service personnalisé, rapide et sécurisé, pour obtenir le meilleur prix."
      />
      <Section marginTop marginBottom>
        <SectionHeader tag="Notre méthode" description="Comment ça marche ?" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
          <Step
            number={1}
            title="Estimation du prix"
            description="Renseignez les infos de votre voiture via le formulaire ou par téléphone. Un conseiller établit une côte marché en 12h et vous recontacte."
          />
          <Step
            number={2}
            title="Expertise gratuite"
            description="Votre conseiller prend rendez-vous et se déplace gratuitement pour inspecter votre véhicule. Nous affinons ensemble la valeur et fixons un prix de vente."
          />
          <Step
            number={3}
            title="Vente de votre voiture"
            description="Vous signez un mandat non exclusif de 20 jours pour que nous puissions publier des annonces et proposer votre véhicule à nos clients. Votre conseiller s'occupe des visites."
          />
          <Step
            number={4}
            title="Vente sécurisée"
            description="Nous vérifions et sécurisons le paiement de votre voiture avec le moyen  de votre choix. Votre conseiller est présent pour vous guider."
          />
        </div>
        <div className="mt-8 flex justify-center lg:mt-12">
          <Button asChild className="flex flex-row items-center gap-x-2">
            <Link href="/services/estimation">
              Estimer ma voiture <TrendingUp size={18} />
            </Link>
          </Button>
        </div>
      </Section>
      <Section marginTop marginBottom>
        <SectionHeader
          tag="Nos tarifs"
          description="Combien cela vous coûte ?"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <PriceCard type="Vente" commission="10%" description="< 5000€" />
          <PriceCard
            type="Vente"
            commission="9%"
            description="5000€ - 10000€"
          />
          <PriceCard
            type="Vente"
            commission="7%"
            description="10000€ - 20000€"
          />
          <PriceCard type="Vente" commission="6%" description=" > 20000€" />
        </div>
      </Section>
    </main>
  );
};

export default Vente;
