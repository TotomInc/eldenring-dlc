"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function ParticleBackground() {
  const isInit = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || isInit.current) return;

    isInit.current = true;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container")!.appendChild(renderer.domElement);

    // Define parameters for the fire sparks
    const numParticles = 4000;

    const colors = ["#dc2626", "#ef4444", "#c2410c", "#ea580c", "#fb923c"]

    const minSize = 0.175;
    const maxSize = 0.35;

    const minSpeed = 0.0175;
    const maxSpeed = 0.125;

    const minHorizontalSpeed = -0.015;
    const maxHorizontalSpeed = 0.04;

    const depthLayers = 2;

    // Create particle system
    const particles = new THREE.Group();
    scene.add(particles);

    for (let i = 0; i < numParticles; i++) {
      const particleColor = colors[Math.floor(Math.random() * colors.length)];
      const size = THREE.MathUtils.randFloat(minSize, maxSize);
      const speed = THREE.MathUtils.randFloat(minSpeed, maxSpeed);
      const horizontalSpeed = THREE.MathUtils.randFloat(minHorizontalSpeed, maxHorizontalSpeed);
      const depth = Math.floor(Math.random() * depthLayers);

      const x = THREE.MathUtils.randFloatSpread(window.innerWidth);
      const y = THREE.MathUtils.randFloat(-window.innerHeight / 2, window.innerHeight / 2);

      const geometry = new THREE.CircleGeometry(size, 32);
      const material = new THREE.MeshBasicMaterial({ color: particleColor, transparent: true });

      const particle = new THREE.Mesh(geometry, material);
      particle.position.set(x, y, -depth * 100); // Adjust for z-layers

      particle.userData.speed = speed;
      particle.userData.horizontalSpeed = horizontalSpeed;
      particles.add(particle);
    }

    // Set up animation loop
    function animate() {
      requestAnimationFrame(animate);
      particles.children.forEach(particle => {
        particle.position.y += particle.userData.speed;
        particle.position.x += particle.userData.horizontalSpeed;

        if (particle.position.y > window.innerHeight / 2) {
          particle.position.y = -window.innerHeight / 2;
          particle.position.x = THREE.MathUtils.randFloatSpread(window.innerWidth);
        }
      });
      renderer.render(scene, camera);
    }

    // Set up camera position
    camera.position.z = 100;

    // Start animation
    animate();
  }, []);

  return null;
}
