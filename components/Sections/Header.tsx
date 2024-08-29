"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { Atom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Header: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      "#header",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <header id="header" className="hidden opacity-0 shadow-md xl:block">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 ">
        <div className="flex flex-row items-center gap-x-1">
          <Atom size={28} className="text-primary" />
          <span className="text-3xl font-semibold">TSV</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Véhicules</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Image
                        src="/images/Car50.avif"
                        alt="Photo de voiture"
                        width={180}
                        height={180}
                        className="rounded-md"
                      />
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/voitures/classiques" title="Classiques">
                    Venez découvrir les vehicules classiques de notre catalogue.
                  </ListItem>
                  <ListItem href="/voitures/premium" title="Premium">
                    Venez découvrir les vehicules premium de notre catalogue.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-6 md:w-[340px]">
                  <ListItem href="/services/estimation" title="Estimation">
                    Notre service pour les estimations.
                  </ListItem>
                  <ListItem href="/services/achat" title="Achat">
                    Notre service pour les achats.
                  </ListItem>
                  <ListItem href="/services/vente" title="Vente">
                    Notre service pour les ventes.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Header;
