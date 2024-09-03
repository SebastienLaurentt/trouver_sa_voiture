import { Atom } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto px-6 md:max-w-2xl md:px-0 lg:max-w-4xl">
        <div className="py-8">
          <div className="flex flex-col items-center  gap-y-4 rounded-xl bg-muted  px-4 py-12 text-center md:gap-y-6 md:py-16">
            <h2 className="font-semibold md:max-w-[400px]">
              Vous avez besoin d&apos;être accompagné ?
            </h2>
            <p className="md:max-w-[360px]">
              Laissez-nous votre email et nous vous recontacterons au plus vite
              !{" "}
            </p>
            <div className="flex flex-row gap-x-2 px-6">
              <Input placeholder="Votre email" />
              <Button>Envoyer</Button>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-between gap-y-8 py-12  md:flex-row md:gap-y-0 ">
          <div className="flex flex-col">
            <div className="flex flex-row items-center gap-x-1">
              <Atom size={28} className="text-primary" />
              <span className="text-3xl font-semibold">TSV</span>
            </div>
            <span className="w-[250px] text-left">
              Trouver sa voiture{" "}
              <span className="font-bold text-primary">facilement</span> !
            </span>
          </div>
          <div className="flex flex-row gap-x-8 text-left">
            <div className="flex flex-col gap-y-3">
              <span className="font-bold text-muted-foreground">
                {" "}
                Nos voitures
              </span>
              <ul className="flex flex-col gap-y-1 text-foreground/90">
                <Link
                  href="/voitures/classiques"
                  className="xl:hover:text-foreground"
                >
                  Classiques
                </Link>
                <Link
                  href="/voitures/premium"
                  className="xl:hover:text-foreground"
                >
                  Premium
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="font-bold text-muted-foreground">
                Nos Services
              </span>
              <ul className="flex flex-col gap-y-1 text-foreground/90">
                <Link
                  href="/services/estimation"
                  className="xl:hover:text-foreground"
                >
                  Estimation
                </Link>
                <Link
                  href="/services/achat"
                  className="xl:hover:text-foreground"
                >
                  Acheter
                </Link>
                <Link
                  href="/services/vente"
                  className="xl:hover:text-foreground"
                >
                  Vendre
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-y-3">
              <span className="font-bold text-muted-foreground">
                Plus d&apos;info
              </span>
              <ul className="flex flex-col gap-y-1 text-foreground/90">
                <Link href="/about" className="xl:hover:text-foreground">
                  Equipe
                </Link>
                <Link href="/contact" className="xl:hover:text-foreground">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-between gap-y-2 border-t  py-6 text-sm text-foreground/70 md:max-w-2xl md:flex-row md:gap-y-0 lg:max-w-4xl">
          <div className="flex flex-row gap-x-4">
            <Link href="/" className="xl:hover:text-foreground">
              CGV
            </Link>
            <Link href="/" className="xl:hover:text-foreground">
              Mentions légales
            </Link>
          </div>
          <span>@2024 - TSV</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
