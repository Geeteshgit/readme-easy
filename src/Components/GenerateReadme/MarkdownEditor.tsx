"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { MdContentCopy } from "react-icons/md";
import { ReadmeProps } from "@/types/props";
import { useCopy } from "@/hooks/useCopy";
import { LuCheck } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";

const MarkdownEditor: React.FC<ReadmeProps> = ({ readme, setReadme }) => {
  const { isCopied, copyHandler } = useCopy();
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) setReadme(value);
  };

  return (
    <div className="h-screen bg-[#1E1E1E] flex flex-col rounded-xl sm:rounded-3xl overflow-hidden">
      <div className="flex items-center gap-4 self-end text-blue-300 py-2 px-5">
        <button
          onClick={() => copyHandler(readme)}
          className="text-lg sm:text-xl rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          {isCopied ? <LuCheck /> : <MdContentCopy />}
        </button>
        <a
          href={`data:text/markdown;charset=utf-8,${encodeURIComponent(
            readme
          )}`}
          download="README.md"
          className="text-lg sm:text-xl rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          <FiDownload />
        </a>
        <span className="text-sm border border-gray-700 rounded-lg px-2 py-1">
          README.md
        </span>
      </div>
      <Editor
        height="100%"
        width="100%"
        defaultLanguage="markdown"
        language="markdown"
        theme="vs-dark"
        value={readme}
        onChange={handleEditorChange}
        options={{
          fontSize: 14,
          wordWrap: "on",
          minimap: { enabled: false },
          padding: { top: 20, bottom: 20 },
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
          },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
};

export default MarkdownEditor;
