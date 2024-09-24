interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      {" "}
      <span className="rounded-full border border-primary px-4 py-2 text-primary">
        {number}
      </span>
      <h3 className="text-center lg:text-[28px]">{title}</h3>
      <p className="text-balance text-center ">{description}</p>
    </div>
  );
};

export default Step;
