import React from "react";
import { BsStars } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    title: "Fill Out a Simple Form",
    description:
      "Enter your project's title, tech stack, and short description in a simple form.",
    icon: <GrDocumentText />,
  },
  {
    title: "Let AI Do the Heavy Lifting",
    description:
      "AI instantly generates a professional README.md for your project.",
    icon: <BsStars />,
  },
  {
    title: "Customize to Fit Your Style",
    description:
      "Review or fine-tune the README to match your project's voice.",
    icon: <GoPencil />,
  },
  {
    title: "Get Your README",
    description: "Get your polished README in one click.",
    icon: <HiOutlineDocumentArrowDown />,
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center gap-5 sm:gap-10 lg:gap-15 mt-10 text-center">
      <p className="text-lg sm:text-3xl lg:text-5xl font-semibold font-archivo">
        Skip the typing. Let AI write your docs.
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:gap-5">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center gap-2 p-4">
              <div style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} className="bg-blue-300 text-blue-600 text-xl sm:text-2xl p-3 rounded-xl">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
              <p className="text-sm opacity-75">{step.description}</p>
            </div>
            {idx < steps.length - 1 && (
              <HiArrowNarrowRight className="text-2xl sm:text-3xl text-blue-600/50 rotate-90 lg:rotate-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
