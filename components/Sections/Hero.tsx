"use client";

import { gsap } from "gsap";
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
        <p className="my-4 text-xl">
          Explorez des annonces de voitures neuves et d&apos;occasion. Comparez
          les modèles et trouvez celle qui vous convient.
        </p>
        <Button>
          <Link href="/">Trouver ma voiture</Link>
        </Button>
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
      <div>

      </div>
    </Section>
  );
};

export default Hero;
