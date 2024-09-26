"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { Star } from "lucide-react";
import { HTMLAttributes, useEffect, useRef, useState } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const TESTIMONIALS = [
  {
    text: "Très content de mon achat. Vendeur sympa qui a bien répondu à mes attentes. Satisfait également du montant de la reprise de mon ancien véhicule, ce qui m’a évité de gérer moi même la vente. Je recommande ce pro",
    name: "Laurent",
    date: "Juin 2024",
  },
  {
    text: "Nous avons acheté notre véhicule PGO et tout s'est très bien passé. Un excellent contact, du sérieux, des réponses franches à vos interrogations. Tout est simple. Nous sommes venus en train de Normandie et Serge est venu nous récupérer , je recommande cette entreprise si vous cherchez un véhicule spécifique, n'hésitez pas à le contacter.",
    name: "Delphine",
    date: "Avril 2023",
  },
  {
    text: "Encore merci Serge pour la vente de mon ancienne voiture et l’acquisition de la nouvelle … je suis très très satisfaite de la prestation que ce soit pour la vente ou pour l’achat. Toujours arrangeant et aidant !!! Tout s’est goupillé parfaitement bien !!! La voiture acquise correspond à 100% à mes attentes (budget, modèle, finition …) !! A bientôt pour la vente et l’achat de mon prochain véhicule !!",
    name: "Inès",
    date: "Mars 2024",
  },
  {
    text: "J’ai acheté une voiture dans ce garage, je le recommande très fortement, j’ai eu à faire a Amaury et aussi à Serge, tout les deux sont super et extrêmement pro ! Encore merci !",
    name: "Thomas",
    date: "Juin 2024",
  },
  {
    text: "Nous sommes ravis d'avoir vendu notre véhicule avec les services de 'Trouver sa voiture' à Civrieux. Le patron Serge est au top, je vous le conseille ! C'est quelqu'un de sérieux et aux petits soins pour ses clients qu'on soit acheteurs ou vendeurs. Très belle expérience, en leur souhaitant une belle continuation !",
    name: "Yoann",
    date: "Janvier 2023",
  },
  {
    text: "Je suis plus que satisfait de mon achat 🤩 J'ai pour habitude de ne jamais passer par des professionnels pour l'achat de mes véhicules ! Mais alors là, je qualifierais Serge de passionné, professionnel et sérieux ! N'hésitez pas avec 'Trouver sa voiture' Je peux que vous le recommander, vous serez plus que satisfait !!!",
    name: "Fabien",
    date: "Novembre 2023",
  },
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: { text: string; name: string; date: string }[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          text={review.text}
          name={review.name}
          date={review.date}
        />
      ))}
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  name: string;
  date: string;
}

function Review({ text, name, date, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] border p-8 opacity-100 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <p className="text-pretty">{text}</p>
      <span className="mt-4 block text-sm ">{name}</span>
      <span className="font-semibold text-primary">{date}</span>
      <div className="mt-2 flex flex-row gap-x-0">
        <Star fill="#cead6f" color="#cead6f" />
        <Star fill="#cead6f" color="#cead6f" />
        <Star fill="#cead6f" color="#cead6f" />
        <Star fill="#cead6f" color="#cead6f" />
        <Star fill="#cead6f" color="#cead6f" />
      </div>
    </div>
  );
}

function ReviewGrid({ isVisible }: { isVisible: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const columns = splitArray(TESTIMONIALS, 3); // Change to 3 columns
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = columns[2];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative  mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden  sm:mt-20 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3", // Add xl:grid-cols-3
        isVisible && "animate-fade-in"
      )}
    >
      {isVisible ? (
        <>
          <ReviewColumn reviews={column1} msPerPixel={30} />
          <ReviewColumn
            reviews={column2}
            className="hidden md:block"
            msPerPixel={40}
          />
          <ReviewColumn
            reviews={column3}
            className="hidden xl:block"
            msPerPixel={30}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#000]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#000]" />
    </div>
  );
}

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <Section marginBottom marginTop>
      <div
        ref={containerRef}
        className=" opacity-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: isInView ? 1 : 0 }}
      >
        <SectionHeader
          tag="Avis clients"
          description="Ils sont satisfaits de nos services"
        />
        <ReviewGrid isVisible={isInView} />
      </div>
    </Section>
  );
}
