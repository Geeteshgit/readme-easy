import React from "react";
import { BsStars } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Fill Out a Simple Form",
    description: "Enter your project's title, tech stack, and key details in a simple form.",
    icon: <GrDocumentText />,
  },
  {
    title: "Let AI Do the Heavy Lifting",
    description: "AI instantly generates a professional README.md for your project.",
    icon: <BsStars />,
  },
  {
    title: "Customize to Fit Your Style",
    description: "Review or fine-tune the README to match your project's voice.",
    icon: <GoPencil />,
  },
  {
    title: "Get Your README",
    description: "Export your final README as a file or copy it with one click.",
    icon: <HiOutlineDocumentArrowDown />,
  },
];


const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center gap-10 my-5 text-center">
      <p className="text-lg sm:text-3xl lg:text-5xl font-archivo">
        Skip the typing. Let AI write your docs.
      </p>
      <div className="flex items-center gap-10">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2 p-4">
            <div className="text-4xl">{step.icon}</div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-sm opacity-75">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
