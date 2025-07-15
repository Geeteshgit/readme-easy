"use client";
import { useProjectForm } from "@/hooks/useProjectForm";
import { GenerateFormProps } from "@/types/props";
import React, { FormEvent } from "react";
import toast from "react-hot-toast";
import { BsStars } from "react-icons/bs";

const GenerateForm: React.FC<GenerateFormProps> = ({
  setIsGenerating,
  setIsGenerated,
  setReadme,
}) => {
  const { project, changeHandler } = useProjectForm();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsGenerating(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(project),
        }
      );
      const data = await response.json();
      setReadme(data);
      setIsGenerated(true);
    } catch (err) {
      console.error((err as Error).message);
      toast.error("Failed to generate README");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
      className="relative w-full flex flex-col gap-5 bg-white p-6 sm:p-8 lg:p-10 rounded-xl"
    >
      <p className="text-sm sm:text-base lg:text-lg opacity-75 font-archivo mb-5">
        Filling more fields helps AI generate a sharper, more tailored README.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-5">
        <label
          htmlFor="title"
          className="text-lg lg:text-xl font-roboto-mono text-nowrap"
        >
          Project Title
        </label>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Eg. ReadmeEasy"
          onChange={changeHandler}
          value={project.title}
          className="w-full border-b-2 outline-none pl-1 text-lg"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label
          htmlFor="description"
          className="text-lg lg:text-xl font-roboto-mono"
        >
          Project Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={5}
          placeholder="A short description about the project and main features"
          onChange={changeHandler}
          value={project.description}
          className="w-full border-2 outline-none resize-none p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="usage" className="text-lg lg:text-xl font-roboto-mono">
          Usage Steps
        </label>
        <textarea
          name="usage"
          id="usage"
          rows={5}
          placeholder="Basic steps on usage of project"
          onChange={changeHandler}
          value={project.usage}
          className="w-full border-2 outline-none resize-none p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <label
          htmlFor="technologies"
          className="text-lg lg:text-xl font-roboto-mono"
        >
          Technologies Used
        </label>
        <input
          name="technologies"
          id="technologies"
          type="text"
          placeholder="Eg. Next.js, Tailwind CSS etc."
          onChange={changeHandler}
          value={project.technologies}
          className="w-full border-b-2 outline-none pl-1"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-5">
        <label
          htmlFor="live"
          className="text-lg lg:text-xl font-roboto-mono text-nowrap"
        >
          Project Live Link
        </label>
        <input
          name="live"
          id="live"
          type="text"
          placeholder="Your Project's Live Link"
          onChange={changeHandler}
          value={project.live}
          className="w-full border-b-2 outline-none pl-1"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-5">
        <label
          htmlFor="author"
          className="text-lg lg:text-xl font-roboto-mono text-nowrap"
        >
          Author
        </label>
        <input
          name="author"
          id="author"
          type="text"
          placeholder="Author of the Project"
          onChange={changeHandler}
          value={project.author}
          className="w-full border-b-2 outline-none pl-1"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-5">
        <label
          htmlFor="contact"
          className="text-lg lg:text-xl font-roboto-mono text-nowrap"
        >
          Contact
        </label>
        <input
          name="contact"
          id="contact"
          type="text"
          placeholder="Eg. Email or LinkedIn"
          onChange={changeHandler}
          value={project.contact}
          className="w-full border-b-2 outline-none pl-1"
        />
      </div>
      <button className="flex items-center gap-1 bg-blue-500 text-white px-6 py-2 rounded-md hover:scale-[1.02] transition-transform duration-300 self-end cursor-pointer">
        Generate <BsStars />
      </button>
    </form>
  );
};

export default GenerateForm;
