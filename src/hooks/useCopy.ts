"use client";
import { useState } from "react";

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyHandler = async (text: string) => {
    try {
      if (isCopied) return;
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error((err as Error).message);
    }
  };
  return { isCopied, copyHandler };
};
