import React from 'react';
import styles from './Gallery.module.css';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.imgsrc = props.imgsrc;
}

  render() {

    return (
      <div className={styles.TeamCard}>
        <img src={this.imgsrc} alt="Error" className={styles.MemberImage} />
        <div className={styles.MemberOverlay}>
          <p className={styles.MemberRank}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
        </div>
      </div>);
  }
};



class TeamCollage extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.title = props.title;
  }

  render() {
    
    return (
      <div className={styles.TeamWrapper}>
        {this.data.map((i) => <TeamMember key={i} imgsrc={i[0]} name={i[1]} desig={i[2]} linkedin={i[3]} github={i[4]} />)}
      </div>
    );
  }
};

export {TeamCollage};