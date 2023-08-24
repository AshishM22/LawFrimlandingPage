import React from "react";
import ClientCard from "../ClientCard/ClientCard";
import "./ClientReview.css";
import Client1 from "../../assets/Client1.png";
import Client2 from "../../assets/Client2.png";
import Client3 from "../../assets/Client3.png";
import Left from "..//..//assets/Left.png";
import Right from "..//..//assets/Right.png";

const ClientReview = () => {
  return (
    <div className="client-main-container">
      <div className="client-container1">
        <div className="client-container1-heading">
          What says our happy Clients
        </div>
        <div className="client-container1-button">
          <button>
            <img src={Left} />
          </button>
          <button style={{ backgroundColor: "#E3B748", marginLeft: "10px" }}>
            <img src={Right} />
          </button>
        </div>
      </div>
      <div className="client-container2">
        <ClientCard name="Jane Cooper" image={Client1} />
        <ClientCard name="Devon Lane" image={Client2} bgColor="#2E2E2E" />
        <ClientCard name="Robert Fox" image={Client3} />
      </div>
    </div>
  );
};

export default ClientReview;
