import React from "react";
import skills from "../assets/data/skills.json";

const Skill = () => {
  return (
    <section id="skill" className="h-fit my-6">
      <div className="flex flex-col w-full text-center h-full">
        <h2 className="max-sm:text-6xl text-8xl pt-10 mb-10">Skills</h2>
        <div className="flex max-md:flex-col max-md:items-center justify-around items-start">
          {skills.map((skill) => {
            return (
              <div className="flex flex-col justify-center mb-4">
                <h2 className="max-sm:text-4xl dark:no-underline underline text-5xl dark:text-indigo-200 text-zinc-700 mb-2">
                  {skill.title}
                </h2>
                <ul className="list-none">
                  {skill.list.map((item) => {
                    return (
                      <li className="max-sm:text-2xl text-3xl my-2">{item}</li>
                    );
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
