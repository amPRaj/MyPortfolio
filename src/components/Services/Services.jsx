import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}> My</span>
        <span>Education</span>
        <spane>
        "Embarking on a Journey of Wisdom: Celebrating the Graduation Milestone
          <br />
          with an Abundance of Knowledge and a Passion for Lifelong Learning"
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"BE"}
            detail={"G M Institute of Technology Davanagere"}
            year={"2021 - 2024 "}
            c-button={"https://www.gmit.ac.in/"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Diploma"}
            detail={"Jain Group of Institutions, Davangere"}
            year={"2019 - 2021"}
            c-button={"https://www.jgi.ac.in/milestones-jgigroup.php"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"SCHOOL"}
            detail={"Vidya Sagar Convent Davanagere"}
            year={"2017 - 2018"}
            c-button={"https://in.infoaboutcompanies.com/Catalog/KA/Davanagere/Special-Education-School/Vidya-Sagar-Convent"}
            color="rgba(252, 166, 31, 0.45)"/>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
