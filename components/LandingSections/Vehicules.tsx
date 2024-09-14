import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getNonPremiumVehicles, getPremiumVehicles } from "@/lib/actions";
import Link from "next/link";

import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";
import Carrousel from "../Carrousel";

const Voitures = async () => {
  const premiumVehicles = await getPremiumVehicles();
  const classicVehicles = await getNonPremiumVehicles();

  return (
    <Section>
      <SectionHeader
        tag="Nos Voitures"
        description="Choississez selon vos envies"
      />
      <div className="flex w-full flex-col items-center">
        <Tabs defaultValue="classiques" className="mx-auto w-full text-center">
          <TabsList className="">
            <TabsTrigger value="classiques">Classiques</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          {/* Contenu pour les véhicules classiques */}
          <TabsContent value="classiques" className="w-full">
            <Carrousel vehicles={classicVehicles.slice(0, 3)} />{" "}
            {/* Limite à 6 véhicules */}
            <Button asChild>
              <Link href="/voitures/classiques">Catalogue Classique</Link>
            </Button>
          </TabsContent>

          {/* Contenu pour les véhicules premium */}
          <TabsContent value="premium" className="w-full">
            <Carrousel vehicles={premiumVehicles.slice(0, 3)} />{" "}
            {/* Limite à 6 véhicules */}
            <Button asChild>
              <Link href="/voitures/premium">Catalogue Premium</Link>
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};

export default Voitures;
