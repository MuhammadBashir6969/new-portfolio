"use client";
import React, { useEffect } from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    { name: "HTML", icon: <SiHtml5 />, percentage: 98 },
    { name: "CSS", icon: <SiCss3 />, percentage: 98 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 98 },
    { name: "JavaScript", icon: <SiJavascript />, percentage: 89 },
    { name: "TypeScript", icon: <SiTypescript />, percentage: 80 },
    { name: "React.js", icon: <SiReact />, percentage: 90 },
    { name: "React Native", icon: <SiReact />, percentage: 90 },
    { name: "Next.js", icon: <SiNextdotjs />, percentage: 90 },
  ];

  return (
    <div className="text-white pt-60 pb-16" id="skills">
      <h1
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        My <span className="text-cyan-200">Skills:</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, index) => {
          const delay = (index + 1) * 100; // 100ms, 200ms, 300ms ...
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                data-aos="fade-right"
                data-aos-delay={delay}
                data-aos-anchor-placement="top-center"
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-150"
              >
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold">{skill.percentage}%</p>
                <p className="text-green-400">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
