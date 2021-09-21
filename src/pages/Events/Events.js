import React from 'react'
import "./Events.css"
import Events_item from "./Events_item.js";

export default function Events() {
    return (
        <div id="MAIN_CONTAINER">
            <div id="Events_first_container">
                <div className="heading_containers">
                    <h1 id="Heading" style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal",fontSize:'3vw'}}>Dont miss our next big event!</h1>
                </div>
                <div className="heading_containers" style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal"}}>
                    <p style={{fontSize:"1.8vw"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque commodi voluptas quod laborum quidem debitis suscipit impedit nam omnis atque, dolor itaque voluptatum minus, modi voluptatibus voluptatem. Autem, eius velit.</p>
                </div>
                <Events_item />



            </div>
        </div>
    )
}
