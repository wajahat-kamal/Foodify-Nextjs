import React from "react";
import { projectsData } from "../assets/assets.js";
import Image from "next/image.js";
import ProjectCard from "./ProjectCard";

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
          <ProjectCard project={project} index={index}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
