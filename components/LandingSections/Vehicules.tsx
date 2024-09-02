"use client"; 

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import CarCard from "../CarCard";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";
import { Vehicule } from "@prisma/client";

const Voitures = ({ vehicles }: {vehicles: Vehicule[]}) => {
  return (
    <Section>
      <SectionHeader
        tag="Nos Voitures"
        description="Choississez selon vos envies"
      />
      <div className="flex flex-col items-center">
        <Tabs defaultValue="classiques" className="mx-auto text-center">
          <TabsList className="mb-2">
            <TabsTrigger value="classiques">Classiques</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>
          
          <TabsContent value="classiques">
            <div className="mb-6 flex flex-row gap-x-3">
              {vehicles.map((vehicle: Vehicule) => (
                <CarCard
                  key={vehicle.id}
                  price={vehicle.price}
                  boiteType={vehicle.boiteType}
                  carType={vehicle.carType}
                  kmNumber={vehicle.kmNumber}
                  name={vehicle.name}
                />
              ))}
            </div>
            <Button asChild>
              <Link href="/voitures/classiques">Catalogue Classique</Link>
            </Button>
          </TabsContent>

          <TabsContent value="premium">
            <div className="mb-6 flex flex-row gap-x-3">
              {vehicles.map((vehicle : Vehicule) => (
                <CarCard
                  key={vehicle.id}
                  price={vehicle.price}
                  boiteType={vehicle.boiteType}
                  carType={vehicle.carType}
                  kmNumber={vehicle.kmNumber}
                  name={vehicle.name}
                />
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
