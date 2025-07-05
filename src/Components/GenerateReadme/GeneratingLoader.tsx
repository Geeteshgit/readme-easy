import React from "react";
import { BsStars } from "react-icons/bs";

const GeneratingLoader = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center gap-6 py-10">
        <BsStars className="text-4xl text-blue-500 scale-pulse" />
        <p className="text-lg sm:text-xl font-medium text-gray-600">
          Generating your README.md file...
        </p>
      </div>
    </div>
  );
};

export default GeneratingLoader;
