import React from 'react';
import styles from './Ourteam.module.css';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.imgsrc = props.imgsrc;
    this.name = props.name;
    this.desig = props.desig;
    this.linkedin = props.linkedin;
    this.dept=props.dept;

    if(props.github==="" || props.github==="")
        this.github="#";
    else
        this.github = props.github;
}

  render() {

    return (
      <div className={styles.TeamCard}>
        <img src={this.imgsrc} alt="Error" className={styles.MemberImage} />
        <div className={styles.MemberOverlay}>
          <p className={styles.MemberRank}>{this.desig}</p>
          <p className={styles.MemberDept}>{"("+this.dept+")"}</p>
          <hr className={styles.MemberBreak} />

          <div className={styles.MemberIconContainer}>
            <img className={styles.MemberIcon} alt="Error" src="/assets/logos/logo-linkedin.svg" onClick={() => { window.open(this.linkedin) }} />

            <img className={styles.MemberIcon} alt="Error" src="/assets/logos/logo-github.svg" onClick={() => { window.open(this.github)}} />
          </div>
        </div>

        <div className={styles.MemberName}>{this.name}</div>
      </div>);
  }
};



class TeamCollage extends React.Component {
  constructor(props) {
    super(props);
    this.title=props.title;
    this.fetch_title = props.fetch_title;
    this.get_data=props.datafetch;
    this.state = { clicked: false };
  }

  render() {

    let collage = null;

    if (this.state.clicked)
      collage = 
      <div className={styles.TeamWrapper}>
        {this.get_data(this.fetch_title).map((i) => <TeamMember key={i.index} imgsrc={i["Image ( min : 600 x 600 pixels )"]} name={i["Full Name"]} desig={i["Position"]} dept={i["Department(s)"]} linkedin={i["LinkedIn"]} github={i["GitHub ( mandatory for CSE )"]} />)}
      </div>;

    return (<div>

      <div className={styles.DepartmentButtonContainer}>
        <span className={styles.DepartmentButton} onClick={() => { this.setState({ clicked: !this.state.clicked }) }}>
          {this.title}
        <span className={styles.DepartmentButtonStyle1}></span>
        <span className={styles.DepartmentButtonStyle2}></span>
        <span className={styles.DepartmentButtonStyle3}></span>
        <span className={styles.DepartmentButtonStyle4}></span>
        </span>

      </div>
      {collage}
    </div>);
  }
};

export {TeamCollage};