"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export const useCopy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyHandler = async (text: string) => {
    try {
      if (isCopied) return;
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      toast.success("Copied!");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error((err as Error).message);
      toast.error("Failed to Copy!");
    }
  };
  return { isCopied, copyHandler };
};
