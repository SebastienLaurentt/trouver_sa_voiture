'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

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
    <header className=" shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">Logo</div>
        <ul className="flex space-x-8">
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
