import React from "react";
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
        <img src="/assets/logos/logo-back.svg" alt="logo"/>
        </div>

        {/* <Link to="/about">About</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/events">Events</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/ideas">Ideas</Link>
          <Link to="/ourteam">Team</Link>
          <Link to="/alumni">Alumni</Link> */}

        <div className="sidedrawer__name">
          <h1>Innovators Hub</h1>
        </div>

        <Link to="/" className="sidedrawer__links">
        HomePage
        </Link>

        <Link to="/about" className="sidedrawer__links">
        About
        </Link>
        
        <Link to="/achievements" className="sidedrawer__links">
        Achievements
        </Link>

        <Link to="/events" className="sidedrawer__links">
        Events
        </Link>

        <Link to="/projects" className="sidedrawer__links">
        Projects
        </Link>

        <Link to="/ideas" className="sidedrawer__links">
        Ideas
        </Link>

        <Link to="/ourteam" className="sidedrawer__links">
        Our Team
        </Link>

        <Link to="/Alumni" className="sidedrawer__links">
        Alumni
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
