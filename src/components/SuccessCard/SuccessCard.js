import React from "react";
import "./SuccessCard.css";
import successCardImg from "../../assets/Gift.png";

const SuccessCard = ({ rate, bgColor }) => {
  return (
    <div className="success-card" style={{ backgroundColor: bgColor }}>
      <div className="success-card-image-container">
        <img src={successCardImg} />
      </div>
      <h3>{rate}% Success Rate</h3>
      <p className="success-card-casual-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button>Read more</button>
    </div>
  );
};

export default SuccessCard;
