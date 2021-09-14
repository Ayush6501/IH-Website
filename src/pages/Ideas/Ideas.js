import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/Navbar/SideDrawer/SideDrawer";
import "./Ideas.css";
import IdeasModel from "./IdeasModel";

const Ideas = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      <Navbar hamburgerClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <div className="ideas">
        <div className="ideas__form">
          <h1>Pitch us your idea!</h1>
        </div>
        <div className="ideas__model">
          <IdeasModel />
        </div>
      </div>
    </>
  );
};

export default Ideas;
