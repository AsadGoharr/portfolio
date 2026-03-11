import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; // Assuming you have a Model component for the 3D model

const HeroModel = () => {
  useEffect(() => {
    // Any additional setup can be done here
  }, []);

  return (
    <div className="hero-model-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls />
      </Canvas>
      <div className="hero-text">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my work and projects.</p>
      </div>
    </div>
  );
};

export default HeroModel;