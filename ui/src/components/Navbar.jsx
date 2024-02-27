import React, { useState } from "react";
import NavElements from "./Nav_elements";
import BlueButton from "./BlueButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex flex-row justify-around items-center m-4 h-[9vh]">
      <div className="text-4xl">Aryan Bargal</div>
      <ul className="flex flex-row gap-8 max-lg:hidden list-none items-center ml-8">
        <NavElements href="#project" name="PROJECTS" />
        <NavElements href="#skill" name="SKILLS" />
        <NavElements href="#about" name="ABOUT" />
        <NavElements href="#contact" name="CONTACT" />
        <li className="ml-20">
          <BlueButton
            name="Resume"
            link="https://drive.google.com/file/d/1ecgrQD3cZBl4NGA6as9IqLjY3zh3xrWi/view?usp=sharing"
          />
        </li>
      </ul>
      <div className="lg:hidden" onClick={() => setToggle((prev) => !prev)}>
        {!toggle ? (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              className="dark:stroke-indigo-200 stroke-zinc-900"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5L5 19M5.00001 5L19 19"
              className="dark:stroke-indigo-200 stroke-zinc-900"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        <div
          className={`${toggle ? "flex" : "hidden"} z-10 top-20 right-4 absolute bg-gradient-to-r dark:from-zinc-800 from-indigo-100 dark:via-zinc-900 via-indigo-200 dark:to-zinc-800 to-indigo-100 px-4 rounded-xl`}
        >
          <ul className="flex flex-col gap-4 list-none items-center m-2">
            <NavElements href="#project" name="PROJECTS" />
            <NavElements href="#skill" name="SKILLS" />
            <NavElements href="#contact" name="CONTACT" />
            <li className="mb-2">
              <BlueButton
                name="Resume"
                link="https://drive.google.com/file/d/1ecgrQD3cZBl4NGA6as9IqLjY3zh3xrWi/view?usp=sharing"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
