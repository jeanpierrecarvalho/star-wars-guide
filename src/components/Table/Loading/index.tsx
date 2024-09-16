import React from "react";

const Loading: React.FC = () => {
  return (
    <React.Fragment>
      <div className="z-10 absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
        <span className="text-xl text-yellow-500">
          Patience you must have, my young Padawan...
        </span>
      </div>
    </React.Fragment>
  );
};

export default Loading;
