import CarCard from "@/components/CarCard";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

const Classiques = () => {
  return (
    <main>
      <PageHeader
        title="Email for modern software companies"
        description="Send your product, marketing, and transactional email with Loops.
One simple interface, for all your email."
      />{" "}
      <Section classname="flex flex-row gap-x-4" marginTop marginBottom>
        <CarCard
          price={10000}
          boiteType="Manuelle"
          carType="Berline"
          kmNumber={1000}
          name="PORSCHE 911 CARRERA 4S"
        />
        <CarCard
          price={10000}
          boiteType="Manuelle"
          carType="Berline"
          kmNumber={1000}
          name="PORSCHE 911 CARRERA 4S"
        />
        <CarCard
          price={10000}
          boiteType="Manuelle"
          carType="Berline"
          kmNumber={1000}
          name="PORSCHE 911 CARRERA 4S"
        />
        
      </Section>
    </main>
  );
};

export default Classiques;
