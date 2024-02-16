import React from "react";
import BlueButton from "./BlueButton";
import HollowBtn from "./HollowButton";

const Project = () => {
  return (
    <section id="project">
      <div className="w-full text-center">
        <h2 className="text-8xl">Projects</h2>
        <div className="flex flex-row">
          <div className="flex flex-col items-center m-auto border-3 rounded-3xl w-min p-6">
            <div className="h-40 w-64 img bg-center bg-cover rounded-3xl" />
            <h4 className="text-4xl">ToDo List</h4>
            <p className="text-sm w-11/12">
              The ToDo List web application allows users to create tasks, mark
              them as done or delete them.
            </p>
            <div className="flex flex-row justify-around w-full"> 
            <BlueButton name="Demo" />
            <HollowBtn name="Source" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
