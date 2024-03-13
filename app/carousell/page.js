
'use client'
import React, { useState } from "react";
import Link from "next/link";
import styles from "./carousell.module.css";
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import back from '../../public/back.jpg';

const Loader = () => {
  return (
    <div className={styles.loader}>
  
    </div>
  );
};

const Section = () => {
  const [loading, setLoading] = useState(false);

  const title = "Discover the World of Coding";
  const description = "Unlock endless possibilities with code";

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect logic here after 4 seconds
      window.location.href = "/apply";
    }, 4000); // 4 seconds
  };

  return (
    <div className={styles.section}>
      <div className={styles.overlay}>
        <h3>{title}</h3>
        <p>{description}</p>
        
        <button className={styles.learnMoreButton} onClick={handleClick}>
          Learn More <GoArrowRight />
        </button>

        {loading && <Loader />}
      </div>
      <Image
        src={back}
        alt="Section Background"
        className={styles.backgroundImage}
      />
    </div>
  );
};

export default Section;
