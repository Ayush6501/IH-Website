import React from "react";
import Item_maker from "./Item_maker";

let arr = [
  {
    Number: 0,
    Title: "Event A",
    Desc: "Hello",
  },
  {
    Number: 1,
    Title: "Event B",
    Desc: "Hello",
  },
  {
    Number: 2,
    Title: "Event C",
    Desc: "Hello",
  },
  {
    Number: 3,
    Title: "Event D",
    Desc: "Hello",
  },
  {
    Number: 4,
    Title: "Event E",
    Desc: "Hello",
  },
];

export default function Events_item() {
  return (
    <div id="Main_Item_Container">
      {arr.map((element) => {
        return <Item_maker arg={element} />;
      })}
    </div>
  );
}
