import React from "react";
import "./IntroComponent.css";
import SuccessCard from "../SuccessCard/SuccessCard";

const IntroComponent = () => {
  return (
    <div className="intro-main-container" id="about-us">
      <div className="intro-container1">
        <div style={{ fontSize: "54px", width: "387px" }}>
          Let’s Introduce Ourself
        </div>
        <div className="intro-container--vertical-divider"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "2rem",
          }}
        >
          <h3>Criminal Lawyer</h3>
          <p className="intro-container-casual-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>

      <div className="intro-container2">
        <div style={{ fontSize: "54px", margin: "186px 0 97px 0" }}>
          Why Choose us?
        </div>
        <div className="success-card-group">
          <SuccessCard bgColor="#1D1D1D" rate={98} />
          <SuccessCard bgColor="#2E2E2E" rate={100} />
          <SuccessCard bgColor="#1D1D1D" rate={100} />
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
