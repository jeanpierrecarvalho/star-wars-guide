import React, { memo } from "react";
import { ENTITY_TYPE } from "@/constants/entities";
import MenuItem from "@/components/Menu/MenuItem";

const Menu: React.FC = () => {
  return (
    <div
      className="justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8"
      role="navigation"
      aria-label="Main Menu"
    >
      {Object.entries(ENTITY_TYPE).map(([key, { entity, img }]) => (
        <MenuItem
          key={key}
          href={`/${entity}`}
          imageSrc={img.src}
          imageAlt={img.alt}
          title={entity}
        />
      ))}
    </div>
  );
};

export default memo(Menu);
