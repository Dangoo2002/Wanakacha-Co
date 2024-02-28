// components/Section.js
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Link from "next/link";
import styles from "./carousell.module.css";
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import back from '../../public/back.jpg';

const Section = ({ title, description }) => {
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

// Define PropTypes for title and description
Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Section;
