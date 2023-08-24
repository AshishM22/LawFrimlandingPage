import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png";
import twit from "../../assets/TwitIcon.png";
import fb from "../../assets/FbIcon.png";
import insta from "../../assets/InstaIcon.png";
import pint from "../../assets/PintIcon.png";
import Nav from "../Nav/Nav";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-container1">
        <img src={logo} />
        <Nav />
        <div className="icon-container">
          <img src={insta} />
          <img src={fb} />
          <img src={twit} />
          <img src={pint} />
        </div>
      </div>
      <div className="footer-container2">
        <div>© 2020 Acme. All right reserved.</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
