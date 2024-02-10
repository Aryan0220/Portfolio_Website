import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Aryan Bargal</div>
      <ul className="nav-links">
        <li>
          <a href="#project">PROJECTS</a>
        </li>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <button className="resume" type="button">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
