"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EditVehicleFormData } from "@/lib/schema";
import { useInView } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import Carrousel from "../Carrousel";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";

interface VehiculesProps {
  premiumVehicles: EditVehicleFormData[];
  classicVehicles: EditVehicleFormData[];
}

const Voitures = ({ premiumVehicles, classicVehicles }: VehiculesProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <Section>
      <div
        ref={containerRef}
        className="opacity-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: isInView ? 1 : 0 }}
      >
        <SectionHeader
          tag="Notre catalogue"
          description="Trouvez la voiture de vos rêves parmis notre sélection"
        />
        <div className="flex w-full flex-col items-center">
          <Tabs defaultValue="premium" className="mx-auto w-full text-center">
            <TabsList className="">
              <TabsTrigger value="premium">Premium</TabsTrigger>
              <TabsTrigger value="classiques">Classiques</TabsTrigger>
            </TabsList>

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
      </div>
    </Section>
  );
};

export default Voitures;
