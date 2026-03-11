import React from 'react';
import { projectsData } from '../constants/projects';
import './Projects.css'; // Assuming you will create a CSS file for styling

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;