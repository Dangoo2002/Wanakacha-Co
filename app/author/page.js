/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import styles from "./author.module.css";
import Image from 'next/image';
import dangoo from '../../public/dangoo.jpg';




const AuthorSection = () => {
  return (
    
    <div className={styles.authorSection}>
      <Image
        src={dangoo} 
        alt="Author"
        className={styles.authorPhoto}
        width= {200}
        height= {200}/>
      <div className={styles.authorInfo}>
        <h2 className={styles.authorName}>Kennedy Wanakacha</h2>
        <p className={styles.authorPosition}>Web Developer | Meme Creator</p>
        <p className={styles.desc}>
          "Dangoo, CEO of Wanakacha & Co., visionary leader of an online school.
          Passionate about shaping future developers, offering top-notch web and
          software development courses for aspiring tech enthusiasts worldwide."
        </p>
      </div>
    </div>
  );
};

export default AuthorSection;
