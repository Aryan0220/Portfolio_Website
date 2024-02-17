import React from "react";
import skills from "../assets/data/skills.json";

const Skill = () => {
  return (
    <section id="skill" className="h-[91vh] mt-6">
      <div className="flex flex-col w-full text-center h-full">
        <h2 className="text-8xl pt-10 mb-10">Skills</h2>
        <div className="flex justify-around items-start">
          {skills.map((skill) => {
            return (
              <div className="flex flex-col justify-center">
                <h2 className="text-5xl text-indigo-200 mb-2">{skill.title}</h2>
                <ul className="list-none">
                  {skill.list.map((item) => {
                    return <li className="text-3xl my-2">{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
