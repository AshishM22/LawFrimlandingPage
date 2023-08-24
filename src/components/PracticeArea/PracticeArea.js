import React from "react";
import bussinessLawImg from "../../assets/BusinessLaw.png";
import partnershipLawImg from "../../assets/partnerShipLaw.png";
import realEstateLawImg from "../../assets/RealEstatelaw.png";
import business2LawImg from "../../assets//BusinessLaw (2).png";
import landLordDisputeLawImg from "../../assets/LandLordDispute.png";
import elderAbuseLawImg from "../../assets/ElderAbuse.png";
import "./PracticeArea.css";

const practiceArea = () => {
  return (
    <div className="practice-area-main-container" id="practice-area">
      <div className="practice-area-main-container--text">
        Area of Practices
      </div>

      <div className="practice-area-main-container--images">
        <div className="practice-area-img-1  relative-container">
          <img src={bussinessLawImg} alt="practice-images" />
          <p>Business LAW</p>
        </div>

        <div className="practice-area-img-2 relative-container  ">
          <img src={partnershipLawImg} alt="practice-images" />
          <p>Partnership LAW </p>
        </div>

        <div className="practice-area-img-3 relative-container  ">
          <img src={realEstateLawImg} alt="practice-images" />
          <p>Real Estate LAW</p>
        </div>

        <div className="practice-area-img-4 relative-container ">
          <img src={business2LawImg} alt="practice-images" />
          <p>Business LAW</p>
        </div>

        <div className="practice-area-img-5 relative-container ">
          <img src={landLordDisputeLawImg} alt="practice-images" />
          <p>LandLord DISPUTES</p>
        </div>

        <div className="practice-area-img-6 relative-container  ">
          <img src={elderAbuseLawImg} alt="practice-images" />
          <p>Elder ABUSE</p>
        </div>
      </div>
    </div>
  );
};

export default practiceArea;
