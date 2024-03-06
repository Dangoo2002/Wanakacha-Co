
"use client";
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import styles from './apply.module.css';
import Image from 'next/image';
import prog from '../../public/cod.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCb-4MDprKwIxpR0q0hkI7q_jEnpn4wTls',
  authDomain: 'wanakacha-and-co.firebaseapp.com',
  projectId: 'wanakacha-and-co',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
  useEffect(() => {
    // Check if a user is already signed in
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user);
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGitHubSignIn = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      console.log('GitHub Sign In Successful');
    } catch (error) {
      console.error('GitHub Sign In Error:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      console.log('Google Sign In Successful');
    } catch (error) {
      console.error('Google Sign In Error:', error.message);
    }
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
       
          {/* Authentication Buttons with Icons */}
          <div className={styles.signInButtons}>
          <button onClick={handleGitHubSignIn}>
            <span className="icon">
              <i className="fab fa-github"></i> 
            </span>
            
          </button>

          <button onClick={handleGoogleSignIn}>
            <span className="icon">
              <i className="fab fa-google"></i> 
            </span>
          
          </button>
        </div>

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
          Apply
        </button>
      </form>
    </div>
    </div>
  );
};

export default ApplicationPage;
