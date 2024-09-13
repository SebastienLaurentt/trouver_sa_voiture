import Services from "@/components/LandingSections/Services";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <main>
      <PageHeader
        title="Rencontrez notre équipe dédiée"
        description="Passionnés d'automobile et experts du marché, nous mettons notre savoir-faire à votre service pour vous offrir une expérience unique et personnalisée."
      />
      <Section marginTop>
        <SectionHeader
          tag="Notre agence"
          description="A votre service depuis 2010"
        />
      </Section>
      <Services />
      <Section marginBottom marginTop>
        <SectionHeader
          tag="Notre équipe"
          description="Un groupe de passionnés à votre service"
        />
      </Section>
    </main>
  );
};

export default About;
