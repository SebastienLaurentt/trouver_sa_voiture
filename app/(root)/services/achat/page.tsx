import PageHeader from "@/components/PageHeader";
import PriceCard from "@/components/PriceCard";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Step from "@/components/Step";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const Achat = () => {
  return (
    <main>
      <PageHeader
        title="Votre partenaire pour l'achat idéal"
        description="Profitez de notre expertise pour trouver et acquérir la voiture qui correspond à vos attentes, sans stress ni tracas."
      />
      <Section marginTop marginBottom>
        <SectionHeader tag="Notre méthode" description="Comment ça marche ?" />
        <div className="grid grid-cols-1 gap-x-1 gap-y-8 md:grid-cols-3 xl:gap-4">
          <Step
            number={1}
            title="Prise de contact"
            description="Un agent vous contacte en moins de 6 heures pour définir vos critères de recherche et vous conseiller."
          />
          <Step
            number={2}
            title="Recherche"
            description="L'expert examine les annonces et expertise les véhicules pour vous présenter le meilleur choix."
          />
          <Step
            number={3}
            title="Achat et livraison"
            description="Nous négocions le prix, organisons la livraison et vous accompagnons jusqu'à la prise en main de votre véhicule."
          />
        </div>
        <div className="mt-8 flex justify-center lg:mt-12">
          <Button asChild>
            <Link href="/vehicules" className="flex flex-row gap-x-2">
              Voir le catalogue <BookOpen size={18} />
            </Link>
          </Button>
        </div>
      </Section>
      <Section marginTop marginBottom>
        <SectionHeader
          tag="Nos tarifs"
          description="Combien cela vous coûte ?"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          <PriceCard
            type="Achat"
            commission="600€"
            description="4000€ - 10000€"
          />
          <PriceCard
            type="Achat"
            commission="750€"
            description="10000€ - 25000€"
          />
          <PriceCard
            type="Achat"
            commission="900€"
            description="20000€ - 30000€"
          />
          <PriceCard
            type="Achat"
            commission="4%"
            description="30000€ - 40000€"
          />
          <PriceCard type="Achat" commission="5%" description="> 40000€" />
          <PriceCard type="Achat" commission="5%" description="> 240CV" />
        </div>
      </Section>
    </main>
  );
};

export default Achat;
