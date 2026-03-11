import React from 'react';
import { experienceData } from '../constants/experience';
import { motion } from 'framer-motion';

const WorkExperience = () => {
    return (
        <section className="work-experience">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="section-title"
            >
                Work Experience
            </motion.h2>
            <div className="experience-list">
                {experienceData.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="experience-item"
                    >
                        <h3 className="job-title">{job.title}</h3>
                        <p className="company-name">{job.company}</p>
                        <p className="job-duration">{job.duration}</p>
                        <p className="job-description">{job.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;