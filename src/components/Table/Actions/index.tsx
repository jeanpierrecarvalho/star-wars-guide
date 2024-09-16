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
      <Input
        color="yellow"
        size="lg"
        label="Search..."
        onChange={handleSearchChange}
        value={searchTerm}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
        className="text-white"
      />
    </React.Fragment>
  );
};

export default memo(Actions);
