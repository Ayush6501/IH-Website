import React from "react";
import "./Projects.css";
import { useLocation } from "react-router-dom";
import {useRef, useEffect} from 'react';
import ItemMaker from "./projectscard";
import { Container,Box, Typography} from "@mui/material";
import Cards from "../Gallery/Cards"

function Projects(props) {
    const routePath = useLocation();
    const ref = useRef();

    let bgimagestyle={position:"relative",objectFit:"cover",top:0,left:0,height:"70vh",width:"100vw",marginBottom:"-16rem"};

    if(window.innerWidth<1024){
      bgimagestyle={position:"relative",objectFit:"cover",top:0,left:0,height:"100vh",width:"100vw",marginBottom:"-30rem"};
    }

    useEffect(() => {
        if (routePath.pathname === "/projects") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [routePath])

  return (
    <>
      <div id="Main_container" ref={ref} className="Project_container">
        <img src="background.png" 
          style={bgimagestyle}
        ></img>

        <Box sx={{position:"relative",left:"10vw",maxWidth:"50%"}}>
          <Typography variant="h3" color="white" fontFamily={"Poppins"} fontWeight={"bold"} marginBottom="1rem">OUR PROJECTS</Typography>
          <Typography variant="h6" color="white">Innovators hub has completed the following projects since it's conception.</Typography>
        </Box>

        <Box sx={{position:"relative",left:0,top:0,width:"100%",height:"3rem",color:"#000"}}></Box>

        <div id="Main_Item_Container">
        {data.map((element, i) => {
          return (
            <>
              <Cards
                key={i}
                img={element.img}
                title={element.Title}
                txt={element.Desc}
              />
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Projects;


let data = [
  {
    Number: 0,
    Title: "CoBAND-19",
    Desc: "This project aimed to tackle the issue of managing students after college reopening by tracking vitals of students with the help of this band that will actually regulate the students with tampered or unstable vitals.",
    img:"https://i.imgur.com/RjM5FGp.jpg",
  },
  {
    Number: 1,
    Title: "I-Traffic",
    Desc: " It is an intelligent traffic management system designed for the Indian Traffic System. Without changing the current set-up of signals, this device aims to optimize signal timers with the help of Integrated Deep Learning and Iot.",
    img:"https://i.imgur.com/7guvOvN.jpg",
  },
  {
    Number: 2,
    Title: "ASD",
    Desc: "It is a device used to sanitize classrooms, offices and washroom facilities based on two factors: time and number of people entering and leaving the room in a cost-effective manner.",
    img:"https://i.imgur.com/ugoCyRy.jpg",
  },
  {
    Number: 3,
    Title: "FiN-Friend in Need",
    Desc: "It is a very innovative mobile application designed to curb domestic violence using appropriate mechanisms. It is also helpful for people facing mental health issues by having psychologists on the platform.",
    img:"https://i.imgur.com/7gbT6y0.jpg",
  },
  {
    Number: 4,
    Title: "Speed Check",
    Desc: "As the name suggests, this device helps in controlling the speed limits of two-wheelers in order to reduce accidents. It also helps to keep your bike safe and know its location at all times by integrating appropriate anti-theft devices.",
    img:"https://i.imgur.com/CoHtsIj.jpg",
  },
  {
    Number: 5,
    Title: "NGO Network",
    Desc: "This application works to connect NGOs across the country in order to meet the basic needs of the underprivileged people of the society. It consists of a number of potential government and private organizations to increase reliability.",
    img:"https://i.imgur.com/BcxkHR6.jpg",
  },
  {
    Number: 6,
    Title: "Edox",
    Desc: "Used for government documentation and filing with the help of AI and Blockchain. This is an effective way to eliminate tedious tasks and middleman involvement.",
    img:"https://i.imgur.com/0ZjgYwG.jpg",
  },
  {
    Number: 7,
    Title: "S-Park",
    Desc: "Parking in open spaces can be a tough job sometimes. This is an innovative solution which involves a smart parking system that is designed for open area parking spaces.",
    img:"https://i.imgur.com/XVjTkNb.jpg",
  },
  {
    Number: 8,
    Title: "Apada Setu",
    Desc: "This application helps in conservation of lives and property during natural or human-made disasters.",
    img:"https://i.imgur.com/aJPiU9u.jpg",
  },
  {
    Number: 9,
    Title: "Anti Theft",
    Desc: "Integrating appropriate anti-theft devices to make sure your bike is always safe and know where it is.",
    img:"https://i.imgur.com/5lCRwE0.jpg",
  },
  {
    Number: 10,
    Title: "E Yantra",
    Desc: "Two Robotic arms were simulated in an automated warehouse setting with the help of ROS, Robotic Perception, Robotic Manipulation, IoT, Python and Google App Scripting. One was used to mobilise packages from the required shelf and placing them on the conveyor. The other was used to sort boxes according to their destination.",
    img:"https://i.imgur.com/gk522Gr.jpg",
  },
  {
    Number: 11,
    Title: "Younion",
    Desc: "Done by the First-Year students of our club, YOUnion was devised as a platform for professional connections catering to students and budding enthusiasts of various fields to register and scout people to do work on practical professional assignments and projects.",
    img:"https://i.imgur.com/c4hoBia.jpg",
  },
];