import React from 'react';
import styles from './Ourteam.module.css';
import {TeamData} from './TeamData.js'
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

      <h1 className={styles.TitleContainer}>
        <span className={styles.Title}>
          MEET OUR TEAM
        </span>
      </h1>

      <p className={styles.subheading}>We are constantly tinkered by a team which questions, challenges and unlocks creativity on every turn. The brightest minds from backgrounds of Computer Science, Electronics, Mechanics, Design, and many other exciting non-technical avenues build our identity as a collective. At the center we have a strong knit committee, heads and founders leading the team. Click on each department button to find out more!</p>
      <br />
      <h2 className={styles.heading}>Our CSE Team</h2>
      <p className={styles.subheading}>Our Computer Science (CSE) department is composed of the best up-and-coming coders and developers across various technical domains like AI/ML, Data Science, Web development, App development, Cybersecurity and much more.</p>
      <br />
      <h2 className={styles.heading}>Our EnTC Team</h2>
      <p className={styles.subheading}>Our Electronics and Electrical department nourishes and develops practical projects requiring intricate skills for which they train budding recruits to achieve their dreams of implementing their theoretical knowledge through the aid of a capable team.</p>
      <br/>
      <h2 className={styles.heading}>Our Mech Team</h2>
      <p className={styles.subheading}>Our Mechanical team works on multiple inter-disciplinary projects which need developing, designing, building and testing through the basics of physics, mathematics and material knowledge to create solutions to a range of problem statements.</p>
      <br/>
      <h2 className={styles.heading}>Our Non-Tech Team</h2>
      <p className={styles.subheading}>Our Non-tech team has the most capable content writers, managers, designers and talented individuals who incubate and promote educational and enlightening events alongside handling promotions and finances for the club.</p>
      <br/>
      <TeamData/>
    </div>);
}

export default Ourteam;
