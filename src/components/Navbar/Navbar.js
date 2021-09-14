import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/images/Logo-white.png";
import Hamburger from "./Hamburger/Hamburger";

const Navbar = (props) => {
  return (
    <header class="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="IH logo" />
        </Link>
      </div>
      <div className="navigation__items">
        <div className="navigation__item">
          <Link to="/ideas">Our Team</Link>
          <Link to="/ideas">Achievements</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
      <Hamburger clicked = {props.hamburgerClicked} />
    </header>
  );
};

export default Navbar;
