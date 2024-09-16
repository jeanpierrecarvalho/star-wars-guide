import React, { memo } from "react";
import { Input } from "@material-tailwind/react";
import { useEntityContext } from "@/providers/EntityProvider";

const Actions: React.FC = () => {
  const { searchTerm, handleSearchChange } = useEntityContext();

  return (
    // @ts-expect-error Check in the future
    <Input
      color="yellow"
      size="lg"
      label="Search..."
      onChange={handleSearchChange}
      value={searchTerm}
      className="text-white"
    />
  );
};

export default memo(Actions);
