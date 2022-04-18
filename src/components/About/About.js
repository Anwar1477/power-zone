import React from "react";
import "./About.css";
import profile from "../../Images/about/profile.JPG";

const About = () => {
  return (
    <div className="container ">
      <div className="info">
      <div>
        <h1>Anwar Hosen</h1>
        <p>Cell: +8801885812649, 01920552213</p>
        <p>Email: joy494949@gmail.com</p>
        <p>GitHub: https://github.com/Anwar1477</p>
        <h3>CAREER OBJECTIVES:</h3>
        <p>
          Be a dedicated team member who can be relied upon to help your
          organization achieve its goals and to secure a position where I can
          efficiently contribute my skills and abilities to the growth of the
          organization and build my professional career.
        </p>
      </div>
      <div className="image">
        <img src={profile} alt="" />
      </div>
      </div>
    </div>
  );
};

export default About;
