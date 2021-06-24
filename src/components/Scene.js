import { useEffect } from 'react';
import * as THREE from 'three';

const Scene = () => {

    useEffect(() => {
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        const scene = new THREE.Scene();

        const material = new THREE.MeshBasicMaterial({ color: 0xf5f3f4, wireframe: true });

        const cube = new THREE.Mesh(
            new THREE.BoxBufferGeometry(1, 1, 1),
            material
        );
        cube.position.x = 2.5;

        scene.add(cube);

        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        camera.position.z = 3;
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const clock = new THREE.Clock();

        const tick = () => {

            const elapsedTime = clock.getElapsedTime();

            cube.rotation.x = elapsedTime;
            cube.rotation.y = elapsedTime;

            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
        };

        tick();

        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        document.querySelector('.webgl').appendChild(renderer.domElement);

    });

    return (
        <div className="webgl">

        </div>
    )
};

export default Scene;