import React from 'react';
import './projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'Project 1',
      description: 'This is the first project description.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'This is the second project description.',
      link: 'https://example.com/project2',
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects-container" id='projects'>
      <h1>My Projects</h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="button button--flex">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
