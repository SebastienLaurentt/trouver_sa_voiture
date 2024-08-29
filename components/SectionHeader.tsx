interface SectionHeaderProps {
  tag: string;
  description: string;
}

const SectionHeader = ({ tag, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-x-2">
      <span className="text-muted-foreground"> {tag} </span> <h2> {description}</h2>
    </div>
  );
};

export default SectionHeader;
