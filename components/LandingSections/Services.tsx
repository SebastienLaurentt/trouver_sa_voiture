"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services-container",
        start: "top 60%",
        once: true,
      },
    });

    tl.fromTo(
      "#services-container",
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: "power2.out" }
    ).fromTo(
      "#services-blur",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Section marginTop>
      <div
        id="services-container"
        className="relative rounded-xl bg-black p-4 opacity-0 md:p-0"
      >
        <div
          id="services-blur"
          className="pointer-events-none absolute left-1/2 top-0 size-1/2 -translate-x-1/2 rounded-full bg-primary/20 opacity-0 blur-[100px]"
        />

        <div className="relative z-10">
          <SectionHeader
            tag="Nos services"
            description="Vous accompagner dans vos démarches automobiles"
          />
          <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0">
            <Link
              href="/services/estimation"
              className="group flex w-full flex-col justify-between rounded-xl border border-gray-800 bg-black/50 p-8 transition-all duration-300 lg:w-1/2"
            >
              <div className="space-y-4">
                <h3>Estimation</h3>
                <p className="text-muted-foreground">
                  Obtenez une estimation précise de la valeur de votre véhicule
                  grâce à notre expertise . Nous analysons le marché pour vous
                  offrir une estimation juste et réaliste, vous aidant ainsi à
                  mieux valoriser votre bien.
                </p>
                <div className="flex flex-row items-center gap-x-2 font-semibold text-foreground">
                  <span>Faire estimer ma voiture</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </div>
              <Image
                src="/images/HeroImg.jpg"
                width={1000}
                height={1000}
                alt="Image de voiture"
                className="mb-8 hidden lg:block xl:mb-0"
              />
            </Link>
            <div className="flex w-full flex-col gap-4 md:flex-row lg:w-1/2 lg:flex-col lg:gap-x-0">
              <Link
                href="/services/achat"
                className="group space-y-4 rounded-xl border border-gray-800 bg-black/50 p-8 transition-all duration-300 "
              >
                <h3>Achat</h3>
                <p className="text-muted-foreground">
                  Laissez-nous vous accompagner dans l&apos;achat de votre
                  prochaine voiture. Nous vous guidons dans le choix du modèle
                  idéal, négocions les meilleures offres et vous aidons à chaque
                  étape jusqu&apos;à la livraison.
                </p>
                <div className="flex flex-row items-center gap-x-2 font-semibold text-foreground">
                  <span>Être accompagné</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </Link>
              <Link
                href="/services/vente"
                className="group space-y-4 rounded-xl border border-gray-800 bg-black/50 p-8 transition-all duration-300 "
              >
                <h3>Vente</h3>
                <p className="text-muted-foreground">
                  Maximisez la vente de votre voiture avec notre service dédié.
                  Nous vous aidons à préparer votre véhicule, le promouvoir
                  auprès des acheteurs potentiels et finaliser la transaction en
                  toute tranquillité.
                </p>
                <div className="flex flex-row items-center gap-x-2 font-semibold text-foreground">
                  <span>Être accompagné</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
