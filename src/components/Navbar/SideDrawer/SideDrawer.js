import React, { useState } from "react";
import "./SideDrawer.css";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  let attachedClasses = ["sidedrawer", "close"];

  if (props.open) {
    attachedClasses = ["sidedrawer", "open"];
  }

  return (
    <>
      <div className={attachedClasses.join(" ")} onClick={props.closed}>

        <div className="sidedrawer__back">
        <img src="/assets/logos/logo-back.svg"/>
        </div>

        <div className="sidedrawer__name">
          <h1>Innovators Hub</h1>
        </div>

        <Link to="/" className="sidedrawer__links">
        HomePage
        </Link>

        <Link to="/about" className="sidedrawer__links">
        About
        </Link>

        <Link to="/ideas" className="sidedrawer__links">
        Ideas
        </Link>

        <Link to="/projects" className="sidedrawer__links">
        Projects
        </Link>

        <Link to="/events" className="sidedrawer__links">
        Events
        </Link>

        <Link to="/ourteam" className="sidedrawer__links">
        Our Team
        </Link>

        <Link to="/achievements" className="sidedrawer__links">
        Gallery
        </Link>

        <Link to="/recruitment" className="sidedrawer__links">
        Recruitment
        </Link>
      </div>

      <Backdrop show={props.open} clicked={props.closed} />
    </>
  );
};

export default SideDrawer;
