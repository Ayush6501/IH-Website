import React from "react";
import Item_maker from "./projects_card";


export default function projects_panels(props) {
  return (
    <div id="Projects_Main_Item_Container">
      {props.panel_name.map((element) => {
        return <Item_maker arg={element} />;
      })}
    </div>
  );
}
