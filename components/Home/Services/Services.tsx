import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-30 pb-16" id="services">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Work with me to create{" "}
        <span className="text-cyan-400">impactful results.</span>
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-start">
        <div
          className="h-full"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/image copy 2.png"
            name="Web Apps/Sites"
            description="Designing web sites/apps that are easily interactive, efficient and ejoyable to use."
          />
        </div>

        <div
          className="h-full"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/image copy.png"
            name="Mobile App"
            description="Designing android and iOS mobile apps that are easily interactive, efficient and ejoyable to use."
          />
        </div>

        <div
          className="h-full"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/image copy 4.png"
            name="UI/UX Implementation"
            description="Implementing UI/UX design to actual interactive web and mobile app pages for efficient use."
          />
        </div>

        <div
          className="h-full"
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <ServiceCard
            icon="/images/image copy 3.png"
            name="UI/UX Optimization & Responsiveness"
            description="Optimizing user interfaces for responsiveness, accessibility, and consistency across different screen sizes and devices."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
