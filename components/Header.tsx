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
import { ChartNoAxesCombined, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/images/LogoWhite.png";
import BurgerMenu from "./BurgerMenu";
import { Button } from "./ui/button";

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
      <nav className="relative mx-auto flex items-center justify-between px-6 py-4 md:max-w-2xl md:px-0 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1400px]">
        <Link href="/" className="flex flex-row items-center gap-x-1">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </Link>
        <NavigationMenu className="hidden lg:absolute lg:left-1/2 lg:block lg:-translate-x-1/2">
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
                  À Propos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button asChild variant="secondary" className="hidden lg:block">
          <Link href="/contact">Nous contacter</Link>
        </Button>

        <div className="flex items-center lg:hidden">
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
