// components/CourseCatalog.js
import React from "react";
import styles from "./catalog.module.css";

import { DiAndroid, DiPython, DiReact, DiJavascript } from "react-icons/di";
const CourseCatalog = () => {
  const courses = [
    {
      title: "Web Development Bootcamp",
      description:
        "Comprehensive training in front-end and back-end technologies.",
      languages: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vue",
        "Next",
        "Node.js",
        "Express",
      ],
    },
    {
      title: "Software Engineering Fundamentals",
      description: "Learn software design, algorithms, and best practices.",
      languages: ["Java", "Python", "C#", "Ruby", "Go", "Swift"],
    },
    {
      title: "Mobile App Development",
      description:
        "Explore mobile app development for iOS and Android platforms.",
      languages: ["Swift", "Kotlin", "React Native", "Flutter" ],
      
    },
    
  ];
  const iconSize = 40;
  return (
    <div className={styles.courseCatalog}>
      <h2 className={styles.courseCatalogTitle}>What is Offered</h2>
      {courses.map((course, index) => (
        <div key={index} className={styles.courseCard}>
          <h3 className={styles.courseTitle}>{course.title}</h3>
          <p className={styles.courseDescription}>{course.description}</p>
          <div className={styles.languages}>
            <strong>Languages:</strong> {course.languages.join(", ")}
          </div>
          
           {course.languages.includes('Flutter') && <DiAndroid size={iconSize} />}
          {course.languages.includes('Python') && <DiPython size={iconSize} />}
          {course.languages.includes('React') && <DiReact  size={iconSize} /> && <DiJavascript  size={iconSize} />}
        </div>
      ))}
    </div>
  );
};

export default CourseCatalog;
