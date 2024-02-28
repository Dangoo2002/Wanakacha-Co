/* eslint-disable @next/next/no-img-element */
// components/TeamSection.js
import React from 'react';
import styles from './tutors.module.css';



const Teachers = () => {
  const teamMembers = [
    {
      name: 'John Mwega',
      title: 'Software Engineer',
      description: 'Experienced software engineer specializing in web development.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VwQMqMquNdqceVIdriBTvV8JKiyXWp11VA&s', // Replace with the actual image path
    },
    {
      name: 'Cliff Oganda',
      title: 'Data Scientist',
      description: 'Data scientist with expertise in machine learning and analytics.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VwQMqMquNdqceVIdriBTvV8JKiyXWp11VA&s', // Replace with the actual image path
    },
    {
      name: 'Patricia Wanjiku',
      title: 'UX Designer',
      description: 'Passionate UX designer creating intuitive and user-friendly interfaces.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VwQMqMquNdqceVIdriBTvV8JKiyXWp11VA&s', // Replace with the actual image path
    },
    {
      name: 'Ian Shikami',
      title: 'Frontend Developer',
      description: 'Creative frontend developer building responsive and engaging websites.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VwQMqMquNdqceVIdriBTvV8JKiyXWp11VA&s', // Replace with the actual image path
    },
  ];


  return (
    <div className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <img src={member.image} alt={`${member.name}'s picture`} className={styles.memberImage} />
            <h2 className={styles.memberName}>{member.name}</h2>
            <h3 className={styles.memberTitle}>{member.title}</h3>
            <p className={styles.memberDescription}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Teachers;
