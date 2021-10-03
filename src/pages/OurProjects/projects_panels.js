import React from "react";
import Item_maker from "./projects_card";
import { Player } from "@lottiefiles/react-lottie-player";

let data = [
  {
    Number: 0,
    Title: "Project CoBAND-19",
    Desc: "This project aimed to tackle the issue of managing students after college reopening by tracking vitals of students with the help of this band that will actually regulate the students with tampered or unstable vitals.",
    img:"./images/1.svg",
  },
  {
    Number: 1,
    Title: "I-Traffic",
    Desc: " It is an intelligent traffic management system designed for the Indian Traffic System. Without changing the current set-up of signals, this device aims to optimize signal timers with the help of Integrated Deep Learning and Iot.",
    img:"./images/2.svg",
  },
  {
    Number: 2,
    Title: "ASD",
    Desc: "It is a device used to sanitize classrooms, offices and washroom facilities based on two factors: time and number of people entering and leaving the room in a cost-effective manner.",
    img:"./images/3.svg",
  },
  {
    Number: 3,
    Title: "FiN-Friend in Need",
    Desc: "It is a very innovative mobile application designed to curb domestic violence using appropriate mechanisms. It is also helpful for people facing mental health issues by having psychologists on the platform.",
    img:"./images/4.svg",
  },
  {
    Number: 4,
    Title: "Speed Check",
    Desc: "As the name suggests, this device helps in controlling the speed limits of two-wheelers in order to reduce accidents. It also helps to keep your bike safe and know its location at all times by integrating appropriate anti-theft devices.",
    img:"./images/5.svg",
  },
  {
    Number: 5,
    Title: "NGO Network",
    Desc: "This application works to connect NGOs across the country in order to meet the basic needs of the underprivileged people of the society. It consists of a number of potential government and private organizations to increase reliability.",
    img:"./images/6.svg",
  },
  {
    Number: 6,
    Title: "Edox",
    Desc: "Used for government documentation and filing with the help of AI and Blockchain. This is an effective way to eliminate tedious tasks and middleman involvement.",
    img:"./images/7.svg",
  },
  {
    Number: 7,
    Title: "S-Park",
    Desc: "Parking in open spaces can be a tough job sometimes. This is an innovative solution which involves a smart parking system that is designed for open area parking spaces.",
    img:"./images/8.svg",
  },
  {
    Number: 8,
    Title: "Apada Setu",
    Desc: "This application helps in conservation of lives and property during natural or human-made disasters.",
    img:"./images/9.svg",
  },
  {
    Number: 9,
    Title: "Anti Theft",
    Desc: "Integrating appropriate anti-theft devices to make sure your bike is always safe and know where it is.",
    img:"./images/10.svg",
  },
  {
    Number: 10,
    Title: "Robotic Arm-E Yantra",
    Desc: "Two Robotic arms were simulated in an automated warehouse setting with the help of ROS, Robotic Perception, Robotic Manipulation, IoT, Python and Google App Scripting. One was used to mobilise packages from the required shelf and placing them on the conveyor. The other was used to sort boxes according to their destination.",
    img:"./images/11.svg",
  },
  {
    Number: 11,
    Title: "Project Younion",
    Desc: "Done by the First-Year students of our club, YOUnion was devised as a platform for professional connections catering to students and budding enthusiasts of various fields to register and scout people to do work on practical professional assignments and projects.",
    img:"./images/12.svg",
  },
];

export default function projects_panels(props) {
  return (
    <>
      <div id="Home_projects" className="panel_projects">
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_bltsnbfe.json"
          speed={0.5}
          style={{ width: "50vw" }}
        />
        <h1
          id="Main_page_heading"
          style={{
            color: "BLACK",
            fontFamily: "Poppins, sans-serif",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "4.5vw",
          }}
        >
          OUR PROJECTS
        </h1>
      </div>
      <div id="FIRST" className="panel_projects">
            {data.map((element)=>{
              return <Item_maker arg={element}/>
            })}
          </div>
    </>
  );
}
