import React from 'react';
import styles from './Ourteam.module.css';
import {OurteamData} from '../../store/OurteamData.js';
import {TeamCollage} from './TeamCollage.js';
import {Slider} from './Slider.js';


class Ourteam extends React.Component{
  render() {

    return (
      <div>
      <Slider/>

      <h1 className={styles.TitleContainer}>
        <span className={styles.Title}>
          MEET OUR TEAM
        </span>
      </h1>

      <p className={styles.subheading}>We are constantly tinkered by a team which questions, challenges and unlocks creativity on every turn. The brightest minds from backgrounds of Computer Science, Electronics, Mechanics, Design, and many other exciting non-technical avenues build our identity as a collective. At the center we have a strong knit committee, heads and founders leading the team. Click on each department button to find out more!</p>
      <br />

      {OurteamData.map((i) => <TeamCollage data={i.data} title={i.department} description={i.description}/>)}

    </div>);
  }
};


export default Ourteam;