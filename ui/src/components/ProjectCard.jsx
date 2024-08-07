import React from "react";
import BlueButton from "./BlueButton";
import HollowBtn from "./HollowButton";
import projects from "../assets/data/projects.json";

const ProCards = (props) => {
  return projects.map((project) => {
    return (
      <div className="flex flex-col items-center mb-6 border-3 dark:border-slate-200 border-zinc-800 rounded-3xl w-[19rem] p-6 justify-between h-[26rem] backdrop-blur-md bg-gray-500/30 dark:bg-indigo-800/20">
        <img
          src={project.img}
          alt="Project Preview"
          className="h-40 w-64 object-cover rounded-3xl"
        />
        <h4 className="text-4xl dark:text-indigo-200 mt-1">{project.title}</h4>
        <p className="text-md dark:text-sm w-11/12 my-1">
          {project.description}
        </p>
        <div className="flex flex-row justify-around w-full mt-1">
          <BlueButton name="Demo" link={project.demo} />
          <HollowBtn name="Source" link={project.source} />
        </div>
      </div>
    );
  });
};

export default ProCards;
