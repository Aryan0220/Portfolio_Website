import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import HomeBtn from "./HomeButton";
import Mode from "./Mode";

const App = () => {
  return (
    <div>
      <Mode />
      <Navbar />
      <Home />
      <HomeBtn />
      <Project />
      <Skill />
      <About />
      <Contact />
    </div>
  );
};

export default App;
