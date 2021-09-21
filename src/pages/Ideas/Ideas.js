import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/Navbar/SideDrawer/SideDrawer";
import "./Ideas.css";
import IdeasModel from "./IdeasModel";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { Player } from "@lottiefiles/react-lottie-player";

const Ideas = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const formRef = useRef();

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const radioSelectionHandler = (val) => {
    console.log(val);
  };

  const scrollClickHandler = (event) => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar hamburgerClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <div className="ideas_full_page">
        <div className="ideas__model">
          <IdeasModel scroll={scrollClickHandler} />
        </div>
        <div className="ideas" ref={formRef}>
          <div className="ideas__form">
            <div className="ideas__form__container">
              <h1>Pitch us your idea!</h1>
              <div className="ideas__division">
                <div className="ideas__division__image">
                  <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_jJ7Djd.json"
                    speed={0.3}
                    style={{ height: "600px", width: "600px" }}
                  />
                </div>

                <div className="ideas__division__form">
                  <h2>Fill in the form</h2>
                  <div className="ideas__division_formcontent">
                    <form className="formcontent__LI">
                      <label
                        for="name"
                        style={{ color: "#474444", fontWeight: 800 }}
                      >
                        Your Name
                      </label>
                      <br />
                      <input type="text" placeholder="Type your Name" />
                      <br />
                      <label
                        for="email"
                        style={{ color: "#474444", fontWeight: 800 }}
                      >
                        Your Email
                      </label>
                      <br />
                      <input type="text" placeholder="Type your Email" />
                      <br />
                      <label
                        for="email"
                        style={{ color: "#474444", fontWeight: 800 }}
                      >
                        Your Project Idea
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Tell us about your project"
                      />
                      <br />
                      <label style={{ color: "#474444", fontWeight: 800 }}>
                        Your Phone Number
                      </label>
                      <br />
                      <input type="text" placeholder="Phone Number" />
                      {/* <RadioGroup
                          style={{ width: "75%" }}
                          onChange={ radioSelectionHandler }>
                        <RadioButton
                            rootColor="#474444"
                            pointColor="#ffee00"
                            
                            value="webapp">
                          App Development
                        </RadioButton>
                        <RadioButton
                            rootColor="#474444"
                            pointColor="#ffee00"
                            value="ai">
                          Artificial Intelligence
                        </RadioButton>
                        <RadioButton
                            rootColor="#474444"
                            pointColor="#ffee00"
                            
                            value="crypto">
                          Blockchain
                        </RadioButton>
                        <RadioButton
                            rootColor="#474444"
                            pointColor="#ffee00"
                            value="cybersec">
                          Cyber Security
                        </RadioButton>
                      </RadioGroup> */}
                      <br />
                      <label style={{ color: "#474444", fontWeight: 800 }}>
                        Rate your expertise on a scale of 1 to 5
                      </label>
                      <br/>
                      {/* <label className="radiolabel">
                        <input type="radio" name="radio" defaultChecked className="radioinput"/>
                        <span className="radiospan">HTML</span>
                      </label>
                      <label className="radiolabel">
                        <input type="radio" name="radio" className="radioinput"/>
                        <span className="radiospan">CSS</span>
                      </label>
                      <label className="radiolabel">
                        <input type="radio" name="radio" className="radioinput"/>
                        <span className="radiospan">Javascript</span>
                      </label> */}
                      <div className="radioselection">
                        <div className="options">
                          <input
                            type="radio"
                            id="1"
                            name="level"
                            value="1"
                          />
                          <label for="1">1</label>
                        </div>

                        <div className="options">
                          <input
                            type="radio"
                            id="2"
                            name="level"
                            value="2"
                          />
                          <label for="2">2</label>
                        </div>

                        <div className="options">
                          <input
                            type="radio"
                            id="3"
                            name="level"
                            value="3"
                          />
                          <label for="3">3</label>
                        </div>
                        <div className="options">
                          <input
                            type="radio"
                            id="4"
                            name="level"
                            value="4"
                          />
                          <label for="4">4</label>
                        </div>
                        <div className="options">
                          <input
                            type="radio"
                            id="5"
                            name="level"
                            value="5"
                          />
                          <label for="5">5</label>
                        </div>
                      </div>
                      <br/>
                      <br/>
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
