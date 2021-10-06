import React from "react";

export default function ItemMaker(props) {
  return (
    <div>
      <div className="projects_main_card_container">
        <div className="projects_image_card_container">
          <img
            className="projects_reponsive_image"
            src={props.arg.img}
            alt=""
          ></img>
        </div>
        <div className="projects_card_detail_container">
          <div className="Projects_description_para">
            <h2 className="projects_card_heading">{props.arg.Title}</h2>
            <p className="projects_card_detail_para">
              {props.arg.Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}