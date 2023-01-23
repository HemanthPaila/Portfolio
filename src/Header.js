import React from "react";
import Greeting from "./Greeting";
import Code from "./Code";
import Design from "./Design";
import Experience from "./Experience";
import "./Header.css";
const Header = () => {
  return (
    <div className="body">
      <div className="main-body">
        {/* <div className="navbar"> */}
        <div className="app-logo">Logo</div>
        <div className="ABOUT">ABOUT</div>
        <div className="EDUCATION">EDUCATION</div>
        <div className="SKILLS">SKILLS</div>
        <div className="PROJECTS">PROJECTS</div>
        <Greeting />
        <Code />
        <Design />
        <Experience />
      </div>
    </div>
  );
};
export default Header;
