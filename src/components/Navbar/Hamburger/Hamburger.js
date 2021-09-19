import React from "react";
import "./Hamburger.css";



const Hamburger = (props) => {
  return (
    <div className="hamburger">
      <img src="/assets/images/Hamburger.png" alt="Hamburger icon" onClick={props.clicked}/>
    </div>
  );
};

export default Hamburger;
