import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import Logo from "../public/images/LogoWhite.png";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Liste des liens de navigation
const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/vehicules", label: "Nos Véhicules" },
  { href: "/services/estimation", label: "Estimation" },
  { href: "/services/achat", label: "Achat" },
  { href: "/services/vente", label: "Vente" },
  { href: "/about", label: "A Propos" },
  { href: "/contact", label: "Contact" },
];

export default function BurgerMenu({ isOpen, setIsOpen }: IBurgerMenu) {
  useEffect(() => {
    // Désactiver le défilement de la page principale lorsque le menu est ouvert
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }

    // Nettoyage de l'effet
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
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
        className={`fixed left-0 top-0 z-40 flex min-h-screen w-full flex-col bg-black pb-24 pt-12 text-center transition-all duration-500 ease-in-out ${
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
            <Image src={Logo} alt="logo" width={200} height={200} />
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
