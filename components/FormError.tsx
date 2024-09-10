interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  return <p className="text-red-500">{message}</p>;
};

export default FormError;
