"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo("#header", { opacity: 0 }, { opacity: 1, duration:1, delay:0.5 });
  }, []);

  const links = [
    { name: "Accueil", href: "/", ariaLabel: "Aller à l'accueil" },
    { name: "Premium", href: "/premium", ariaLabel: "Voir la section Premium" },
    {
      name: "Nos véhicules",
      href: "/nos-vehicules",
      ariaLabel: "Voir nos véhicules",
    },
    {
      name: "Services et prestations",
      href: "/services",
      ariaLabel: "Voir les services et prestations",
    },
    {
      name: "Qui sommes nous",
      href: "/about",
      ariaLabel: "En savoir plus sur nous",
    },
    { name: "Contact", href: "/contact", ariaLabel: "Nous contacter" },
  ];

  return (
    <header id="header" className="opacity-0 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        <Image src="/images/Rolls.svg" width={60} height={50} alt="logo" color="text-white"/>
        <ul className="flex space-x-4">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                aria-label={link.ariaLabel}
                className={
                  "xl:hover:text-primary" +
                  (pathname === link.href ? " text-primary" : "")
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
