import React from "react";

interface IProps {
  error: string;
}

const Error: React.FC<IProps> = ({ error }: IProps) => {
  return (
    <React.Fragment>
      {" "}
      <p className="mt-8 text-center text-red-500">{error}</p>
    </React.Fragment>
  );
};

export default Error;
