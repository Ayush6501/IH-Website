import React from 'react';
import styles from './Ourteam.module.css';
import SiteFooter from '../../components/Footer/footer.js';
import {OurteamData} from '../../store/OurteamData.js';
import {TeamCollage} from './TeamCollage.js';
import SiteNavbar from '../../components/Navbar/Navbar';

class Ourteam extends React.Component{
  constructor(props)
  {
    super(props);
    this.maxImages=4;
    this.state={curr_img:"url(/assets/images/1.jpg)",count:1};

    this.slider=this.slider.bind(this);
  }

  slider()
  {
      let ct=this.state.count;

      if(ct>=this.maxImages)
        ct=0;
      
      ct++;

      this.setState({curr_img:"url(/assets/images/"+ct+".jpg)",count:ct});
  }

  componentDidMount(){
      setInterval(this.slider,2000);
  }


  render() {

    const sliderStyle={
      overflow: "hidden",
      display: "flex",
      flexDirection:"column",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: "60px",
      height:"50vh",
      width:"auto",
      maxWidth:"100vw",
      transition: "all 0.3s ease",
      backgroundImage:this.state.curr_img
    }

    return (<div>
      <SiteNavbar/>

      <div style={sliderStyle}></div>

      <h1 className={styles.TitleContainer}>
        <span className={styles.Title}>
          MEET OUR TEAM
        </span>
      </h1>

      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br />

      {OurteamData.map((i) => <TeamCollage data={i.data} title={i.department} />)}

    </div>);
  }
};

export default Ourteam;
