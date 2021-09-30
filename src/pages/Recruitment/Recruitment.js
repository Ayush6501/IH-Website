import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/Navbar/SideDrawer/SideDrawer";
import './Recruitment.css'

const RecruitmentPage = (props) => {
  let vhvalue = false;
  const formOpen = false;
  const current = new Date();
  const currentMonth = current.getMonth() + 1;
  console.log(currentMonth);
  const currentDate = current.getDate();
  console.log(typeof(currentDate));
  if ((currentMonth === 9) && (currentDate >=1 && currentDate <= 31)) {
    vhvalue=true
  }
  
  return (
    <>
      
      <div className="recruitment__page" style={{height: `${vhvalue ? '200vh' : '100vh'}`}}>
        <div className="recruitment__info__div">
            <p className="recruitment__info__header">WELCOME TO INNOVATION PARADISE!</p>
            <p className="recruitment__info">Wanna join the hustlers to unlock your true potential as an innovator, engineer, coder, developer, designer, content writer, manager or literally anything you could imagine? Apply to become a part of the most exclusive pioneers in engineering and its expanded sectors with IH!</p>
        </div>
        { (currentMonth === 9) && (currentDate >=1 && currentDate <= 31) ? <div className="recruitment__form__div">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKJaSLZ78E0THNSk_4WkVaFyKiVT9Ft270xLR-b1OL4qn3dw/viewform?embedded=true" width="50%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div> : <div className="recruitment__form__soon">
          Our Recruitment will begin soon. Stay tuned!</div>}
      </div>
    </>
  );
};

export default RecruitmentPage;
