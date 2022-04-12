import styled from 'styled-components';
import styles from './alumini.module.css'
import {useRef, useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import Divider from '@mui/material/Divider';
import AlumniData from "./AlumniData";

function Alumini(props) {
    const ref = useRef();
    const routePath = useLocation()
    console.log(AlumniData)

    useEffect(() => {
        if (routePath.pathname === "/about") {
            ref.current.scrollIntoView({behavior: "smooth"});
        }
    }, [routePath])

    return (<div className={styles.Main} ref={ref}>

        <Parent>
            <HeaderCard>
                <h1>OUR ALUMINI</h1>
            </HeaderCard>
        </Parent>

        <div className={styles.DepartmentButtonContainer}>
            <span className={styles.DepartmentButton}>
            Batch of 2022
            </span>

        </div>
        <div className={styles.TeamWrapper}>
            {AlumniData.map((i) => <TeamMember
                key={i["Sr No."]}
                imgsrc={i["Image"]}
                name={i["Name"]}
                desig={i["Position"]}
                dept={i["Department"]}
                linkedin={i["Linkedin"]}
            />)}
        </div>
    </div>);
}

function TeamMember(props) {
    let imgsrc = props.imgsrc;
    let name = props.name;
    let desig = props.desig;
    let linkedin = props.linkedin;
    let dept=props.dept
    const loc = useHistory();

    return (
      <div className={styles.TeamCard} onClick={()=>loc.push('/alumni/' + name)}>
        <img src={imgsrc} alt="Error" className={styles.MemberImage} />
        <div className={styles.MemberOverlay}>
          <p className={styles.MemberRank}>{desig}</p>
          <p className={styles.MemberDept}>{"("+dept+")"}</p>
          <hr className={styles.MemberBreak} />
        </div>

        <div className={styles.MemberName}>{name}</div>
      </div>);
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
