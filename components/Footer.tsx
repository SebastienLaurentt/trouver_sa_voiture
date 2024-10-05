"use client";

import { Atom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LateralCar from "../public/images/LateralCar.jpg";
import { Button } from "./ui/button";

const Footer = () => {
  const pathname = usePathname();
  const isCtaHidden = pathname === "/contact";
  return (
    <footer>
      <div className="mx-auto px-6 md:max-w-2xl md:px-0 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1400px]">
        <div
          className={`${
            isCtaHidden
              ? "hidden"
              : "flex flex-row items-center justify-between py-12 md:gap-x-8 lg:gap-x-0"
          }`}
        >
          <div>
            <h2 className="mb-4 font-semibold md:max-w-[400px]">
              À vos cotés pour vos projets automobiles
            </h2>
            <p className="mb-8 text-muted-foreground md:max-w-[360px]">
              Estimation, achat, vente, c&apos;est notre quotidien.
            </p>
            <div className="flex flex-row gap-x-2 ">
              <Button className="flex flex-row items-center gap-x-2" asChild>
                <Link href="/vehicules">Voir le catalogue</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={LateralCar} alt="logo" width={600} height={600} />
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-between gap-y-8 py-12 md:flex-row md:gap-y-0">
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
          <div className="flex flex-row justify-between gap-x-4 text-left lg:gap-x-8 2xl:gap-x-16">
            <div className="flex flex-col gap-y-3">
              <span className="font-bold text-muted-foreground">
                {" "}
                Nos voitures
              </span>
              <ul className="flex flex-col gap-y-1 text-foreground/90">
                <Link href="/vehicules" className="xl:hover:text-foreground">
                  Classiques
                </Link>
                <Link href="/vehicules" className="xl:hover:text-foreground">
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
                  À propos
                </Link>
                <Link href="/contact" className="xl:hover:text-foreground">
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-between gap-y-2 border-t  py-6 text-sm text-foreground/70 md:max-w-2xl md:flex-row md:gap-y-0 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1400px]">
          <div className="flex flex-row gap-x-4">
            <Link href="/cgv" className="xl:hover:text-foreground">
              CGV
            </Link>
            <Link href="/mentions" className="xl:hover:text-foreground">
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
