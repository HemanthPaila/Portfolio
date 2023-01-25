import React from "react";
import Greeting from "./Greeting";
import Code from "./Code";
import Design from "./Design";
import Experience from "./Experience";
import "./Header.css";
import Project from "./Project";
import Developer from "./Developer";
import Social from "./Social";
const Header = () => {
  return (
    <div className="body">
      <div className="main-body">
        <div className="app-logo">Logo</div>
        <div className="ABOUT">ABOUT</div>
        <div className="EDUCATION">EDUCATION</div>
        <div className="SKILLS">SKILLS</div>
        <div className="PROJECTS">PROJECTS</div>
        <Greeting />
        <Code />
        <Design />
        <Experience />
        <Project />
        <Developer />
        <Social />
      </div>
    </div>
  );
};
export default Header;
