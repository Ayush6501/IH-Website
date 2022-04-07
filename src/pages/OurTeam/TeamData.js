import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {TeamCollage} from './TeamCollage.js';

const TeamData = () => {
  let [data, setData] = useState(null);
  let [FounderData, setFounderData] = useState([]);
  let [HeadData, setHeadData] = useState([]);
  let [CommData, setCommData] = useState([]);
  let [MemberData, setMemberData] = useState([]);

  const allocateMembers = (data) => {
    console.log("ALLOCATING");
    setData(data);

    const size = Object.keys(data).length;
    for (let i = 0; i < size; i++) {
      if(data[i]["Position"]==="Founder") {
        setFounderData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Position"]==="Head" || data[i]["Position"]==="President") {
        setHeadData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Position"]==="Committee") {
        setCommData(oldArray => [...oldArray, data[i]])
      }
      else if(data[i]["Position"]==="Member") {
        setMemberData(oldArray => [...oldArray, data[i]])
      }
    }
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
        <TeamCollage datafetch={FounderData} fetch_title={"Founder"} title={"Founders"}/>
        <TeamCollage datafetch={HeadData} fetch_title={"Head"}  title={"Heads"}/>
        <TeamCollage datafetch={CommData} fetch_title={"Commitee"} title={"Commitee"}/>
        <TeamCollage datafetch={MemberData} fetch_title={"Members"}  title={"Members"}/>
      </>
  );
}

export default TeamData;
