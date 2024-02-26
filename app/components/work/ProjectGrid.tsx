import ProjectCard from "./ProjectCard";
import { projects, ProjectProps } from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
  return (
    <>
      <div className="mb-10 flex w-full items-center justify-center gap-16   text-[#e4ded7]   md:mb-16  lg:mb-20 ">
        {/* <h4
          className={` left-0 flex items-start justify-center   px-5 text-[15px] opacity-70  md:text-[20px] lg:text-[25px] ${"text-[#e4ded7]"}`}
        >
          Check out some of my Work !
        </h4> */}

        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
          {projects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              techNames={project.techNames}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectGrid;
