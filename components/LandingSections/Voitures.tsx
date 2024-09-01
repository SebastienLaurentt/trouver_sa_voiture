import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
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
            <div className="flex flex-row gap-x-3">
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
          </TabsContent>
          <TabsContent value="premium">
            <div className="flex flex-row justify-between rounded-3xl md:border">
              <div className="flex w-full flex-col justify-around p-6 md:w-1/2">
                <h3>Nos marques Premium</h3>
                <ul className="grid grid-cols-4 gap-4 py-4 md:py-0 lg:gap-y-6 xl:gap-y-8">
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                  <li>
                    <Image
                      src="/images/CarLogo/Porsche.svg"
                      alt="Porsche Logo"
                      width={100}
                      height={100}
                    />
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/voitures/premium">Catalogue Premium</Link>
                </Button>
              </div>
              <div className="hidden p-3 md:block md:w-2/3">
                <Image
                  src="/images/CarPremium.jpg"
                  alt="Image de voiture premium"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};

export default Voitures;
