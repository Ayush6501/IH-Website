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
            Wanna join the hustlers to unlock your true potential as an
            innovator, engineer, coder, developer, designer, content writer,
            manager or literally anything you could imagine? Apply to become a
            part of the most exclusive pioneers in engineering and its expanded
            sectors with IH!
          </p>
        </div>
        <div className="recruitment__form__div">
          <iframe
            title='RecruitmentForm'
            src="https://docs.google.com/forms/d/e/1FAIpQLSc3WV9k4VaMtSKDcmcaDqcRweYhK9sP5Aea0CarXqBwYtzB-w/viewform?embedded=true"
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
