import React from 'react';
import styles from './Ourteam.module.css';


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
    <div className={styles.SliderButtonleft} onClick={()=>{clearInterval(this.intervalhandler);this.slider(-1)}}>
    {"<"}
    </div>
    <div className={styles.SliderButtonright} onClick={()=>{clearInterval(this.intervalhandler);this.slider(1)}}>
    {">"}
    </div>
    </div>);
  }
}

export {Slider};