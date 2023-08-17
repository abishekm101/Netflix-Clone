import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center p-80 bg-black">
      <span className="relative flex h-3 w-3 ">
        <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className=" rounded-full h-3 w-3 bg-red-600"></span>
      </span>
    </div>
  );
};

export default Loading;
