import React from "react";
import NavElements from "./Nav_elements";
import BlueButton from "./BlueButton";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav className="flex flex-row justify-around items-center m-4 h-[9vh]">
        <div className="text-4xl">Aryan Bargal</div>
        <ul className="flex flex-row gap-8 list-none ml-8">
          <NavElements href="#project" name="PROJECTS" />
          <NavElements href="#skill" name="SKILLS" />
          <NavElements href="#about" name="ABOUT" />
          <NavElements href="#contact" name="CONTACT" />
        </ul>
        <BlueButton
          name="Resume"
          link="https://drive.google.com/file/d/1ecgrQD3cZBl4NGA6as9IqLjY3zh3xrWi/view?usp=sharing"
        />
      </nav>
    </div>
  );
};

export default Navbar;
