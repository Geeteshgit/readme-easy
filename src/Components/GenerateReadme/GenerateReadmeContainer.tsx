"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { GeneratedCounter, GenerateForm, GeneratingLoader } from "@/Components/GenerateReadme/index";
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
