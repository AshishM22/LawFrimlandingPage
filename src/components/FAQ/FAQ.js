import React from "react";
import "./FAQ.css";
import Accordian from "./Accordian";

const FAQ = () => {
  return (
    <div className="faq-main-container">
      <div className="faq-text-container">
        <div className="faq-text--headline">FAQ</div>
        <div className="faq-text--casual">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </div>
      </div>
      <div className="faq-accordian-container">
        <Accordian />
      </div>
    </div>
  );
};

export default FAQ;
