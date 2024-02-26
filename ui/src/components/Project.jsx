import React from "react";
import ProCards from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="flex h-fit">
      <div className="flex flex-col w-full text-center h-full">
        <h2 className="max-sm:text-6xl text-8xl pt-8 mb-10">Projects</h2>
        <div className="flex max-md:flex-col flex-row justify-center items-center mt-10 h-full">
          <ProCards />
        </div>
      </div>
    </section>
  );
};

export default Project;
