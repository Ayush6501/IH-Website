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
            Innovators Hub keeps working on different projects throughtout the year and takes recruitment biyearly, all club and project recruitment application forms will be displayed on this page so do keep checking regularly!
          </p>
        </div>
        <div className="recruitment__form__div">
          <iframe
            title='RecruitmentForm'
            src="https://docs.google.com/forms/d/e/1FAIpQLScU_pwx4LA_MdIN5LfHMzEK3D_6OvZi1WqAuy-r6AyAQuMCmg/viewform?embedded=true"
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
