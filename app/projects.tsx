// components/Projects.tsx

import React from 'react';
import './styles/projects.css'; // Make sure this path is correct

const projects = [
  {
    title: "Daniel's Life",
    description: 'A natural language-based image-retrieval and caption generation web application using Retrieval Augmented Search (RAG).',
    link: 'https://github.com/medinardaniel/photos-rag',
  },
  {
    title: 'Rust Actix Containerization',
    description: 'Containerization of a Rust Actix Web Service using Docker.',
    link: 'https://github.com/medinardaniel/rust-actix',
  },
  {
    title: "Daniel's Chatbot",
    description: "A web-based application designed to answer questions about Daniel's professional background via a chat interface.",
    link: 'https://github.com/medinardaniel/daniels-chatbot',
  },
  {
    title: "Serverless Rust Microservice",
    description: "A Rust Lambda function that interacts with an AWS S3 bucket.",
    link: 'https://github.com/medinardaniel/serverless-rust-microservice',
  },
  {
    title: "Duke Atlas (CREATE LAB)",
    description: "A smart chatbot that helps students navigate the course registration process at Duke University.",
    link: '', // Empty link indicates more details are coming soon
  },
  {
    title: "Protein Transformer",
    description: "A protein sequence transformer model.",
    link: '',
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <hr className="section-divider"/>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Learn More</a>
              ) : (
                <span className="project-coming-soon">More details coming soon</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
