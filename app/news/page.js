// components/SubscribeSection.js
import React from "react";
import styles from "./news.module.css";
import { GoArrowRight } from "react-icons/go";
const SubscribeSection = () => {
  return (
    <div className={styles.subscribeSection}>
      <div className={styles.general}>
      <h2>Subscribe to Get the Latest News and Updates</h2>
      <div className={styles.subscribeForm}>
        <input type="text" placeholder="Enter email" className={styles.emailInput} />
        <button className={styles.subscribeButton}>Subscribe <GoArrowRight /></button>
      </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
