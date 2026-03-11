import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ContactGlobe = () => {
    const globeRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        globeRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        camera.position.z = 10;

        const animate = () => {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            globeRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={globeRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ContactGlobe;