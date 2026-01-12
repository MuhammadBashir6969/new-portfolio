import React from "react";
import { SiCss3, SiHtml5, SiJavascript, SiNativescript } from "react-icons/si";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 ">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <div>
          <a
            href="https://bashir-e-commerce-dummy.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Images/image copy 5.png"
              alt="img"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </a>
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
            <a
              href="https://bashir-e-commerce-dummy.netlify.app/"
              className="text-cyan-200 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo e-commerce website
            </a>
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
