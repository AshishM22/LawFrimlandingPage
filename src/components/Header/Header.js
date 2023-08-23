import React from "react";
import LogoImage from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img src={LogoImage} alt="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
      </nav>
      <button>Contact Now</button>
    </header>
  );
};

export default Header;
