interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <span className="mb-2 flex size-12 items-center justify-center rounded-full border-2 border-primary text-xl font-bold text-primary">
        {number}
      </span>
      <h3 className="mb-0.5 text-center lg:text-[28px]">{title}</h3>
      <p className="text-balance text-center ">{description}</p>
    </div>
  );
};

export default Step;
