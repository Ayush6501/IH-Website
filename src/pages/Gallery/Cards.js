import React from "react";
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div>
      <div className={styles.main_card_container}>
        <div className={styles.image_card_container}>
          <img
            className={styles.reponsive_image}
            src={props.img}
            alt="Error"
          ></img>
        </div>
        <div className={styles.card_detail_container}>
          <h2 className={styles.card_heading}>{props.title}</h2>
          <div className={styles.card_detail_container_2}>
            <p className={styles.card_detail_para}>
              {props.txt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
