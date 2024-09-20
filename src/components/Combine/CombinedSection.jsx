import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './CombinedSection.module.css';

// Import assets
import book1 from "../../assets/bookImg/book1.png";
import book2 from "../../assets/bookImg/book2.png";
import signature from "../../assets/bookImg/signature.png";
import missionImage from "../../assets/formalPic.png";
import quoteImg from "../../assets/quotes.svg";

export default function CombinedSection() {
  return (
    <section className={styles.combinedSection}>
      {/* Book Section */}
      <div className={styles.bookSection}>
        <div className={styles.headSection}>
          <div className={styles.tagLine}>
            <p>Patrick Bet-David's</p>
            <span>Signed <br />Collection</span>
          </div>
          <button className={styles.btn}>
            Shop Now <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <div className={styles.signature}>
            <img src={signature} alt="Signature" />
          </div>
        </div>

        <div className={styles.bookImages}>
          <img src={book1} alt="Book 1" className={styles.bookImage1} />
          <img src={book2} alt="Book 2" className={styles.bookImage2} />
        </div>
      </div>

      {/* Mission Section */}
      <div className={styles.missionSection}>
        <div className={styles.textContainer}>
          <div className={styles.quoteIcon}>
            <img src={quoteImg} alt="" />
          </div>
          <div className={styles.missionText}>
           <span> OUR MISSION IS TO ENLIGHTEN, 
           ENTERTAIN </span> <br/>
           <span>AND EMPOWER CURRENT AND FUTURE </span> <br />
           <span>LEADERS AROUND THE WORLD.</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={missionImage} alt="Mission Leader" className={styles.missionImage} />
        </div>
      </div>
    </section>
  );
}
