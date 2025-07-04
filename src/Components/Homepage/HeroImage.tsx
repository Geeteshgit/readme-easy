import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      className="relative h-[300px] sm:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden"
    >
      <Image src="/placeholder.png" alt="preview-img" fill />
    </div>
  );
};

export default HeroImage;
