import PageHeader from "@/components/PageHeader";
import PriceCard from "@/components/PriceCard";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Step from "@/components/Step";

const Achat = () => {
  return (
    <main>
      <PageHeader
        title="Votre partenaire pour l'achat idéal"
        description="Profitez de notre expertise pour trouver et acquérir la voiture qui correspond à vos attentes, sans stress ni tracas."
      />
      <Section marginTop>
        <SectionHeader tag="Notre méthode" description="Comment ça marche ?" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Step
            number={1}
            title="Prise de contact"
            description="Un agent vous contacte en moins de 6 heures pour définir vos critères de recherche et vous conseiller."
          />
          <Step
            number={2}
            title="Recherche"
            description="L'expert recherche votre voiture, examine les annonces et expertise les véhicules pour vous présenter le meilleur choix."
          />
          <Step
            number={3}
            title="Achat et livraison"
            description="Nous négocions le prix, organisons la livraison et vous accompagnons jusqu'à la prise en main de votre véhicule."
          />
        </div>
      </Section>
      <Section marginTop marginBottom>
        <SectionHeader
          tag="Nos tarifs"
          description="Combien cela vous coûte ?"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
