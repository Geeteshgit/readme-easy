import Link from "next/link";
import React from "react";
import { BsStars } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2 sm:gap-4 lg:gap-6 text-center font-archivo">
        <div className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-4 text-3xl sm:text-5xl lg:text-7xl font-extrabold">
          <h1>Readme writing? Easy.</h1>
          <h1>
            With <span className="text-blue-600">ReadmeEasy.</span>
          </h1>
        </div>
        <span className="text-sm sm:text-lg lg:text-xl flex items-center gap-1 text-neutral-700">
          No more blank<pre>README.md</pre>files
        </span>
      </div>
      <Link
        href="/generate"
        className="flex items-center gap-1 bg-blue-200 text-blue-600 border border-blue-300 hover:border-blue-600 rounded-lg px-6 py-2 hover:scale-[1.02] transition-all duration-300"
      >
        Generate README <BsStars />
      </Link>
    </div>
  );
};

export default Hero;