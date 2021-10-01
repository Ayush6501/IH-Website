import React from 'react'
import "./Events.css"
import Events_item from "./Events_item.js";

export default function Events() {
    return (
        
        <div>
            <div id="Events_first_container">
                <div className="heading_containers">
                    <h1 id="Heading" style={{marginTop:"6vw"}}>OUR EVENTS</h1>
                </div>
                <div className="heading_containers" style={{fontFamily:"Montserrat",fontStyle:"normal",fontWeight:"normal"}}>
                    <p id="Heading_para">Innovators hub hosts numerous workshops and events across the year. Previously, we have conducted many technical workshops on a multitude of topics like : CNN & AI, Stock market Prediction using AI/ML, Github, Animatia and many more. Our non-technical events foster a creative and social spirit via workshops and events surrounding the same theme. Check out our major events and workshops and stay tuned for more!</p>
                </div>
                <Events_item />

            </div>
        </div>
    )
}
