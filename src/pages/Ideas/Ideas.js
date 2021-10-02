import React, { useEffect, useRef, useState } from "react";
import "./Ideas.css";
import IdeasModel from "./IdeasModel";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLocation } from "react-router-dom";


const Ideas = () => {
  const [radioValue, setRadioValue] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputIdea, setInputIdea] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputNameIsValid, setInputNameIsValid] = useState(false);
  const [inputEmailIsValid, setInputEmailIsValid] = useState(false);
  const [inputIdeaIsValid, setInputIdeaIsValid] = useState(false);
  const [inputPhoneIsValid, setInputPhoneIsValid] = useState(false);
  const [inputNameTouched, setInputNameTouched] = useState(false);
  const [inputEmailTouched, setInputEmailTouched] = useState(false);
  const [inputIdeaTouched, setInputIdeaTouched] = useState(false);
  const [inputPhoneTouched, setInputPhoneTouched] = useState(false);

  const formRef = useRef();
  const ref = useRef();
  const routePath = useLocation();

  useEffect(() => {
    if (routePath.pathname === "/ideas") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [routePath])


  /* useEffect(() => {
    console.log("Current State is, " + radioValue);
    console.log("Current Name is, " + inputName);
  }, [radioValue, inputName]) */

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputNameTouched(true);
    setInputEmailTouched(true);
    setInputIdeaTouched(true);
    setInputPhoneTouched(true);

    if (inputName.trim() === "") {
      setInputNameIsValid(false);
      return;
    }
    setInputNameIsValid(true);

    if (!inputEmail.trim().includes("@")) {
      setInputEmailIsValid(false);
      return;
    }
    setInputEmailIsValid(true);

    if (inputIdea.trim() === "") {
      setInputIdeaIsValid(false);
      return;
    }
    setInputIdeaIsValid(true);

    if (inputPhone.trim().length !== 10) {
      setInputPhoneIsValid(false);
      return;
    }
    setInputPhoneIsValid(true);

    console.log("Name is: ", inputName);
    console.log("Email is: ", inputEmail);
    console.log("Idea is: ", inputIdea);
    console.log("Phone is: ", inputPhone);
    console.log("Level of expertise is: ", radioValue);
    setInputName("");
    setInputEmail("");
    setInputIdea("");
    setInputPhone("");
  };
  const nameChangedHandler = (event) => {
    setInputName(event.target.value);
  };

  const emailChangedHandler = (event) => {
    setInputEmail(event.target.value);
  };

  const ideaChangedHandler = (event) => {
    setInputIdea(event.target.value);
  };

  const phoneChangedHandler = (event) => {
    setInputPhone(event.target.value);
  };

  const radioChangedHandler = (event) => {
    setRadioValue(event.target.value);
  };

  const scrollClickHandler = (event) => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const inputNameIsInvalid = !inputNameIsValid && inputNameTouched;
  const inputEmailIsInvalid = !inputEmailIsValid && inputEmailTouched;
  const inputIdeaIsInvalid = !inputIdeaIsValid && inputIdeaTouched;
  const inputPhoneIsInvalid = !inputPhoneIsValid && inputPhoneTouched;

  return (
    <>
      <div ref={ref} className="ideas_full_page">
        <div className="ideas__model">
          <IdeasModel scroll={scrollClickHandler} />
        </div>
        <div className="ideas" ref={formRef}>
          <div className="ideas__form">
            <div className="ideas__form__container">
              <h1>Pitch us your idea!</h1>
              <p className='subheading'>Got an industrial proposal that could potentially revolutionize people’s everyday lives? Need the aid to make your dream a reality? If yes, then you are at the right place. Hit us up with your propositions now to unlock the ins and outs of the industrial potential and feasibility of your ideas!</p>
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
                    <form
                      className="formcontent__LI"
                      onSubmit={formSubmitHandler}
                    >
                      <label
                        for="name"

                      >
                        Your Name
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Type your Name"
                        onChange={nameChangedHandler}
                        value={inputName}
                      />
                      {inputNameIsInvalid && (
                        <h4 style={{fontWeight: 'bolder', color: 'red', margin: 0}}>
                          Please provide a valid Name.
                        </h4>
                      )}
                      <br />

                      <label
                        for="email"

                      >
                        Your Email
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Type your Email"
                        onChange={emailChangedHandler}
                        value={inputEmail}
                      />
                      {inputEmailIsInvalid && (
                        <h4 style={{fontWeight: 'bolder', color: 'red', margin: 0}}>
                          Please provide a valid Email Id.
                        </h4>
                      )}
                      <br />
                      <label
                        for="idea"

                      >
                        Your Project Idea
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Tell us about your project"
                        onChange={ideaChangedHandler}
                        value={inputIdea}
                      />
                      {inputIdeaIsInvalid && (
                        <h4 style={{fontWeight: 'bolder', color: 'red', margin: 0}}>
                          Please provide an Idea.
                        </h4>
                      )}
                      <br />
                      <label for ="phone" >
                        Your Phone Number
                      </label>
                      <br />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        onChange={phoneChangedHandler}
                        value={inputPhone}
                      />
                      {inputPhoneIsInvalid && (
                        <h4 style={{fontWeight: 'bolder', color: 'red', margin: 0}}>
                          Please provide a valid Phone Number.
                        </h4>
                      )}
                      <br />
                      <label for="level" >
                        Rate your expertise on a scale of 1 to 5 (1 Lowest, 5
                        Highest)
                      </label>
                      <br />

                      <div className="radioselection">
                        <label class="rad-label">
                          <input
                            type="radio"
                            class="rad-input"
                            name="rad"
                            value="1"
                            onChange={radioChangedHandler}
                          />
                          <div class="rad-design"></div>
                          <div class="rad-text">1</div>
                        </label>

                        <label class="rad-label">
                          <input
                            type="radio"
                            class="rad-input"
                            name="rad"
                            value="2"
                            onChange={radioChangedHandler}
                          />
                          <div class="rad-design"></div>
                          <div class="rad-text">2</div>
                        </label>

                        <label class="rad-label">
                          <input
                            type="radio"
                            class="rad-input"
                            name="rad"
                            value="3"
                            onChange={radioChangedHandler}
                          />
                          <div class="rad-design"></div>
                          <div class="rad-text">3</div>
                        </label>

                        <label class="rad-label">
                          <input
                            type="radio"
                            class="rad-input"
                            name="rad"
                            value="4"
                            onChange={radioChangedHandler}
                          />
                          <div class="rad-design"></div>
                          <div class="rad-text">4</div>
                        </label>
                        <label class="rad-label">
                          <input
                            type="radio"
                            class="rad-input"
                            name="rad"
                            value="5"
                            onChange={radioChangedHandler}
                          />
                          <div class="rad-design"></div>
                          <div class="rad-text">5</div>
                        </label>
                      </div>
                      <br />
                      <button type="submit" className="form__submit__button">
                        Submit
                      </button>
                      <br />
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
