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

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Estimation",
      href: "/services/estimation",
      description: "Notre service pour les estimations",
    },
    {
      title: "Achat",
      href: "/services/achat",
      description: "Notre service pour les achats",
    },
    {
      title: "Vente",
      href: "/services/vente",
      description: "Notre service pour les ventes",
    },
  ];

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
    <header id="header" className="opacity-0 shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 ">
        <div className="flex flex-row items-center gap-x-1">
          <Atom size={28} className="text-primary" />
          <span className="text-3xl font-semibold">TSV</span>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/accueil" legacyBehavior passHref>
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
                      <a
                        className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Classiques">
                    Les vehicules classiques.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Premium">
                    Les vehicules Premiums
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
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
