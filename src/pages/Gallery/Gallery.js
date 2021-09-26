import React from 'react';
import styles from './Gallery.module.css';
import SiteNavbar from '../../components/Navbar/Navbar';
import { TeamCollage } from './TeamCollage.js';
import { OurteamData } from '../../store/OurteamData.js';

class Gallery extends React.Component {
  render() {
    //{OurteamData.map((i) => <TeamCollage data={i.data} title={i.department} />)}

    return (<div className={styles.Main}>
      <SiteNavbar />

      <p className={styles.TitleContainer}>
        <span className={styles.Title}>
          OUR  GALLERY
        </span>
      </p>

      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br />

      <div className={styles.gallery}>
        <figure className={styles.gallery__item1}>
          <img src={"/assets/images/gallery1.jpg"} className={styles.gallery__img} alt={"Image 1"}/>
        </figure>
        <figure className={styles.gallery__item2}>
          <img src={"/assets/images/gallery2.jpg"} className={styles.gallery__img} alt={"Image 2"}/>
        </figure>
        <figure className={styles.gallery__item3}>
          <img src={"/assets/images/gallery3.jpg"} className={styles.gallery__img} alt={"Image 3"}/>
        </figure>
        <figure className={styles.gallery__item4}>
          <img src={"/assets/images/gallery4.jpg"} className={styles.gallery__img} alt={"Image 4"}/>
        </figure>
        <figure className={styles.gallery__item5}>
          <img src={"/assets/images/gallery5.jpg"} className={styles.gallery__img} alt={"Image 5"}/>
        </figure>
      </div>

      </div>);
          }
        }
        
export default Gallery;