import React from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-dark.css";

const ReadmePreview = ({ readme }: { readme: string }) => {
  return (
    <div className="bg-[#0D1117] h-screen flex flex-col rounded-xl sm:rounded-3xl overflow-hidden">
      <div className="self-end text-white py-3 px-5">
        <span className="border border-gray-700 rounded-lg px-2 py-1">
          Preview
        </span>
      </div>
      <article
        className={`text-left markdown-body overflow-y-auto overflow-x-hidden p-5`}
      >
        <ReactMarkdown>{readme}</ReactMarkdown>
      </article>
    </div>
  );
};

export default ReadmePreview;
