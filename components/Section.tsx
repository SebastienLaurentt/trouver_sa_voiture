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
  const isMarginTop = marginTop ? "mt-20" : "";

  return (
    <section
      id={id}
      className={`${classname} ${isMarginBottom} ${isMarginTop} mx-auto px-6 md:max-w-2xl md:px-0 lg:max-w-3xl xl:max-w-5xl `}
    >
      {children}
    </section>
  );
};

export default Section;
