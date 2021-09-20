//YET HAVE TO ADD CORRECT ROUTES FOR YELLOW LINKS

import React from 'react';
import styles from './footer.module.css';

class SiteFooter extends React.Component {

  clickHandler(ev)
  {
    console.log(ev);
  }

  render() {
    return (<footer className={styles.SiteFooter}>
      <div className={styles.SiteFooterLogo}>
        <img className={styles.SiteFooterLogoIcon} alt="Error" src="/assets/images/Logo-white.png" />
        <p className={styles.SiteFooterLogoText}>INNOVATORS HUB</p>
      </div>
      
      <table>

      <tr>
        <p className={styles.SiteFooterTitle}>Contact Us</p>
        <p className={styles.SiteFooterContent}>Email:johndoe@gmail.com</p>
        <p className={styles.SiteFooterLink} onClick={()=>this.clickHandler(1)}>JOIN OUR CLUB</p>
      </tr>


      <tr>
        
        <p className={styles.SiteFooterTitle}>Let's discuss your ideas!</p>
        <p className={styles.SiteFooterContent}>Have a project idea? We would love to hear from you!</p>
        <p className={styles.SiteFooterLink} onClick={()=>this.clickHandler(2)}>IDEAS</p>
      </tr>

      <tr>
        
        <p className={styles.SiteFooterTitle}>Or Explore Our Projects!</p>
        <p className={styles.SiteFooterLink} onClick={()=>this.clickHandler(3)}>PROJECTS</p>
      </tr>
      
      <tr>
        
        <p className={styles.SiteFooterTitle}>Join Our Social Community</p>
        
        <div className={styles.SiteFooterIconContainer}>
        <img className={styles.SiteFooterIcon} alt="Error" src="/assets/images/linkedin.svg" onClick={()=>{window.open("https://www.linkedin.com/company/innovators-hub-mitwpu/")}}/>
        </div>
        
        <div className={styles.SiteFooterIconContainer}>
        <img className={styles.SiteFooterIcon} alt="Error" src="/assets/images/insta.svg" onClick={()=>{window.open("https://www.instagram.com/innovators_hub_")}}/>
        </div>
        
        <div className={styles.SiteFooterIconContainer}>
        <img className={styles.SiteFooterIcon} alt="Error" src="/assets/images/facebook.svg" onClick={()=>{window.open("https://www.facebook.com/innovatorshub.mitwpu/")}}/>
        </div>

      </tr>
      </table>

      <div className={styles.SiteFooterBottom}>
      <p>Innovators Hub@MITWPU</p>
      </div>
      
    </footer>);
  }
}

export default SiteFooter;