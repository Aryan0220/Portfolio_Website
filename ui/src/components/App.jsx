import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import HomeBtn from "./HomeButton";

const App = () => {
  return (
    <div>
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
