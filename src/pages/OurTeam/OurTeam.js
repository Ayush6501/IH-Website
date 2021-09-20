import React from 'react';
import styles from './Ourteam.module.css';
import SiteFooter from '../../components/Footer/footer.js';
import {OurteamData} from '../../store/OurteamData.js';
import {TeamCollage} from './TeamCollage.js';
import SiteNavbar from '../../components/Navbar/Navbar';

class Ourteam extends React.Component{
  render() {

    return (<div>
      <SiteNavbar/>
      <h1 className={styles.TitleContainer}>
        <span className={styles.Title}>
          MEET OUR TEAM
        </span>
      </h1>

      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br />

      {OurteamData.map((i) => <TeamCollage data={i.data} title={i.department} />)}


      <SiteFooter />
    </div>);
  }
};

export default Ourteam;