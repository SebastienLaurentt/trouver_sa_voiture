import React from "react";

type LoaderProps = {
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({ color }) => {
  return (
    <div
      className={`animate-spin rounded-full ${color} size-5 border-4 border-t-transparent `}
    />
  );
};

export default Loader;
