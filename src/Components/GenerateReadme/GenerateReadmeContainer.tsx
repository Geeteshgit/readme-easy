"use client";
import React, { useState } from "react";
import GenerateForm from "./GenerateForm";
import GeneratingLoader from "./GeneratingLoader";
import GeneratedCounter from "./GeneratedCounter";
import dynamic from "next/dynamic";
const ReadmeContainer = dynamic(() => import("./ReadmeContainer"));

const GenerateReadmeContainer = () => {
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [readme, setReadme] = useState<string>("");
  return (
    <>
      {isGenerating && <GeneratingLoader />}
      {!isGenerated && !isGenerating && (
        <>
          <GenerateForm
            setIsGenerating={setIsGenerating}
            setIsGenerated={setIsGenerated}
            setReadme={setReadme}
          />
          <GeneratedCounter />
        </>
      )}
      {isGenerated && !isGenerating && (
        <ReadmeContainer readme={readme} setReadme={setReadme} />
      )}
    </>
  );
};

export default GenerateReadmeContainer;
