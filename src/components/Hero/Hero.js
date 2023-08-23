import React from "react";
import HeroImg from "../../assets/HeroImage.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <div className="hero-text--heading">
          You don't have to Fight them Alone
        </div>
        <div className="hero-text--casualText">
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </div>
        <div className="hero-container--input">
          <input type="text" placeholder="Enter your email address" />
          <button>Let's Talk</button>
        </div>
      </div>

      <div className="hero-img">
        <div className="green-background--img"></div>
        <img src={HeroImg} />
      </div>
    </div>
  );
};

export default Hero;
