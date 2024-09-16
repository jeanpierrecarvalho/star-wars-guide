import React, { memo } from "react";
import { Input } from "@material-tailwind/react";

interface IProps {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Actions: React.FC<IProps> = ({
  searchTerm,
  handleSearchChange,
}: IProps) => {
  return (
    <React.Fragment>
      {/* @ts-expect-error todo: solve this type */}
      <Input
        color="yellow"
        size="lg"
        label="Search..."
        onChange={handleSearchChange}
        value={searchTerm}
        className="text-white"
      />
    </React.Fragment>
  );
};

export default memo(Actions);
