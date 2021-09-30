import React from "react";

export default function Item_maker(props) {
  return (
    <div>
      <div className="main_card_container">
        <div className="image_card_container">
          <img
            className="reponsive_image"
            src={props.arg.Img}
            alt=""
          ></img>
        </div>
        <div className="card_detail_container">
          <h2 className="card_heading">{props.arg.Title}</h2>
          <div className="card_detail_container_2">
            <p className="card_detail_para">{props.arg.Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
