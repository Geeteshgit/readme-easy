import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-12 lg:px-18 py-3 border-t border-blue-400/15 bg-[#DEF6FA]">
      <div className="flex flex-col items-center gap-2 opacity-85">
        <p className="flex items-center gap-1 text-sm sm:text-base">
          Made with <FaHeart /> by{" "}
          <a
            href="https://geeteshdalal.vercel.app"
            target="_blank"
            className="underline"
          >
            @Geetesh Dalal
          </a>
        </p>
        <p className="opacity-75 text-xs">
          Copyright &copy; 2025 ReadmeEasy - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
