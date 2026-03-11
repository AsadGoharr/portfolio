import React from 'react';
import { skillsData } from '../constants/skills';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3 className="skill-name">{skill.name}</h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;