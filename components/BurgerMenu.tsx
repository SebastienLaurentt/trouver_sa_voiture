import { gsap } from "gsap";
import { Atom, Menu, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IBurgerMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

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

  useEffect(() => {
    // Close Button Opacity Animation
    gsap.fromTo(
      "#CloseBurgerMenu",
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    );

    // Logo Opacity Animation
    gsap.fromTo("#LogoBurgerMenu", { opacity: 0 }, { opacity: 1, duration: 3 });

    // Nav Opacity and Y translation Animation
    gsap.fromTo(
      "#NavBurgerMenu",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // Social Buttons Opacity and Y translation Animation
    gsap.fromTo(
      "#SocialBurgerMenu",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  });

  return (
    <>
      <button
        className="font-medium uppercase tracking-wider  lg:text-xl"
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu mobile"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed left-0 top-0 z-40 flex h-screen w-full flex-col   bg-black pb-24 pt-12 text-center transition-all duration-500 ease-in-out  ${
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
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/voitures/classiques">Voiture Classiques</Link>
            </li>
            <li>
              <Link href="/voitures/premium">Voiture Premium</Link>
            </li>
            <li>
              <Link href="/services/estimation">Estimation</Link>
            </li>
            <li>
              <Link href="/services/achat">Achat</Link>
            </li>
            <li>
              <Link href="/services/vente">Vente</Link>
            </li>
            <li>
              <Link href="/about">Equipe</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
