import React from "react";
import { projectsData } from "../assets/assets.js";
import Image from "next/image.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto py-16 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-white">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-primary font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-400 mb-10 max-w-md mx-auto text-sm sm:text-base">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Project Cards Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[45%] lg:w-[22%] flex-shrink-0"
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-auto mb-14 rounded-lg shadow-lg"
            />

            {/* Floating Card Info */}
            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
              <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md text-center">
                <h2 className="text-lg  font-semibold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {project.price} <span className="px-1">|</span>{" "}
                  {project.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
