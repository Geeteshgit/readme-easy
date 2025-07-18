"use client";
import React, { useEffect, useState } from "react";

const GeneratedCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const getGeneratedCounter = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/counter`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setCount(data);
    } catch (err) {
      console.error((err as Error).message);
    }
  };
  useEffect(() => {
    getGeneratedCounter();
  }, []);

  return (
    <p className="text-lg sm:text-2xl lg:text-3xl">
      <strong>{count ? (count + "+") : 0}</strong> READMEs generated so far 🚀
    </p>
  );
};

export default GeneratedCounter;
