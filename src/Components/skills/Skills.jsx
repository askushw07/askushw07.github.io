import React from 'react';
import './skills.css';

const Skills = () => {
  const techSkills = [
    {
      title: "Languages",
      skills: [
        { icon: "fab fa-js-square text-yellow-500", name: "JavaScript", label: "Expert" },
        { icon: "fab fa-html5 text-green-600", name: "HTML5", label: "Expert" },
        { icon: "fab fa-css3-alt text-blue-600", name: "CSS3", label: "Expert" }
      ]
    },
    {
      title: "Front-end",
      skills: [
        { icon: "fab fa-react text-yellow-600", name: "React", label: "Expert" },
        { icon: "fas fa-fire text-red-600", name: "Firebase", label: "Expert" },
        { icon: "fab fa-bootstrap text-green-600", name: "Bootstrap", label: "Expert" },
        { icon: "fas fa-code text-green-600", name: "Tailwind", label: "Expert" }
      ]
    },
    {
      title: "Back-end",
      skills: [
        { icon: "fab fa-node text-green-600", name: "Node.js", label: "Expert" },
        { icon: "fab fa-node-js text-green-600", name: "Express.js", label: "Expert" }
      ]
    },
    {
      title: "Database",
      skills: [
        { icon: "fas fa-server text-green-700", name: "MongoDB", label: "Expert" },
        { icon: "fas fa-server text-green-700", name: "MySql", label: "Intermediate" },
        { icon: "fas fa-server text-green-700", name: "Mongoose", label: "Expert" },
      ]
    },
    {
      title: "Dev Tools",
      skills: [
        { icon: "fab fa-git text-yellow-500", name: "Git", label: "Expert" },
        { icon: "fab fa-github", name: "GitHub", label: "Expert" },
        { icon: "ion-icon ion-laptop-code text-blue-500", name: "VS Code", label: "Expert" },
      ]
      },
      {
          title: "Future skills",
          skills: [
            { icon: "fab fa-react text-yellow-600", name: "React", label: "Expert" },
            { icon: "fas fa-fire text-red-600", name: "Firebase", label: "Expert" },
            { icon: "fab fa-bootstrap text-green-600", name: "Bootstrap", label: "Expert" }]
      }
  ];

  return (
    <section className="skills section" id='skills'>
      <h2>My Skills</h2>
      <div className="skills-wrapper">
        {techSkills.map((elem) => (
          <div className="skill-category" key={elem.title}>
            <h3>{elem.title}</h3>
            <div className="skill-list">
              {elem.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <i className={skill.icon}></i>
                  <p>{skill.name}</p>
                  <p>{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
