import React from "react";

const Frontend = () => {
  const frontendSkills3 = [
    {
      name: "HTML",
      icon: "bx bxl-html5 skills_icon",
    },
    {
      name: "CSS",
      icon: "bx bxl-css3 skills_icon",
    },
    {
      name: "Java",
      icon: "bx bxl-java skills_icon",
    },
    {
      name: "C",
      icon: "devicon-c-plain skills_icon",
    },
  ];
  const frontendSkills6 = [
    {
      name: "Visual Studio Code",
      icon: "bx bxl-visual-studio skills_icon",
    },
    {
      name: "Ubuntu",
      icon: "fa-brands fa-ubuntu skills_icon",
    },
    {
      name: "Git / GitHub",
      icon: "bx bxl-github skills_icon",
    },
    {
      name: "Figma",
      icon: "fa-brands fa-figma skills_icon",
    },
  ];
  return (
    <div className="skills__content">
      <h3 className="skills__title">Programming & Tools</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frontendSkills3.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="skills__group">
          {frontendSkills6.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className={skill.icon}></i>
              <div>
                <h3 className="skills__name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
