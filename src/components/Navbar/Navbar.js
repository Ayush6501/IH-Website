import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "./Hamburger/Hamburger";

const Navbar = (props) => {
  return (
    <header class="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/images/Logo-white.png" alt="IH logo" />
        </Link>
      </div>
      <div className="navigation__items">
        <div className="navigation__item">
          <Link to="/about">About</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/events">Events</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/ideas">Ideas</Link>
          <Link to="/ourteam">Team</Link>
          <Link to="/alumini">Alumini</Link>
        </div>
      </div>
      <div className="recruit_cta">
        <Link to="recruitment">
          <button className="cta_button">Recruitment</button>
        </Link>
      </div>
      <Hamburger clicked={props.hamburgerClicked} />
    </header>
  );
};

export default Navbar;
