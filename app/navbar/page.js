'use client';
import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from 'next/image';
import logo from '../../public/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.logo}>
        <Image
          src={logo}
          alt="Personal portfolio"
        />
        <a href="#" className={styles.titleLink}>
          <span className={styles.title}>Wanakacha & Co.</span>
        </a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles["nav-links"]} ${menuOpen ? styles.show : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Docs</Link>
        </li>
        <li>
          <Link href="/contact">Forums</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


