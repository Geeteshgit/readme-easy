import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div
      style={{ boxShadow: "rgba(37, 99, 235, 0.7) 0px 8px 24px" }}
      className="relative w-full rounded-xl overflow-hidden h-[250px] sm:h-[400px] lg:h-[550px]"
    >
      <Image src="/hero.png" alt="preview-img" fill priority />
    </div>
  );
};

export default HeroImage;
