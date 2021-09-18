import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/Navbar/SideDrawer/SideDrawer";
import "./Ideas.css";
import IdeasModel from "./IdeasModel";
import { RadioGroup, RadioButton } from "react-radio-buttons";

const Ideas = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const valueRef = useRef();

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const radioSelectionHandler = (event) => {
    console.log(event.target.value);
  }

  return (
    <>
      <Navbar hamburgerClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <div className="ideas_full_page">
        <div className="ideas__model">
          <IdeasModel />
        </div>
        <div className="ideas">
          <div className="ideas__form">
            <div className="ideas__form__container">
              <h1>Pitch us your idea!</h1>
              <div className="ideas__division">
                <div className="ideas__division__image">
                  <h2>This is an image</h2>
                </div>
                <div className="ideas__division__form">
                  <h2>Fill in the form</h2>
                  <div className="ideas__division_formcontent">
                    <form className="formcontent__LI">
                      <label
                        for="name"
                        style={{ color: "#474444", fontWeight: 500 }}
                      >
                        1. Your Name
                      </label>
                      <br />
                      <input type="text" placeholder="Type your Name" />
                      <br />
                      <label
                        for="email"
                        style={{ color: "#474444", fontWeight: 500 }}
                      >
                        2. Your Email
                      </label>
                      <br />
                      <input type="text" placeholder="Type your Email" />
                      <br />
                      <label
                        for="email"
                        style={{ color: "#474444", fontWeight: 500 }}
                      >
                        3. Your Project Idea
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Tell us about your project"
                      />
                      <br />
                      <label style={{ color: "#474444", fontWeight: 500 }}>
                        4. Your Project is related to which field of Study?
                      </label>
                      <br />
                      <RadioGroup style={{ width: "75%" }} >
                        <RadioButton
                          value="AppWeb"
                          rootColor="#474444"
                          iconSize="20px"
                          padding="20px"
                        >
                          App/Web Development
                        </RadioButton>
                        <RadioButton
                          value="AIMLDL"
                          rootColor="#474444"
                          iconSize="20px"
                          padding="20px"
                        >
                          AI/ML/DL
                        </RadioButton>
                        <RadioButton
                          value="Blockchain"
                          rootColor="#474444"
                          iconSize="20px"
                          padding="20px"
                        >
                          Blockchain
                        </RadioButton>
                        <RadioButton
                          value="cybersecurity"
                          rootColor="#474444"
                          iconSize="20px"
                          padding="20px"
                        >
                          Cyber Security
                        </RadioButton>
                      </RadioGroup>
                      {/* <ul>
                        <li>
                          <input type="radio" id="f-option" name="selector" />
                          <label for="f-option">App/Web Development</label>

                          <div class="check"></div>
                        </li>

                        <li>
                          <input type="radio" id="s-option" name="selector" />
                          <label for="s-option">AI/ML/DL</label>

                          <div class="check">
                            <div class="inside"></div>
                          </div>
                        </li>

                        <li>
                          <input type="radio" id="t-option" name="selector" />
                          <label for="t-option">Blockchain</label>

                          <div class="check">
                            <div class="inside"></div>
                          </div>
                        </li>
                      </ul> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ideas;
