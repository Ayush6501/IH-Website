import React from "react";
import "./Hamburger.css";
import HamburgerLogo from "../../../assets/images/Hamburger.png";


const Hamburger = (props) => {
  return (
    <div className="hamburger">
      <img src={HamburgerLogo} alt="Hamburger icon" onClick={props.clicked}/>
    </div>
  );
};

export default Hamburger;
