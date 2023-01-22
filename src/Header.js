import React from "react";
import Greeting from "./Greeting";
import Code from "./Code";
import Design from "./Design";
import Experience from "./Experience";
import Circle from "./Circle";
import "./Header.css";
const Header = () => {
  return (
    <div className="body">
      <div className="main-body">
        {/* <div className="navbar"> */}
        <div className="app-logo">Logo</div>
        <div className="service">SERVICE</div>
        <div className="works">WORKS</div>
        <div className="notes">NOTES</div>
        <div className="experiences">EXPERIENCES</div>
        <Greeting />
        <Code />
        <Design />
        <Experience />
      </div>
      <Circle />
    </div>
  );
};
export default Header;
