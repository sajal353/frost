import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import CANNON from 'cannon';

export default class WebGL {
    constructor(options) {
        this.sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1b1b1b);

        this.fov = 75;

        this.camera = new THREE.PerspectiveCamera(this.fov, this.sizes.width / this.sizes.height, 0.1, 1000);
        this.camera.position.y = 3;
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMappingExposure = Math.pow(1.15, 4.0);

        (options.dom).appendChild(this.renderer.domElement);

        this.clock = new THREE.Clock();

        this.textureLoader = new THREE.TextureLoader();

        this.mouse = new THREE.Vector2();

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;

        this.previousTime = 0;

        this.composerPass();
        this.resize();
        this.setupResize();
        this.lights();
        this.physics();
        this.playGround();
        this.mouseMovement();
        this.tick();

    }

    composerPass() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.outputEncoding = THREE.sRGBEncoding;

        this.bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        this.bloomPass.threshold = 0;
        this.bloomPass.strength = 1.0;
        this.bloomPass.radius = 1;

        this.renderPass = new RenderPass(this.scene, this.camera);

        this.composer.addPass(this.renderPass);
        this.composer.addPass(this.bloomPass);

    }

    mouseMovement() {
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            this.sphereBody.position.x = this.mouse.x * 4.5;
            this.sphereBody.position.z = - this.mouse.y * 2;
            this.sphereBody.position.y = 0;
        });
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.sizes.width = window.innerWidth;
        this.sizes.height = window.innerHeight;

        this.camera.aspect = this.sizes.width / this.sizes.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.composer.setSize(this.sizes.width, this.sizes.height);
        this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    }

    lights() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.06);
        // this.pointLight = new THREE.PointLight(0xffffff, 0.5);
        // this.pointLight.position.set(0, 3, 0);
        // this.pointLight.castShadow = true;
        // this.pointLight.shadow.mapSize.width = 1024;
        // this.pointLight.shadow.mapSize.height = 1024;
        // this.pointLight.shadow.radius = 5;

        this.scene.add(this.ambientLight);
        // this.scene.add(this.pointLight);

    }

    physics() {
        this.world = new CANNON.World();
        this.world.broadphase = new CANNON.SAPBroadphase(this.world);
        this.world.allowSleep = false;
        this.world.gravity.set(0, -9.81, 0);

        this.defaultMaterial = new CANNON.Material();

        this.defaultContactMaterial = new CANNON.ContactMaterial(
            this.defaultMaterial,
            this.defaultMaterial,
            {
                friction: 0.1,
                restitution: 0.7
            }
        );
        this.world.addContactMaterial(this.defaultContactMaterial);
        this.world.defaultContactMaterial = this.defaultContactMaterial;

        const floorShape = new CANNON.Plane();
        const floorBody = new CANNON.Body({
            mass: 0,
            shape: floorShape,
            material: this.defaultMaterial
        });
        floorBody.quaternion.setFromAxisAngle(
            new CANNON.Vec3(1, 0, 0),
            - Math.PI * 0.5);
        this.world.addBody(floorBody);

        this.sphereShape = new CANNON.Box(new CANNON.Vec3(0.5 / 2, 0.5 / 2, 0.5 / 2));
        this.sphereBody = new CANNON.Body({
            mass: 10,
            position: new CANNON.Vec3(0, 0, 0),
            shape: this.sphereShape,
            material: this.defaultMaterial
        });

        this.world.addBody(this.sphereBody);

    }

    playGround() {

        this.sphere = new THREE.Mesh(
            new THREE.BoxBufferGeometry(0.5, 0.5, 0.5),
            new THREE.MeshBasicMaterial({
                color: 0x00ff00,
                wireframe: true,
                transparent: true,
                opacity: 0
            })
        )

        this.scene.add(this.sphere);


        this.plane = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(10, 10),
            new THREE.MeshStandardMaterial({ color: 0x1b1b1b })
        );
        this.plane.receiveShadow = true;
        this.plane.rotation.x = - (Math.PI * 0.5);

        this.scene.add(this.plane);


        this.objectsToUpdate = [];

        this.boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
        this.boxMaterial = new THREE.MeshBasicMaterial({
            color: 0xe4e4e4,
            metalness: 0.3,
            roughness: 0.4
        });

        const createBox = (size, position) => {
            const mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(size.x, size.y, size.z), this.boxMaterial);
            mesh.castShadow = true;
            mesh.position.copy(position);
            this.scene.add(mesh);

            const shape = new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2));
            const body = new CANNON.Body({
                mass: 1,
                position: new CANNON.Vec3(0, 5, 0),
                shape,
                material: this.defaultMaterial
            });
            body.position.copy(position);
            // body.addEventListener('collide', playHitSound);
            this.world.addBody(body);

            this.objectsToUpdate.push({
                mesh: mesh,
                body: body
            });
        };

        this.meshCount = 0;

        setInterval(() => {
            if (this.meshCount < 50) {
                createBox(
                    {
                        x: Math.abs(Math.random() - 0.5),
                        y: Math.abs(Math.random() - 0.5),
                        z: Math.abs(Math.random() - 0.5)
                    },
                    {
                        x: (Math.random() - 0.5) * 8,
                        y: 2,
                        z: (Math.random() - 0.5) * 8
                    }
                );

                this.meshCount++;

            }
        }, 200);





    }

    tick() {

        let elapsedTime = this.clock.getElapsedTime();
        const deltaTime = elapsedTime - this.previousTime;
        this.previousTime = elapsedTime;

        this.world.step(1 / 60, deltaTime, 3);

        for (const object of this.objectsToUpdate) {
            object.mesh.position.copy(object.body.position);
            object.mesh.quaternion.copy(object.body.quaternion);
        };

        this.sphere.position.copy(this.sphereBody.position);

        // this.material.uniforms.time.value = elapsedTime;

        this.composer.render();
        // this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.tick.bind(this));


    }
}











