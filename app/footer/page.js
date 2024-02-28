// components/Footer.js
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3 className={styles.contactInfoHeader}>Contact Info</h3>
        <p>Email: kennydangote893@gmail.com</p>
        <p>Phone: +254 757 448 651</p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.socialMediaHeader}>Social Media</h3>
        <p>Follow us on:</p>
        <ul className={styles.socialMediaList}>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3 className={styles.aboutUsHeader}>About Us</h3>
        <p>
          Wanakacha & Co. is your premier online school offering top-quality web
          and software development courses. Join us on the journey to success!
        </p>
      </div>
      <div className={styles.column}>
        <h3 className={styles.communityHeader}>Community</h3>
        <p>
          Join our community forums to connect with fellow learners, share
          insights, and stay updated on the latest industry trends.
        </p>
      </div>
      <hr className={styles.footerLine} />
      <p className={styles.trademark}>&copy; Wanakacha and Co. 2024</p>
    </footer>
  );
};

export default Footer;
