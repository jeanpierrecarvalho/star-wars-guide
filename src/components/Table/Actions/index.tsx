import React, { memo } from "react";
import { Input } from "@material-tailwind/react";
import { useEntityContext } from "@/providers/EntityProvider";

const Actions: React.FC = ({}) => {
  const context = useEntityContext();

  const { searchTerm, handleSearchChange } = context;

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
