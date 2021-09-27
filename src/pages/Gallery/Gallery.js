import React from 'react';
import styles from './Gallery.module.css';
import SiteNavbar from '../../components/Navbar/Navbar';
import {GalleryStore} from '../../store/GalleryStore.js';


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

      <div className={styles.TeamWrapper}>
      {GalleryStore.arr.map((i) => <TeamMember imgsrc={i} text={GalleryStore.txt}/>)}
      </div>
      
      </div>);
  }
}



class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.imgsrc = props.imgsrc;
    this.text=props.text;
  }
  render() {
    return (
      <div className={styles.TeamCard}>
        <img src={this.imgsrc} alt="Error" className={styles.MemberImage} />
        <div className={styles.MemberOverlay}>
          <p className={styles.MemberRank}>{this.text}</p>
        </div>
      </div>);
  }
};


export default Gallery;