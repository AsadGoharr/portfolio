import React from 'react';
import { motion } from 'framer-motion';
import HeroModel from './canvas/HeroModel';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to My Portfolio
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I am a passionate developer with a knack for creating interactive web applications.
                </motion.p>
                <motion.a
                    href="#projects"
                    className="cta-button"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    View My Work
                </motion.a>
            </div>
            <div className="hero-model">
                <HeroModel />
            </div>
        </section>
    );
};

export default Hero;