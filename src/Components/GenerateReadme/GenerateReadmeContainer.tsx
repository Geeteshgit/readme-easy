"use client";
import React, { useState } from "react";
import GenerateForm from "./GenerateForm";
import GeneratingLoader from "./GeneratingLoader";
import ReadmeContainer from "./ReadmeContainer";
import GeneratedCounter from "./GeneratedCounter";

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
