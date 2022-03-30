import React from "react";

export default function ItemMaker(props) {
  return (
    <div className="main_container">
      <div
        className="main_card_container"
        style={{ background: `${props.arg.BGC}` }}
      >
        <div className="image_container">
          <img
            src={props.arg.Img}
            alt="item"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="card_detail_container">
          <div className="card_detail_title">{props.arg.Title}</div>
          <div className="card_detail_description">{props.arg.Desc}</div>
        </div>
        {/* <div className="image_card_container">
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
        </div> */}
      </div>
      <div className="separator_container">{props.arg.SepText}</div>
    </div>
  );
}
