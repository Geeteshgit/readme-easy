import GenerateReadmeContainer from "@/Components/GenerateReadme/GenerateReadmeContainer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Generate README - ReadmeEasy",
  description: "Generate clean, professional README.md files effortlessly using AI. Just fill out a simple form and let ReadmeEasy handle the rest.",
};

const Generate = () => {
  return (
    <main className="flex-1 flex flex-col items-center px-4 sm:px-12 lg:px-18 py-4 sm:py-6 lg:py-8 gap-10 sm:gap-15 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="flex items-center gap-2 lg:gap-4 text-3xl sm:text-5xl lg:text-7xl font-semibold font-archivo">Generate <pre className="text-blue-600">README.md</pre></h1>
        <p className="sm:text-lg lg:text-xl opacity-75">Fill in the form, and AI does the rest.</p>
      </div>
      <GenerateReadmeContainer />
    </main>
  );
};

export default Generate;