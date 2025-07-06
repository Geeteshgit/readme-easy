import { ProjectDetails } from "@/types/project";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({});

export const generateReadme = async (project: ProjectDetails) => {
  try {
    const projectData = JSON.stringify(project);
    const prompt: string = `
You are a professional technical writer and open-source README.md expert.

🎯 Your task is to generate a clean, polished, and fully formatted \`README.md\` file using the provided JSON project data.

---

### 🧠 Behavior Guidelines:
1. If a **title** is provided, use it as the main heading with \`#\` and add an emoji that best represents the project.  
   - If **no title is provided**, use \`# 🚀 Project Title\`.
2. Directly under the title, write a clear and engaging **description** of the project (maximum 500 characters).
   - If description is missing, infer and generate one from context.
   - If description is given, enhance it and generate an engaging and professional description accordingly 
3. All other sections should be added with proper markdown using \`##\` headers, **each with a relevant emoji**.
4. If any field is missing, generate professional placeholder content.
5. In the **Features** and **Upcoming Features** sections:
   - Use \`-\` bullets with relevant emojis for each feature
   - No extra indentation or spacing
6. The **Tech Stack** section should be grouped by categories:
   - Each category (e.g. Frontend, Backend, Database) should be written in **bold** and on **new line**, like:
     \`**Frontend:** React, Tailwind CSS\`
7. The **Installation** section must with numbered steps:
   - Use separate \`\`\`bash\`\`\` code blocks for each step
8. The **Contributions** section should use a **numbered list** for steps in a format like:
   1. Fork the repository
   2. Clone your fork
   3. Create a new branch
   4. Make your changes
   5. Submit a pull request
9. The **Screenshots** section must **not include images**, only a placeholder like:  
   \`_Add screenshots here_\`
10. The **Contact** section should include in new lines:
    - Author Name
    - Email
    Each on **a new line**
11. At the end, include this signature:
> ❤️ This README was written by **ReadmeEasy** for fast and professional documentation.

---

### 📦 Sections to include (in order) with relevant emojis:
- Project Title (with emoji) and Description
- Live Demo
- Features (with emojis and each feature in a new line)
- Tech Stack (grouped, each category on new line)
- Installation
  - Steps (bash blocks)
  - Environment Variables (single line placeholder)
- Screenshots
- Usage / How it Works
- Folder Structure (give a sample folder structure)
- Contributions (numbered list)
- Upcoming Features (with emojis and each feature in a new line)
- License
- Contact (Name, Email)

---

🧾 Here is the project data in JSON format:

\`\`\`json
${JSON.stringify(projectData, null, 2)}
\`\`\`

📌 Return **only** the final \`README.md\` file content. Do **not** include any explanation, commentary, or markdown code block fences.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    return response.text;
  } catch (err) {
    console.error((err as Error).message);
  }
};
