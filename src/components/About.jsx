import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Assuming you have a CSS file for additional styling

const About = () => {
    return (
        <section className="about" id="about">
            <motion.div 
                className="about-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2>About Me</h2>
                <p>
                    Hello! I'm a passionate developer with a keen interest in creating interactive web applications. 
                    I enjoy learning new technologies and applying them to solve real-world problems. 
                    In my free time, I love exploring the outdoors and working on personal projects.
                </p>
            </motion.div>
        </section>
    );
};

export default About;