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
          <Link to="/ourteam">Our Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About Us</Link>
          <Link to="/ideas">Pitch Us</Link>
          <Link to="/events">Events</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
      <div className='recruit_cta'>
          <Link to='recruitment'><button className='cta_button'>Join Us</button></Link>
      </div>
      <Hamburger clicked = {props.hamburgerClicked} />
    </header>
  );
};

export default Navbar;
