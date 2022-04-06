import React from 'react';
import styles from './Ourteam.module.css';

const TeamCollage = (props) => {
    console.log(props.datafetch)

        return (
            <div>
                <div className={styles.DepartmentButtonContainer}>
                <span className={styles.DepartmentButton}>
                  {props.title}
                </span>

                </div>
                <div className={styles.TeamWrapper}>
                    {props.datafetch.map((i) => (
                        <TeamMember
                            key={i.index}
                            imgsrc={i["Image ( min : 600 x 600 pixels )"]}
                            name={i["Full Name"]}
                            desig={i["Position"]}
                            dept={i["Department(s)"]}
                            linkedin={i["LinkedIn"]}
                            github={i["GitHub ( mandatory for CSE )"]} />))}
                </div>
            </div>
        );
};

export {TeamCollage};


function TeamMember(props) {
    const imgsrc = props.imgsrc;
    const name = props.name;
    const desig = props.desig;
    const linkedin = props.linkedin;
    const dept=props.dept;

    console.log(imgsrc, name, desig, dept);

    return (
        <div className={styles.TeamCard}>
            <img src={imgsrc} alt="Error" className={styles.MemberImage} />
            <div className={styles.MemberOverlay}>
                <p className={styles.MemberRank}>{desig}</p>
                <p className={styles.MemberDept}>{"("+dept+")"}</p>
                <hr className={styles.MemberBreak} />

                <div className={styles.MemberIconContainer}>
                    <img
                        className={styles.MemberIcon}
                        alt="Error"
                        src="/assets/logos/logo-linkedin.svg"
                        onClick={() => { window.open(linkedin) }} />
                </div>
            </div>

            <div className={styles.MemberName}>{name}</div>
        </div>);
}
