import React from 'react';
import styles from './Gallery.module.css';
import SiteNavbar from '../../components/Navbar/Navbar';
import {TeamCollage} from './TeamCollage.js';
import {OurteamData} from '../../store/OurteamData.js';

class Gallery extends React.Component{
  render()
  {
    return (<div className={styles.Main}>
      <SiteNavbar/>

      <p className={styles.TitleContainer}>
        <span className={styles.Title}>
          OUR  GALLERY
        </span>
      </p>

      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br />

      {OurteamData.map((i) => <TeamCollage data={i.data} title={i.department} />)}

      
      </div>);
  }
}

export default Gallery;