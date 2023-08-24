import React from "react";
import "./Team.css";
import TeamCard from "../TeamCard/TeamCard";
import TeamMember1 from "../../assets/TeamMember1.png";
import TeamMember2 from "../../assets/TeamMember2.png";
import TeamMember3 from "../../assets/TeamMember3.png";
import TeamMember4 from "../../assets/TeamMember4.png";
import TeamMember5 from "../../assets/TeamMember5.png";
import TeamMember6 from "../../assets/TeamMember6.png";

const Team = () => {
  return (
    <div className="team-main-container" id="about-us">
      <div className="team-conatiner-heading">Our Team</div>
      <div className="team-conatiner-data">
        <TeamCard image={TeamMember1} name="Danial Def" cases={301} />
        <TeamCard
          image={TeamMember2}
          name="Sanfole"
          cases={850}
          active="active"
        />
        <TeamCard image={TeamMember3} name="Cesforila" cases={470} />
        <TeamCard image={TeamMember4} name="Colleen" cases={180} />
        <TeamCard image={TeamMember5} name="Haldone" cases={212} />
        <TeamCard image={TeamMember6} name="Nik Jeo" cases={350} />
      </div>
    </div>
  );
};

export default Team;
