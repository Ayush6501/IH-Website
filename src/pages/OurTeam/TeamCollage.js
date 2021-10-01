import React from 'react';
import styles from './Ourteam.module.css';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.imgsrc = props.imgsrc;
    this.name = props.name;
    this.desig = props.desig;
    this.linkedin = props.linkedin;
    this.github = props.github;
}

  render() {

    return (
      <div className={styles.TeamCard}>
        <img src={this.imgsrc} alt="Error" className={styles.MemberImage} />
        <div className={styles.MemberOverlay}>
          <p className={styles.MemberRank}>{this.desig}</p>
          <hr className={styles.MemberBreak} />

          <div className={styles.MemberIconContainer}>
            <img className={styles.MemberIcon} alt="Error" src="/assets/logos/logo-linkedin.svg" onClick={() => { window.open(this.linkedin) }} />

            <img className={styles.MemberIcon} alt="Error" src="/assets/logos/logo-github.svg" onClick={() => { window.open(this.github) }} />
          </div>
        </div>

        <div className={styles.MemberName}>{this.name}</div>
      </div>);
  }
};



class TeamCollage extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.title = props.title;
    this.description=props.description;
    this.state = { clicked: false }
  }

  render() {

    let collage = null;

    if (this.state.clicked)
      collage = 
      <>
      <div className={styles.TeamSubHeading}>{this.description}</div>
      <div className={styles.TeamWrapper}>
        {this.data.map((i) => <TeamMember key={i} imgsrc={i[0]} name={i[1]} desig={i[2]} linkedin={i[3]} github={i[4]} />)}
      </div>
      </>;

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