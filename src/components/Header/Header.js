import React from "react";
import LogoImage from "../../assets/Logo.png";
import "./Header.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="header-container">
      <img src={LogoImage} alt="logo" />
      <Nav />
      <button>Contact Now</button>
    </header>
  );
};

export default Header;
