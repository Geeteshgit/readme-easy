import { ProjectDetails } from "@/types/project";
import { ChangeEvent, useState } from "react";

export const useProjectForm = () => {
  const [project, setProject] = useState<ProjectDetails>({
    title: "",
    description: "",
    usage: "",
    technologies: "",
    live: "",
    author: "",
    contact: "",
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { project, changeHandler };
};
