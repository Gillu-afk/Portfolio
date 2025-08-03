import React from "react";
import "./about.css";
import { files, resume, work2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={work2} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            I'm a passionate software engineer with expertise in machine
            learning, C programming, and full-stack development. I specialize in
            building robust, scalable applications that streamline real-time
            processes and solve complex problems efficiently. With a strong
            focus on performance and innovation, I aim to deliver impactful tech
            solutions. My goal is to bridge the gap between intelligent systems
            and seamless user experiences.
          </p>
          <a
            download="Sheik_Shah_Shuaib_Resume.pdf"
            href={resume}
            className="button button--flex"
          >
            Download CV
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
