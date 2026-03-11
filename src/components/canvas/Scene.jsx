import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import StarsBackground from './StarsBackground';
import HeroModel from './HeroModel';
import ContactGlobe from './ContactGlobe';

const Scene = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 1, 5);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;

        // Add background stars
        const stars = new StarsBackground();
        scene.add(stars);

        // Add hero model
        const heroModel = new HeroModel();
        scene.add(heroModel);

        // Add contact globe
        const contactGlobe = new ContactGlobe();
        scene.add(contactGlobe);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            document.body.removeChild(renderer.domElement);
            window.removeEventListener('resize', () => {});
        };
    }, []);

    return null;
};

export default Scene;