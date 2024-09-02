import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import CarCard from "../CarCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";

const Voitures = () => {
  return (
    <Section>
      <SectionHeader
        tag="Nos Voitures"
        description="Choississez selon vos envies"
      />
      <div className="flex flex-col items-center">
        <Tabs defaultValue="classiques" className="mx-auto  text-center">
          <TabsList className="mb-2">
            <TabsTrigger value="classiques">Classiques</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>
          <TabsContent value="classiques">
            <div className="mb-6 flex flex-row gap-x-3">
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
            </div>
            <Button asChild>
              <Link href="/voitures/classiques">Catalogue Classique</Link>
            </Button>
          </TabsContent>
          <TabsContent value="premium">
            <div className="mb-6 flex flex-row gap-x-3">
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
            </div>
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
