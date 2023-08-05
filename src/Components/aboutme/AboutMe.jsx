import React from 'react';
import './aboutme.css';
import resume from '../../Assets/resume.pdf';

const AboutMe = () => {
  return (
    <section className="about-me" id='about'>
          <div>
          <h2>About Me</h2>
      <p>
        I am currently learning the MERN (MongoDB, Express.js, React, Node.js) stack from Masai School, along with Data Structures and Algorithms in Java.
        Prior to that, I completed my Bachelor's degree in Mathematics from Dyal Singh College, University of Delhi. I have a strong background in problem-solving and logical thinking, which I find to be beneficial in software development.
      </p>
      <p>
        During my 10+2 education, I studied Physics, Chemistry, and Mathematics from Kendriya Vidyalaya Bhind. These subjects have further enhanced my problem-solving skills and mathematical understanding.
      </p>
          </div>
          <a href={resume} className="button button--flex" download={'resume'}>
              Get CV
          </a>
    </section>
  );
};

export default AboutMe;
