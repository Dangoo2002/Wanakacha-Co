// pages/index.js
import React from "react";
import Navbar from "./navbar/page";
import styles from "./home.module.css";
import Section from "./carousell/page";
import CourseCatalog from "./catalog/page";
import AuthorSection from "./author/page";
import Footer from "./footer/page";
import Teachers from "./tutors/page";
import SubscribeSection from "./news/page";
import Image from "next/image";
import back from "../public/back.jpg"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.logos}>
        <h1>Dreaming the code,coding the dream.</h1>
        <Section
          title="Discover the World of Coding"
          description="Unlock endless possibilities with code"
          
        />
        <Image src={back} width={200} height={200} alt="yoo"/>
        <CourseCatalog />
        <Teachers />
        <AuthorSection />
        <SubscribeSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
