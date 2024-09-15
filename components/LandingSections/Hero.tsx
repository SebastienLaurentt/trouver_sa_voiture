"use client";

import { gsap } from "gsap";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Section from "../Section";
import { Button } from "../ui/button";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo("#hero-text", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      "#hero-img",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <Section classname="my-32 text-center ">
      <div id="hero-text" className="opacity-0">
        <h1>
          Trouvez la voiture de{" "}
          <span className="text-primary"> vos rêves </span> en quelques clics !
        </h1>
        <p className="subtitle my-4 text-muted-foreground">
          {" "}
          Explorez les voitures neuves et d’occasion. Comparez et trouvez votre
          modèle idéal.{" "}
        </p>
        <Button>
          <Link href="/">Trouver ma voiture</Link>
        </Button>
        <Link
          href="https://g.co/kgs/6c2xQVQ"
          className="mt-6 flex flex-col items-center justify-center gap-y-2 md:flex-row md:gap-x-3"
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center gap-x-1 font-bold">
              <Image
                src="/images/GoogleLogo.svg"
                width={80}
                height={80}
                alt="Google Logo"
              />
              <span>5/5</span>
            </div>
            <div className="flex flex-row justify-center gap-x-0">
              <Star fill="#cead6f" color="#cead6f" />
              <Star fill="#cead6f" color="#cead6f" />
              <Star fill="#cead6f" color="#cead6f" />
              <Star fill="#cead6f" color="#cead6f" />
              <Star fill="#cead6f" color="#cead6f" />
            </div>
          </div>
          <span className="w-[200px] text-center text-sm md:text-left ">
            +90 clients sont satisfaits par nos différents services
          </span>
        </Link>
      </div>
      <div
        id="hero-img"
        className=" mt-2 flex flex-row justify-center opacity-0"
      >
        <Image
          src="/images/HeroImg.jpg"
          width={1000}
          height={1000}
          alt="hero"
        />
      </div>
      <div></div>
    </Section>
  );
};

export default Hero;
