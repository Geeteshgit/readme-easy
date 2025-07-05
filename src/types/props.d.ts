export interface ReadmeProps {
  readme: string;
  setReadme: (val: string) => void;
}

export interface GenerateFormProps {
  setIsGenerating: (val: boolean) => void;
  setIsGenerated: (val: boolean) => void;
  setReadme: (val: string) => void;
}