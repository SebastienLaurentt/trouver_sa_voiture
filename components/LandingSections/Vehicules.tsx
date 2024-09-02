import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getVehiclesList } from "@/lib/actions";
import Link from "next/link";
import CarCard from "../CarCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";

const Voitures = async () => {
  const vehicles = await getVehiclesList();
  return (
    <Section>
      <SectionHeader
        tag="Nos Voitures"
        description="Choississez selon vos envies"
      />
      <div className="flex w-full flex-col items-center">
        <Tabs defaultValue="classiques" className="mx-auto w-full text-center">
          <TabsList className="mb-2">
            <TabsTrigger value="classiques">Classiques</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          <TabsContent value="classiques" className="w-full">
            <div className="mb-6 flex w-full flex-col items-center justify-between gap-y-12 xl:flex-row">
              {vehicles.map((vehicle, index) => (
                <li key={index} className="list-none">
                  <CarCard
                    price={vehicle.price}
                    boiteType={vehicle.boiteType}
                    carType={vehicle.carType}
                    kmNumber={vehicle.kmNumber}
                    name={vehicle.name}
                  />
                </li>
              ))}
            </div>
            <Button asChild>
              <Link href="/voitures/classiques">Catalogue Classique</Link>
            </Button>
          </TabsContent>

          <TabsContent value="premium" className="w-full">
            <div className="mb-6 flex flex-col items-center justify-between gap-y-12 xl:flex-row ">
              {vehicles.map((vehicle, index) => (
                <li key={index} className="list-none">
                  <CarCard
                    price={vehicle.price}
                    boiteType={vehicle.boiteType}
                    carType={vehicle.carType}
                    kmNumber={vehicle.kmNumber}
                    name={vehicle.name}
                  />
                </li>
              ))}
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
