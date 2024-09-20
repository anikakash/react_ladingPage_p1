import React from 'react';
import missionImage from "../../assets/formalPic.png";
import styles from './MissionSection.module.css';

export default function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.textContainer}>
        <div className={styles.quoteIcon}>
          <span>&#8220;</span>
        </div>
        <p className={styles.missionText}>
          OUR MISSION IS TO ENLIGHTEN, ENTERTAIN AND EMPOWER CURRENT AND FUTURE LEADERS AROUND THE WORLD.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={missionImage} alt="Mission Leader" className={styles.missionImage} />
      </div>
    </section>
  );
}
