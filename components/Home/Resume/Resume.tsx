import React from "react";
import ResumeCard from "./ResumeCard";
import { FaCode, FaCodepen } from "react-icons/fa6";

const Resume = () => {
  return (
    <div className="text-white pt-40 pb-20" id="resume">
      <div className="w-[90%] sm:w-[70%] mx-auto flex gap-10">
        {/* WORK */}
        <div>
          {/* Heading with AOS */}
          <h1
            className="text-3xl sm:text-4xl font-bold text-white"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            My Work <span className="text-cyan-200">Experience:</span>
          </h1>

          <div className="mt-10 space-y-6">
            {/* First ResumeCard */}
            <div data-aos="fade-up" data-aos-delay="200">
              <ResumeCard
                icon={FaCodepen}
                role="Freelance Front-end Developer"
                date="October 2025 - November 2025"
                company="Recon Brothers"
                description="Implemented frontend logic and modern UI/UX design, Refined and modernized existing website designs, improved visual consistency while optimizing components performance and responsiveness."
              />
            </div>

            {/* Second ResumeCard */}
            <div data-aos="fade-up" data-aos-delay="300">
              <ResumeCard
                icon={FaCodepen}
                role="Freelance Front-end Developer"
                company="Paysabil"
                date="November 2025 - Present"
                description="Collaborated closely with UI/UX designers to deliver a polished and user-friendly interface for Android and iOS. Implemented frontend logic and contributed to improving user experience and app performance."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
