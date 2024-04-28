import * as THREE from "three";

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Define parameters for the fire sparks
const numParticles = 200;
const colors = [0xea580c, 0xffae42, 0xffd666];
const minSize = 0.05;
const maxSize = 0.2;
const minSpeed = 0.05;
const maxSpeed = 0.2;
const depthLayers = 3;

// Create particle system
const particles = new THREE.Group();
scene.add(particles);

for (let i = 0; i < numParticles; i++) {
    const particleColor = colors[Math.floor(Math.random() * colors.length)];
    const size = THREE.MathUtils.randFloat(minSize, maxSize);
    const speed = THREE.MathUtils.randFloat(minSpeed, maxSpeed);
    const depth = Math.floor(Math.random() * depthLayers);

    const geometry = new THREE.CircleGeometry(size, 32);
    const material = new THREE.MeshBasicMaterial({ color: particleColor, transparent: true });

    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(
        THREE.MathUtils.randFloat(-window.innerWidth / 2, window.innerWidth / 2),
        THREE.MathUtils.randFloat(-window.innerHeight / 2, window.innerHeight / 2),
        -depth * 100 // Adjust for z-layers
    );

    particle.userData.speed = speed;
    particles.add(particle);
}

// Set up animation loop
function animate() {
    requestAnimationFrame(animate);
    particles.children.forEach(particle => {
        particle.position.y += particle.userData.speed;
        if (particle.position.y > window.innerHeight / 2) {
            particle.position.y = -window.innerHeight / 2;
        }
    });
    renderer.render(scene, camera);
}

// Set up camera position
camera.position.z = 100;

// Start animation
animate();