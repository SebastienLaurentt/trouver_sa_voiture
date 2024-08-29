interface SectionProps {
  id?: string;
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "mb-32 md:mb-36 xl:mb-48" : "";
  const isMarginTop = marginTop ? "mt-20 md:mt-24 xl:mt-28" : "";

  return (
    <section
      id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} mx-auto px-2 md:max-w-xl lg:max-w-3xl xl:max-w-5xl `}
    >
      {children}
    </section>
  );
};

export default Section;
