import * as THREE from 'three';

export const createScene = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    return scene;
};

export const createCamera = (fov, aspect, near, far) => {
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 5);
    return camera;
};

export const createRenderer = (canvas) => {
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    return renderer;
};

export const addLight = (scene) => {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
};

export const animate = (renderer, scene, camera) => {
    const render = () => {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    };
    render();
};