import React from 'react';
import styles from './Gallery.module.css';
import {GalleryStore,AchievementStore} from '../../store/GalleryStore.js';
import Card from './Cards.js';


class Gallery extends React.Component{
  render()
  {
    return (<div className={styles.Main}>

      <p className={styles.TitleContainer}>
        <span className={styles.Title}>
          MEMORY LANE
        </span>
      </p>

      <p className={styles.subheading}>Over the short span of 3 years, our club has excelled in many fields and achieved tremendous feats, and is still continuing to reach heights. Some of our many major achievements are listed below :</p>
      <br />

      <div className={styles.TeamWrapper}>
      {AchievementStore.map((i) => <Card img={i.img} txt={i.txt} title={i.title}/>)}
      </div>

      <p className={styles.TitleContainer}>
        <span className={styles.Title}>
          GALLERY
        </span>
      </p>

      <p className={styles.subheading}>This is but a gist of the exponential growth we have been striving towards in this short span of being. We have stuck by our motto of tackling each bit with perfection to unlock the impossible and here we are with some highlights of our 3-year journey…</p>
      <br />
      
      <div className={styles.TeamWrapper}>
      {GalleryStore.map((i) => <TeamMember imgsrc={i.img} text={i.txt}/>)}
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