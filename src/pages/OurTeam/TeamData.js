import axios from 'axios';
import React from 'react';
import {TeamCollage} from './TeamCollage.js';

class TeamData extends React.Component{
  constructor(props)
  {
    super(props);

    this.FinalData={
      First:[],
      Second:[],
      Third:[],
      Fourth:[],
      Core:[],
      Website:[]
    };
    
    this.fetch_data=this.fetch_data.bind(this);
    this.get_data=this.get_data.bind(this);
    this.state = { clicked: false };

    this.fetch_data();
  }

  get_data(arg)
  {
    return this.FinalData[arg];
  }


  async fetch_data()
  {
    let link="https://ihwebsite-default-rtdb.firebaseio.com/Team.json";
    let data=await axios.get(link).then((resp)=>resp.data).catch((err)=>console.log(err));

    let ct=0;

    while(1)
    {
      if(!data[ct])
        break;
      
      if(data[ct]["Year Of Study"]==="Final Year")
        this.FinalData["Fourth"][this.FinalData["Fourth"].length]=data[ct];

      else if(data[ct]["Year Of Study"]==="Third Year")
        this.FinalData["Third"][this.FinalData["Third"].length]=data[ct];
      
      else if(data[ct]["Year Of Study"]==="Second Year")
        this.FinalData["Second"][this.FinalData["Second"].length]=data[ct];

      else if(data[ct]["Year Of Study"]==="First Year")
        this.FinalData["First"][this.FinalData["First"].length]=data[ct];

      else if(data[ct]["Year Of Study"]==="Core")
        this.FinalData["Core"][this.FinalData["Core"].length]=data[ct];

      else if(data[ct]["Year Of Study"]==="Website")
        this.FinalData["Website"][this.FinalData["Website"].length]=data[ct];
      
      
      ct++;
    } 
    
    console.log(this.FinalData);
  }

  render()
  {
    return (<div>

    <TeamCollage datafetch={this.get_data} fetch_title={"Core"} title={"Core Team"}/>

    <TeamCollage datafetch={this.get_data} fetch_title={"Website"} title={"Website Team"}/>

    <TeamCollage datafetch={this.get_data} fetch_title={"Fourth"} title={"Fourth Year"}/>
    <TeamCollage datafetch={this.get_data} fetch_title={"Third"}  title={"Third Year"}/>
    <TeamCollage datafetch={this.get_data} fetch_title={"Second"} title={"Second Year"}/>
    <TeamCollage datafetch={this.get_data} fetch_title={"First"}  title={"First Year"}/>
    
    </div>);
    }
};

export {TeamData};