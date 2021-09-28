import React, { useState } from "react";
import "./SideDrawer.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = ["sidedrawer", "close"];

  if (props.open) {
    attachedClasses = ["sidedrawer", "open"];
  }

  return (
    <>
      <div className={attachedClasses.join(" ")} onClick={props.closed}>

        <div className="sidedrawer__back">
        <img src="/assets/images/back.svg"/>
        </div>
        
        <div className="sidedrawer__name">
          <h1 style={{ color: "#282727" }}>Innovator's Hub</h1>
        </div>

        <div className="sidedrawer__links">HomePage
        </div>
        <div className="sidedrawer__links">HomePage
        </div>
        <div className="sidedrawer__links">HomePage
        </div>


      </div>


      <Backdrop show={props.open} clicked={props.closed} />
    </>
  );
};

export default SideDrawer;
