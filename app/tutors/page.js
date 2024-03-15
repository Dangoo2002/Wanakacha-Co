/* eslint-disable @next/next/no-img-element */

import React from 'react';
import styles from './tutors.module.css';
import Image from 'next/image';
import omollo from '../../public/omollo.png';
import wanjiku from '../../public/Liruga.jpeg';
import onyango from '../../public/onyango-tate.jpg'
import kifee from '../../public/kifee.jpeg'

const Teachers = () => {
  const teamMembers = [
    {
      name: 'Willystone Walucho',
      title: 'Software Engineer',
      description: 'Experienced software engineer specializing in web development.',
      image: onyango, 
    },
    {
      name: 'Cliff Oganda',
      title: 'Data Scientist',
      description: 'Data scientist with expertise in machine learning and analytics.',
      image: omollo, 
    },
    {
      name: 'Purity Liruga',
      title: 'UX Designer',
      description: 'Passionate UX designer creating intuitive and user-friendly interfaces.',
      image: wanjiku, 
    },
    {
      name: 'Ian Shikami',
      title: 'Frontend Developer',
      description: 'Creative frontend developer building responsive and engaging websites.',
      image: kifee, 
    },
  ];

  return (
    <div className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Meet Our Team</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamCard}>
            <Image src={member.image} alt={`${member.name}'s picture`} className={styles.memberImage} />
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
