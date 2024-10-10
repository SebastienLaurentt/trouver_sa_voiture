"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EditVehicleFormData } from "@/lib/schema";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import Carrousel from "../Carrousel";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

interface VehiculesProps {
  premiumVehicles: EditVehicleFormData[];
  classicVehicles: EditVehicleFormData[];
}

const Voitures = ({ premiumVehicles, classicVehicles }: VehiculesProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#vehicules-container",
        start: "top 60%",
        once: true,
      },
    });

    tl.fromTo(
      "#vehicules-container",
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: "power2.out" }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section>
      <div id="vehicules-container" className="opacity-0">
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
