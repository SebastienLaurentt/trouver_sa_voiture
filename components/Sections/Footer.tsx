import { Atom } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="hidden border-t xl:block">
      <div className="mx-auto flex max-w-4xl flex-row justify-between py-12">
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
              <Link href="/services/estimation" className="xl:hover:text-foreground">
                Estimation
              </Link>
              <Link href="/services/achat" className="xl:hover:text-foreground">
                Acheter
              </Link>
              <Link href="/services/vente" className="xl:hover:text-foreground">
                Vendre
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="font-bold text-muted-foreground">
              Plus d&apos;infos
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
      <div className="mx-auto flex max-w-4xl flex-row justify-between border-t py-6 text-sm text-foreground/70">
        <div className="flex flex-row gap-x-4">
          <Link href="/" className="xl:hover:text-foreground">
            CGV
          </Link>
          <Link href="/" className="xl:hover:text-foreground">
            Mentions légales
          </Link>
        </div>
        <span>@2024 Trouver Sa Voiture</span>
      </div>
    </footer>
  );
};

export default Footer;
