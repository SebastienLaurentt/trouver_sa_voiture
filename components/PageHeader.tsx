"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  useEffect(() => {
    gsap.fromTo(
      "#title",
      { opacity: 0, y: -5 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
    gsap.fromTo(
      "#description",
      { opacity: 0, y: -5 },
      { opacity: 1, y: 0, duration: 1.2 }
    );
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center px-4 text-center md:max-w-xl lg:max-w-3xl xl:w-[700px] xl:max-w-5xl">
      <h1 id="title" className="mb-4 opacity-0">
        {title}
      </h1>
      <p id="description" className="subtitle opacity-0">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
