import React from 'react';
import styles from './Ourteam.module.css';
import { Box,Typography } from '@mui/material';

class Slider extends React.Component{
  constructor(props)
  {
    super(props);
    this.maxImages=3;
    this.state={curr_img:"url(/assets/carousel/1.png)",count:1};
    this.interval_handler="";

    this.slider=this.slider.bind(this);
  }

  slider(arg=1)
  {
      let ct=this.state.count;

      ct+=arg;
      
      if(ct>this.maxImages)
        ct=1;
      else if(ct<=0)
        ct=this.maxImages;
      


      this.setState({curr_img:"url(/assets/carousel/"+ct+".png)",count:ct});
  }

  componentDidMount(){
      this.intervalhandler=setInterval(this.slider,3000);
  }

  render()
  {
    const sliderStyle={
      backgroundImage:this.state.curr_img
    }

    return(
    <div className={styles.Slider} style={sliderStyle}>
      <Box sx={{position:"relative",backgroundColor:"rgba(0,0,0,0.5)"}}>
          <Typography variant="h3" fontFamily={"Poppins"} fontWeight={"bold"} color="white" align="center" marginTop="8rem" marginBottom="12rem">MEET OUR TEAM</Typography>
      </Box>
    </div>);
  }
}

export {Slider};