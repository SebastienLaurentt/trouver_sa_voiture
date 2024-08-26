import Section from "../Section";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Section classname="my-40 text-center ">
      <h1>Trouvez la voiture parfaite en quelques clics</h1>
      <p className="my-4 text-xl">
        Explorez des annonces de voitures neuves et d&apos;occasion. Comparez
        les modèles et trouvez celle qui vous convient.
      </p>
      <Button>Trouver ma voiture</Button>
    </Section>
  );
};

export default Hero;
