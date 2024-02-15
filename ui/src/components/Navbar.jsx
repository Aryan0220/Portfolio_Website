import React from "react";
import NavElements from "./Nav_elements";
import BlueButton from "./BlueButton";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="flex flex-row justify-around bg-transparent items-center">
        <div className="text-4xl">Aryan Bargal</div>
        <ul className="flex flex-row gap-8 list-none ml-8">
          <NavElements href="#project" name="PROJECTS" />
          <NavElements href="#skill" name="SKILLS" />
          <NavElements href="#about" name="ABOUT" />
          <NavElements href="#contact" name="CONTACT" />
        </ul>
        <BlueButton name="Resume" />
      </nav>
    </div>
  );
};

export default Navbar;
