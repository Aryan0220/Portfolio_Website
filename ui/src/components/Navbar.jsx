import React from "react";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="flex flex-row justify-around bg-transparent items-center">
        <div className="text-4xl">Aryan Bargal</div>
        <ul className="flex flex-row gap-8 list-none ml-8">
          <li>
            <a
              href="#project"
              className="text-2xl  no-underline hover:text-indigo-500 hover:underline-offset-0.5 hover:underline hover:decoration-slate-200"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#skill"
              className="text-2xl  no-underline hover:text-indigo-500 hover:underline-offset-0.5 hover:underline hover:decoration-slate-200"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline-offset-0.5 text-2xl  no-underline hover:text-indigo-500  hover:underline hover:decoration-slate-200"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-2xl  no-underline hover:text-indigo-500 hover:underline-offset-0.5 hover:underline hover:decoration-slate-200"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <button
          className="resume text-resume border-3 border-indigo-500 bg-indigo-500 rounded-full px-3 py-1 hover:bg-transparent hover:border-slate-200"
          type="button"
        >
          Resume
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
