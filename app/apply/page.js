
"use client";
import React, { useState } from "react";
import styles from "./apply.module.css";
import Image from 'next/image';
import prog from '../../public/cod.png';

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    county: "",
    age: "",
  });

  

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    county: false,
    age: false,
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
   
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newFormErrors = {};
    for (const key in formData) {
      if (formData[key].trim() === "") {
        newFormErrors[key] = true;
      }
    }

   
    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    
    
    console.log("Form submitted successfully!");
  };

  return (
    <div  className={styles.bdy}>
      <Image
      src={prog}
      className={styles.coder}
      alt='coder'
      />
    <div className={styles.applicationContainer}>
      <h1 className={styles.title}>Apply Now</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>
            First Name:
          </label>
          <input
            className={`${styles.input} ${formErrors.firstName && styles.error}`}
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
          />
          <div className={styles.errorWrapper}>
            {formErrors.firstName && <span className={`${styles.errorMessage} ${styles.red}`}>Please enter your first name.</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>
            Last Name:
          </label>
          <input
            className={`${styles.input} ${formErrors.lastName && styles.error}`}
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
          />
          <div className={styles.errorWrapper}>
            {formErrors.lastName && <span className={`${styles.errorMessage} ${styles.red}`}>Please enter your last name.</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            className={`${styles.input} ${formErrors.email && styles.error}`}
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
          />
          <div className={styles.errorWrapper}>
            {formErrors.email && <span className={`${styles.errorMessage} ${styles.red}`}>Please enter a valid email address.</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="age" className={styles.label}>
            Age:
          </label>
          <input
            className={`${styles.input} ${formErrors.age && styles.error}`}
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
          />
          <div className={styles.errorWrapper}>
            {formErrors.age && <span className={`${styles.errorMessage} ${styles.red}`}>Please enter your age.</span>}
          </div>
        </div>

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ApplicationPage;
