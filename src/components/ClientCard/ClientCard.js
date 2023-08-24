import React from "react";
import "./ClientCard.css";

const ClientCard = ({ name, image, bgColor }) => {
  return (
    <div className="client-card" style={{ backgroundColor: bgColor }}>
      <img src={image} />

      <h3>{name}</h3>
      <h4 style={{ lineHeight: "24px" }}>Ceo of Hunt</h4>
      <p className="client-card-casual-text">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

export default ClientCard;
