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
import { Atom, ChartNoAxesCombined, Handshake } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & {
      title: string;
      icon?: React.ElementType;
    }
  >(({ className, title, icon: Icon, children, ...props }, ref) => {
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
            <div className="flex flex-row items-center gap-x-4">
              {Icon && <Icon className="size-6" />}
              <div className="flex flex-col ">
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <header className="shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:max-w-2xl md:px-0 lg:max-w-4xl xl:max-w-7xl ">
        <div className="flex flex-row items-center gap-x-1">
          <Atom size={28} className="text-primary" />
          <span className="text-3xl font-semibold">TSV</span>
        </div>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Accueil
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/vehicules" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Nos Véhicules
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Nos Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-6 md:w-[400px]">
                  <ListItem
                    href="/services/estimation"
                    title="Estimation"
                    icon={ChartNoAxesCombined}
                  >
                    Notre service pour les estimations.
                  </ListItem>
                  <ListItem
                    href="/services/achat"
                    title="Achat"
                    icon={Handshake}
                  >
                    Notre service pour les achats.
                  </ListItem>
                  <ListItem
                    href="/services/vente"
                    title="Vente"
                    icon={Handshake}
                  >
                    Notre service pour les ventes.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  À propos
                </NavigationMenuLink>
              </Link>
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

        <div className="flex items-center lg:hidden">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
