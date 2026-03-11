import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scene from './components/canvas/Scene';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Scene />
      <About />
      <Education />
      <WorkExperience />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;