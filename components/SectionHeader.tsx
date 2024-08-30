interface SectionHeaderProps {
  tag: string;
  description: string;
}

const SectionHeader = ({ tag, description }: SectionHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col items-center gap-x-2 md:mb-12">
      <span className="text-muted-foreground"> {tag} </span>{" "}
      <h2 className="text-center md:w-[350px] lg:w-[380px] xl:w-full"> {description}</h2>
    </div>
  );
};

export default SectionHeader;
