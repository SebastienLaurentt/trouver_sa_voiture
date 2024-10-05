import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getNonPremiumVehicles, getPremiumVehicles } from "@/lib/actions";
import Link from "next/link";

import { BookOpen } from "lucide-react";
import Carrousel from "../Carrousel";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";

const Voitures = async () => {
  const premiumVehicles = await getPremiumVehicles();
  const classicVehicles = await getNonPremiumVehicles();

  return (
    <Section>
      <SectionHeader
        tag="Notre catalogue"
        description="Trouvez la voiture de vos rêves parmis notre sélection"
      />
      <div className="flex w-full flex-col items-center">
        <Tabs defaultValue="classiques" className="mx-auto w-full text-center">
          <TabsList className="">
            <TabsTrigger value="classiques">Classiques</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          {/* Contenu pour les véhicules classiques */}
          <TabsContent value="classiques" className="w-full">
            <Carrousel
              vehicles={classicVehicles.slice(0, 3)}
              isPremium={false}
            />{" "}
            <Button asChild>
              <Link href="/vehicules" className="flex flex-row gap-x-2">
                Voir le catalogue <BookOpen size={18} />
              </Link>
            </Button>
          </TabsContent>

          {/* Contenu pour les véhicules premium */}
          <TabsContent value="premium" className="w-full">
            <Carrousel
              vehicles={premiumVehicles.slice(0, 3)}
              isPremium={true}
            />{" "}
            <Button
              asChild
              className="bg-tertiary text-slate-950 hover:bg-tertiary/80"
            >
              <Link href="/vehicules" className="flex flex-row gap-x-2">
                Voir le catalogue <BookOpen size={18} />
              </Link>
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};

export default Voitures;
