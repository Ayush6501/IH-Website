import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideDrawer from "../../components/Navbar/SideDrawer/SideDrawer";
import './Recruitment.css'

const RecruitmentPage = (props) => {
  const current = new Date();
  const currentMonth = current.getMonth() + 1;
  const currentDate = current.getDate();
  return (
    <>
      
      <div className="recruitment__page">
        <div className="recruitment__info__div">
            <p className="recruitment__info__header">WELCOME TO INNOVATIONAL PARADISE!</p>
            <p className="recruitment__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat ligula nec massa dignissim pretium. Integer diam nisi, ultricies at ex quis, commodo dictum sapien. Donec volutpat auctor erat, at ullamcorper enim consectetur ac. Quisque lacus nunc, sagittis ut rhoncus sed, ultricies et nulla. Donec tincidunt est quam, quis laoreet odio porta ac. Nam eleifend viverra euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eget semper enim.</p>
        </div>
        <div className="recruitment__form__div">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKJaSLZ78E0THNSk_4WkVaFyKiVT9Ft270xLR-b1OL4qn3dw/viewform?embedded=true" width="50%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </>
  );
};

export default RecruitmentPage;
