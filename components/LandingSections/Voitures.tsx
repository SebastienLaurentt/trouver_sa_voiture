import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
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
            <div className="flex  flex-row justify-between rounded-3xl border">
              <div className="flex w-1/2 flex-col justify-around p-6">
                <h3>Nos marques Classiques</h3>
                <ul className="grid grid-cols-4 gap-x-4 gap-y-8">
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
                  <Link href="/voitures/classiques">Catalogue Classique</Link>
                </Button>
              </div>
              <div className="w-2/3 p-3">
                <Image
                  src="/images/ClassiquesCar.jpg"
                  alt="Image de voiture classique"
                  width={1000}
                  height={1000}
                  className="rounded-lg"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="premium">
            {" "}
            <div className="flex  flex-row justify-between rounded-3xl border">
              <div className="flex w-1/2 flex-col justify-around p-6">
                <h3>Nos marques Premium</h3>
                <ul className="grid grid-cols-4 gap-x-4 gap-y-8">
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
                  <Link href="/voitures/classiques">Catalogue Premium</Link>
                </Button>
              </div>
              <div className="w-2/3 p-3">
                <Image
                  src="/images/CarPremium.jpg"
                  alt="Image de voiture classique"
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
