import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {TeamCollage} from './TeamCollage.js';

const TeamData = () => {
  let [data, setData] = useState(null);
  let [websiteData, setWebsiteData] = useState([]);
  let [fourthYearData, setFourthYearData] = useState([]);
  let [thirdYearData, setThirdYearData] = useState([]);
  let [secondYearData, setSecondYearData] = useState([]);
  let [firstYearData, setFirstYearData] = useState([]);
  let [coreData, setCoreData] = useState([]);

  const allocateMembers = (data) => {
    console.log("ALLOCATING")
    setData(data)

    const size = Object.keys(data).length;
    for (let i = 0; i < size; i++) {
      if(data[i]["Year Of Study"]==="Website") {
        setWebsiteData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Year Of Study"]==="Final Year") {
        setFourthYearData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Year Of Study"]==="Third Year") {
        setThirdYearData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Year Of Study"]==="Second Year") {
        setSecondYearData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Year Of Study"]==="First Year") {
        setFirstYearData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Year Of Study"]==="Core") {
        setCoreData(oldArray => [...oldArray, data[i]])
      }
    }
    console.log(websiteData)
  }

  useEffect(async () => {
    let link="https://ihwebsite-default-rtdb.firebaseio.com/Team.json";
    let info = await axios.get(link)
        .then((resp)=>resp.data)
        .then(data => allocateMembers(data))
        .catch((err)=>console.log(err));
  }, [])

  return (
      <>
        <TeamCollage datafetch={coreData} fetch_title={"Core"} title={"Core Team"}/>
        <TeamCollage datafetch={websiteData} fetch_title={"Website"} title={"Website Team"}/>
        <TeamCollage datafetch={fourthYearData} fetch_title={"Fourth"} title={"Fourth Year"}/>
        <TeamCollage datafetch={thirdYearData} fetch_title={"Third"}  title={"Third Year"}/>
        <TeamCollage datafetch={secondYearData} fetch_title={"Second"} title={"Second Year"}/>
        <TeamCollage datafetch={firstYearData} fetch_title={"First"}  title={"First Year"}/>
      </>
  );
}

export default TeamData;
