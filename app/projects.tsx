// components/Projects.tsx

import React from 'react';
import './styles/projects.css'; // Assuming your CSS file path is correct

const projects = [
  {
    title: 'Photos RAG Application',
    description: 'This is a brief description of Project One.',
    link: 'https://example.com/project-one', // Add the project link here
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    link: 'https://example.com/project-two', // Add the project link here
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}