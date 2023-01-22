import React from "react";
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
        <div className="greetings">
          <div className="greetings-content">Hey Their, This Is Hemanth</div>
        </div>
        {/* code */}
        <div className="code">
          <div className="code-heading">coder</div>
          <div className="code-sub1">Front end developer who Writes</div>
          <div className="code-sub2">clean, elegant and efficient code.</div>
        </div>
        {/* designer */}
        <div className="design">
          <div className="design-heading">design</div>
          <div className="design-sub1">Product designer specialising in UI</div>
          <div className="design-sub2">design and design system.</div>
        </div>
        {/* experience */}
        <div className="exp-num">0</div>
        <div className="exp-year-exp">YEARS EXPERIENCE</div>
      </div>
      {/* photo */}
      <div className="circle"></div>
    </div>
  );
};
export default Header;
