import React from "react";
import about from "../assets/data/about.json";

const About = () => {
  return (
    <section id="about" className="h-[91vh]">
      <div className="flex flex-col w-full text-center h-full">
        <h2 className="text-8xl pt-8 mb-10">About</h2>
        <div className="flex justify-center items-center gap-6">
          <img
            src="/backgroung_img.jpg"
            className="bg-cover h-[30rem] w-80 rounded-3xl px-4 ml-6"
          />
          <ul className="flex flex-col list-style-none text-justify h-full justify-center w-3/6 mr-16 gap-4">
            {about.map((item) => {
              return (
                <li className="text-lg dark:text-indigo-100">
                  {item.paragraph}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
