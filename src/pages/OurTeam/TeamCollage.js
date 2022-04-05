import { Backdrop, Button, Card, Icon, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './Ourteam.module.css';

function TeamMember(props) {
    let imgsrc = props.imgsrc;
    let name = props.name;
    let desig = props.desig;
    let linkedin = props.linkedin;
    let dept=props.dept;

    return (
      <div className={styles.TeamCard}>
        <img src={imgsrc} alt="Error" className={styles.MemberImage} />
        <div className={styles.MemberOverlay}>
          <p className={styles.MemberRank}>{desig}</p>
          <p className={styles.MemberDept}>{"("+dept+")"}</p>
          <hr className={styles.MemberBreak} />

          <div className={styles.MemberIconContainer}>
            <img className={styles.MemberIcon} alt="Error" src="/assets/logos/logo-linkedin.svg" onClick={() => { window.open(linkedin) }} />
          </div>
        </div>

        <div className={styles.MemberName}>{name}</div>
      </div>);
}



class TeamCollage extends React.Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    
    this.fetch_title = props.fetch_title;
    this.get_data=props.datafetch;
  }

  render() {

    return (<div>

      <div className={styles.DepartmentButtonContainer}>
        <span className={styles.DepartmentButton}>
          {this.title}
        </span>

      </div>
      <div className={styles.TeamWrapper}>
        {this.get_data(this.fetch_title).map((i) => <TeamMember key={i.index} imgsrc={i["Image ( min : 600 x 600 pixels )"]} name={i["Full Name"]} desig={i["Position"]} dept={i["Department(s)"]} linkedin={i["LinkedIn"]} github={i["GitHub ( mandatory for CSE )"]} />)}
      </div>
    </div>);
  }
};

export {TeamCollage};