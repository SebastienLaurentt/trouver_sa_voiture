import { Atom } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
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
            <span className="font-bold text-secondary-foreground">
              {" "}
              Nos voitures
            </span>
            <ul className="flex flex-col gap-y-1">
              <Link href="/" className="xl:hover:text-foreground/80">
                Classiques
              </Link>
              <Link href="/" className="xl:hover:text-foreground/80">
                Premium
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="font-bold text-secondary-foreground">
              Nos Services
            </span>
            <ul className="flex flex-col gap-y-1">
              <Link href="/" className="xl:hover:text-foreground/80">
                Estimation
              </Link>
              <Link href="/" className="xl:hover:text-foreground/80">
                Acheter
              </Link>
              <Link href="/" className="xl:hover:text-foreground/80">
                Vendre
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="font-bold text-secondary-foreground">
              Plus d&apos;infos
            </span>
            <ul className="flex flex-col gap-y-1">
              <Link href="/" className="xl:hover:text-foreground/80">
                Equipe
              </Link>
              <Link href="/" className="xl:hover:text-foreground/80">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-4xl flex-row justify-between border-t py-6 text-sm text-secondary-foreground">
        <div className="flex flex-row gap-x-4">
          <Link href="/" className="xl:hover:font-semibold">
            CGV
          </Link>
          <Link href="/" className="xl:hover:font-semibold">
            Mentions légales
          </Link>
        </div>
        <span>@2024 Trouver Sa Voiture</span>
      </div>
    </footer>
  );
};

export default Footer;
