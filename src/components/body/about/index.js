import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Creat service requests for many brands!
         <br /> <span className="info-name">Service Pit Stop</span>.
         <br /> One place for all your service requests for numerous companies. 
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/repair.png")}
            className="picture"
          />
        </div>
      </div>
      
    </div>
  );
}

export default About;