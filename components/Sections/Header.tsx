"use client";

import { gsap } from "gsap";
import { Atom } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      "#header",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  const links = [
    { name: "Accueil", href: "/", ariaLabel: "Aller à l'accueil" },
    {
      name: "Véhicules",
      href: "/nos-vehicules",
      ariaLabel: "Voir nos véhicules",
    },
    {
      name: "Services",
      href: "/services",
      ariaLabel: "Voir les services et prestations",
    },

    { name: "Contact", href: "/contact", ariaLabel: "Nous contacter" },
  ];

  return (
    <header id="header" className="opacity-0 shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 ">
        <div className="flex flex-row items-center gap-x-1">
          <Atom size={28} className="text-primary" />
          <span className="text-3xl font-semibold">TSV</span>
        </div>
        <ul className="flex">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                aria-label={link.ariaLabel}
                className={
                  "xl:hover:bg-secondary rounded-sm px-2 py-2 transition-colors duration-500 ease-in-out" +
                  (pathname === link.href ? "" : "")
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
