import Services from "@/components/LandingSections/Services";
import PageHeader from "@/components/PageHeader";

const About = () => {
  return (
    <main>
      <PageHeader
        title="Rencontrez notre équipe dédiée"
        description="Passionnés d'automobile et experts du marché, nous mettons notre savoir-faire à votre service pour vous offrir une expérience unique et personnalisée."
      />
      <Services />
    </main>
  );
};

export default About;
