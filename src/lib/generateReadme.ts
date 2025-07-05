import { ProjectDetails } from "@/types/project";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});

export const generateReadme = async (project: ProjectDetails) => {
  try {
    const projectData = JSON.stringify(project);
    const prompt: string = `
You are an expert open-source README.md file writer.

Generate a professional and engaging README.md file **based ONLY on the provided JSON project data**.

Here's how to behave:

1. If the project data has values for fields like title, description, etc. — use them and fill the appropriate sections accordingly.
2. If any field is missing or empty — still include that section but write a placeholder indicating that content should go there.
3. Do **not** add any explanation or commentary — only return the full markdown content of the README file.

📦 **Sections to include** (in order):
(use appropriate emojis according to the title and the sections)

- Project Title
- Description
- Live Demo (if available)
- Features (as a list with bullet points and emojis)
- Tech Stack
- Installation
- Screenshots (leave space and markdown syntax)
- Usage / How it works
- Folder Structure
- Contributions (encourage contributions)
- Upcoming Features (as bullet list)
- License
- Contact (Author with Contact details)

At the last add a small message something like - This is written by ReadmeEasy for fast and professional documentation

Here is the project data in JSON format:
\`\`\`json
${JSON.stringify(projectData, null, 2)}
\`\`\`

📌 Output only the **README.md file content**, no commentary or markdown code blocks.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (err) {
    console.error((err as Error).message);
  }
};
