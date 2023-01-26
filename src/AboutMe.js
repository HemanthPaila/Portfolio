import React from "react";
import "./AboutMe.css";
import ExperienceDesc from "./ExperienceDesc";
const AboutMe = () => {
  return (
    <div className="body1">
      <div className="main-body1">
        <div className="main-about__container">
          <div className="about-content">ABOUT</div>
        </div>
        <div className="about">
          <p>
            I am Hemanth. I am pursuing a bachelor's degree in computer science
            and engineering at KL University. I am motivated to practice
            real-world problems daily and achieve big in the future. My biggest
            aspiration is to become a full-stack web developer and an app
            developer.
          </p>
        </div>
        <div className="person-img"></div>
        <ExperienceDesc />
      </div>
    </div>
    // </div>
  );
};
export default AboutMe;
