import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Book.module.css';

import signature from "../../assets/bookImg/signature.png";
import book1 from "../../assets/bookImg/book1.png";
import book2 from "../../assets/bookImg/book2.png";

export default function Book() {
  return (
    <section className={styles.bookSection}>
      {/* Main Content */}
      <div className={styles.headSection}>
        {/* Tagline */}
        <div className={styles.tagLine}>
          <p>Patrick Bet-David's</p>
          <span>Signed <br />Collection</span>
        </div>

        {/* Shop Now Button */}
        <button className={styles.btn}>
          Shop Now <FontAwesomeIcon icon={faArrowRight} />
        </button>

        {/* Signature */}
        <div className={styles.signature}>
          <img src={signature} alt="Signature" />
        </div>
      </div>

      {/* Book Images */}
      <div className={styles.bookImages}>
        <img src={book1} alt="Book 1" className={styles.bookImages1}/>
        <img src={book2} alt="Book 2" className={styles.bookImages2}/>
      </div>
    </section>
  );
}
