import React from "react";
import Link from "next/link";
import styles from "./carousell.module.css";
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import back from '../../public/back.jpg';

const Section = () => {

  const title = "Discover the World of Coding";
  const description = "Unlock endless possibilities with code";

  return (
    <div className={styles.section}>
      <div className={styles.overlay}>
        <h3>{title}</h3>
        <p>{description}</p>
        
        <Link href='/apply'>
          <button className={styles.learnMoreButton}>Learn More <GoArrowRight /></button>
        </Link>
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
