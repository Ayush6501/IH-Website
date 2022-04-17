import React from 'react';
import styles from './Gallery.module.css';
import {GalleryStore,AchievementStore} from '../../store/GalleryStore.js';
import Card from './Cards.js';
import {useRef, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { Box,Typography } from '@mui/material';


function Gallery(){
    const ref = useRef();
    const routePath = useLocation();

    let imgstyle={position:"relative",objectFit:"cover",top:0,left:0,height:"70vh",width:"100vw",marginBottom:"-16rem"};

    let headerstyle={position:"relative",left:"10vw",maxWidth:"50%"};

    if(window.innerWidth<1024)
    {
      imgstyle={position:"relative",objectFit:"cover",top:0,left:0,height:"100vh",width:"100vw",marginBottom:"-30rem"};

      headerstyle={position:"relative",margin:"auto",width:"90%",wordWrap:"break-word"};
    }

    useEffect(() => {
      
        if (routePath.pathname === "/achievements") {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [routePath])

    return (<div className={styles.Main} ref={ref}>

        <img src="assets/achieve.jpg"
          style={imgstyle}

          className={styles.mainimage}
        ></img>

        <Box sx={headerstyle}>
          <Typography variant="h3" color="white" fontFamily={"Poppins"} fontWeight={"bold"} marginBottom="1rem">OUR ACHIEVEMENTS</Typography>
          <Typography variant="subheading" color="white">Over the short span of 3 years, our club has excelled in many fields and achieved tremendous feats, and is still continuing to reach heights. Some of our many major achievements are listed below</Typography>
        </Box>


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
