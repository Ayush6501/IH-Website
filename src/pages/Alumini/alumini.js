import styled from 'styled-components';
import styles from './alumini.module.css'
import {useRef, useEffect} from 'react';
import { useLocation} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Box,Typography } from '@mui/material';

function Alumini(props){
    const ref = useRef();
    const routePath = useLocation();

    useEffect(() => {
        if (routePath.pathname === "/about") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [routePath])

    return (<div className={styles.Main} ref={ref}>

        <img src="alumni.jpg" 
          style={{position:"relative",objectFit:"cover",top:0,left:0,height:"60vh",width:"100vw",marginBottom:"-14rem"}}
        ></img>

        <Box sx={{position:"relative"}}>
          <Typography variant="h2" fontFamily={"Poppins"} fontWeight={"bold"} color="white" align="center" marginTop="8rem" marginBottom="12rem">OUR ALUMNI</Typography>
        </Box>

        <div className={styles.DepartmentButtonContainer}>
            <span className={styles.DepartmentButton}>
            Batch of 2022
            </span>

        </div>
        <div className={styles.TeamWrapper}>
            {test_data.map((i) => <TeamMember key={i.index} imgsrc={i["Image ( min : 600 x 600 pixels )"]} name={i["Full Name"]} desig={i["Position"]} dept={i["Department(s)"]} linkedin={i["LinkedIn"]} github={i["GitHub ( mandatory for CSE )"]} />)}
        </div>
        </div>);
}


const test_data=[
    {
        "Department(s)" : "CSE",
        "Email Address" : "",
        "Full Name" : "Digvijay Patil",
        "GitHub ( mandatory for CSE )" : "https://github.com/think-digvijay",
        "Image ( min : 600 x 600 pixels )" : "https://i.imgur.com/h5MRQTj.png",
        "LinkedIn" : "https://www.linkedin.com/in/23patildigvijay/",
        "Position" : "Founder",
        "Timestamp" : "",
        "Year Of Study" : "Core"
      }, {
        "Department(s)" : "Mechanical",
        "Email Address" : "phadtare.mohit@gmail.com",
        "Full Name" : "Mohit Phadtare",
        "GitHub ( mandatory for CSE )" : "",
        "Image ( min : 600 x 600 pixels )" : "https://i.imgur.com/2M9jJh2.png",
        "LinkedIn" : "https://www.linkedin.com/in/mohit-phadtare/",
        "Position" : "Founder",
        "Timestamp" : "9/29/2021 22:21:54",
        "Year Of Study" : "Core"
      }, {
        "Department(s)" : "Non-Tech",
        "Email Address" : "vedpatil10@gmail.com",
        "Full Name" : "Vedang Patil",
        "GitHub ( mandatory for CSE )" : "",
        "Image ( min : 600 x 600 pixels )" : "https://i.imgur.com/jKUgfk4.png",
        "LinkedIn" : "https://www.linkedin.com/in/vedang-patil-a57b6719a",
        "Position" : "Founder",
        "Timestamp" : "9/28/2021 17:04:05",
        "Year Of Study" : "Core"
      }, {
        "Department(s)" : "CSE, Non-Tech",
        "Email Address" : "",
        "Full Name" : "Aryan Yadav",
        "GitHub ( mandatory for CSE )" : "https://github.com/AryanYadav9999",
        "Image ( min : 600 x 600 pixels )" : "https://i.imgur.com/5UfKvdZ.png",
        "LinkedIn" : "https://www.linkedin.com/in/aryanyadav9999/",
        "Position" : "President",
        "Timestamp" : "",
        "Year Of Study" : "Core"
      }
]



function TeamMember(props) {
    let imgsrc = props.imgsrc;
    let name = props.name;
    let desig = props.desig;
    let linkedin = props.linkedin;
    let dept=props.dept;
    let lnk="/alumini/"+name.replace(" ","").toLowerCase();

    return (
      <div className={styles.TeamCard}>
        <img src={imgsrc} alt="Error" className={styles.MemberImage} />
        <div className={styles.MemberOverlay}>
          <p className={styles.MemberRank}>{desig}</p>
          <p className={styles.MemberDept}>{"("+dept+")"}</p>
          <hr className={styles.MemberBreak} />
        </div>

        <div className={styles.MemberName}>{name}</div>
      </div>
      );
}




export default Alumini;

const Parent = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 9vh;
  height: auto;
  overflow:auto;
  
  @media only screen and (max-width: 968px) {
    height: fit-content;
  }
`;


const HeaderCard = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  
  h1 {
    color: black;
    font-size: 4em;
    margin: 20px 0;
  }
`;

const TextBox = styled.div`
  width: 70%;
  text-align: center;
  
  p {
    padding: 0;
    margin: 0;
    font-size: 1em;
  }
`;

const InfoBox = styled.div`
  margin: 5px auto;
`;
