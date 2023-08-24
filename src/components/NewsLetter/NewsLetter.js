import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="container-for-background-color-adjustment">
      <div className="newsletter-main-container">
        <div className="newsletter-container--heading">
          Subscribe Our Newsletter
        </div>
        <div className="newsletter-container--input">
          <input type="text " placeholder="Name : " />
          <input type="text " placeholder="Enter you email" />
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
