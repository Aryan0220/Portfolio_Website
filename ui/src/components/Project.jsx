import React from "react";
import ProCards from "./ProjectCard";

const Project = () => {
  return (
    <section id="project" className="flex h-fit">
      <div className="flex flex-col w-full text-center">
        <h2 className="max-sm:text-6xl text-8xl pt-8 mb-10">Projects</h2>
        <div className="flex flex-row justify-around gap-3 w-full flex-wrap mt-10 h-min">
          <ProCards />
        </div>
      </div>
    </section>
  );
};

export default Project;
