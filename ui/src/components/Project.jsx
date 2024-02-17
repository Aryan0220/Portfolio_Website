import React from "react";
import ProCards from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="flex h-[91vh]">
      <div className="flex flex-col w-full text-center h-full">
        <h2 className="text-8xl pt-8 mb-10">Projects</h2>
        <div className="flex flex-row justify-center mt-10 h-full">
          <ProCards />
        </div>
      </div>
    </section>
  );
};

export default Project;
