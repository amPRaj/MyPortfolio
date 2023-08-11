import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, year, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>{year}</span>
      <a href="https://www.gmit.ac.in/">
      <button className="c-button">LEARN MORE</button></a>
    </div>
  );
};

export default Card;
