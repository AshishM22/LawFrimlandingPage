import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#about-us">Attorneys</a>
        </li>
        <li>
          <a href="#practice-area">Practice Areas</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
