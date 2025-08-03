import React from "react";
import { send } from "../../assets/assets";
import TextDecrypt from "../Utils/TextDecrypt";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <TextDecrypt text={"Rahul G"} />
      </h1>

      <TypeAnimation
        sequence={["Java Developer", 2000, "FullStack Developer", 2000]}
        cursor={false}
        wrapper="span"
        speed={4}
        className="home__subtitle"
        repeat={Infinity}
      />

      <p className="home__description">
        Passionate about crafting scalable full-stack solutions, I fuse machine
        learning and C programming to streamline real-time systems and deliver
        impactful software innovations.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send icon" className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
