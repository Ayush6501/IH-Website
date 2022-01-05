import React from "react";
import "./Recruitment.css";

const RecruitmentPage = (props) => {
  return (
    <>
      <div className="recruitment__page">
        <div className="recruitment__info__div">
          <p className="recruitment__info__header">
            WELCOME TO INNOVATION PARADISE!
          </p>
          <p className="recruitment__info">
            Innovators Hub is working on building an Admission Processes Automation System, an industrial project from MIT - WPU, and
            is accepting applications for the same. Fill the form attested below before Jan 13th, 2022 to be considered eligible for
            the same.
          </p>
        </div>
        <div className="recruitment__form__div">
          <iframe
            title='RecruitmentForm'
            src="https://forms.gle/vUPRj1uAdecHgXez6"
            width="50%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  );
};

export default RecruitmentPage;
