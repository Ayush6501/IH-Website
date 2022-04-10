import React from 'react';
import styles from './Ourteam.module.css';
import TeamData from './TeamData.js'
import {Slider} from './Slider.js';
import {useRef, useEffect} from 'react';
import { useLocation } from "react-router-dom";

function Ourteam(){
    const ref = useRef();
    const routePath = useLocation();

    useEffect(() => {
        if (routePath.pathname === "/ourteam") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [routePath]);

    return (
      <div className={styles.Main} ref={ref}>
      <Slider/>


      <p style={{marginTop:"4rem"}} className={styles.subheading}>We are constantly tinkered by a team which questions, challenges and unlocks creativity on
          every turn. The brightest minds from backgrounds of Computer Science, Electronics, Mechanics, Design, and many other
          exciting non-technical avenues build our identity as a collective. At the center we have a strong knit committee,
          heads and founders leading the team. Click on each department button to find out more!</p>
      <br />
      <TeamData/>
    </div>);
}

export default Ourteam;
