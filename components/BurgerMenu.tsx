import { Atom, Menu, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Liste des liens de navigation
const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/voitures/classiques", label: "Voiture Classiques" },
  { href: "/voitures/premium", label: "Voiture Premium" },
  { href: "/services/estimation", label: "Estimation" },
  { href: "/services/achat", label: "Achat" },
  { href: "/services/vente", label: "Vente" },
  { href: "/about", label: "Equipe" },
  { href: "/contact", label: "Contact" },
];

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  return (
    <>
      <button
        className="font-medium uppercase tracking-wider lg:text-xl"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed left-0 top-0 z-40 flex h-screen w-full flex-col bg-black pb-24 pt-12 text-center transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "hidden opacity-0"
        }`}
      >
   
        <button
          id="CloseBurgerMenu"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu mobile"
          className="absolute right-6 top-6 lg:right-20"
        >
          <X className="lg:size-10" />
        </button>

      
        <div className="mt-24 flex flex-col gap-y-20">
          
          <div className="flex flex-row items-center justify-center gap-x-1">
            <Atom size={44} className="text-primary" />
            <span className="text-5xl font-semibold">TSV</span>
          </div>

          <ul className="flex flex-col gap-y-2 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
