import React from "react";
import "./TeamCard.css";

const TeamCard = ({ image, name, cases, active }) => {
  return (
    <div className={`team-card-container ${active}`}>
      <img src={image} />
      <div className="team-member-data">
        <div className="team-member-data--name">{name}</div>
        <div className="team-member-data--cases">{cases} cases</div>
      </div>
    </div>
  );
};

export default TeamCard;
