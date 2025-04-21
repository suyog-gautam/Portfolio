import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

interface LoadingAnimationProps {
  onAnimationComplete: () => void;
}

const LoadingAnimation = ({ onAnimationComplete }: LoadingAnimationProps) => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles to form the name
    const nameParticles = new THREE.Group();
    scene.add(nameParticles);
    
    // Prepare to create the text
    const textPoints: THREE.Vector3[] = [];
    const nameText = "SUYOG GAUTAM";
    const textSize = Math.min(width * 0.06, 35); // Responsive text size
    
    // Create a canvas to draw the text and sample points
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (context) {
      canvas.width = width;
      canvas.height = height * 0.3;
      
      context.fillStyle = 'white';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = `bold ${textSize}px Poppins, Arial, sans-serif`;
      
      // Draw the text
      context.fillText(nameText, canvas.width / 2, canvas.height / 2);
      
      // Sample points from the text
      const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
      const buffer = imgData.data;
      
      // Sample the text at regular intervals
      const sampleStep = Math.floor(width / 150); // Adjust for more/less particles
      
      for (let y = 0; y < canvas.height; y += sampleStep) {
        for (let x = 0; x < canvas.width; x += sampleStep) {
          const index = (y * canvas.width + x) * 4;
          if (buffer[index] > 0) { // If we hit a white pixel (part of the text)
            // Calculate 3D position, centered on origin
            const vertex = new THREE.Vector3(
              x - canvas.width / 2,
              -y + canvas.height / 2,
              0
            );
            textPoints.push(vertex);
          }
        }
      }
    }
    
    // Determine how many random points to generate (for objects that will transform into text)
    const numRandomPoints = textPoints.length;
    const randomPoints: THREE.Vector3[] = [];
    
    // Generate random points in a spherical space
    for (let i = 0; i < numRandomPoints; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 2 + Math.random() * 3;
      
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
      
      randomPoints.push(new THREE.Vector3(x, y, z));
    }
    
    // Create geometry for the particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(numRandomPoints * 3);
    
    // Set initial positions as the random points
    for (let i = 0; i < numRandomPoints; i++) {
      positions[i * 3] = randomPoints[i].x;
      positions[i * 3 + 1] = randomPoints[i].y;
      positions[i * 3 + 2] = randomPoints[i].z;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Create material for the particles
    const material = new THREE.PointsMaterial({
      size: 0.03,
      color: isDarkMode ? 0x64ffda : 0x0077b6,
      transparent: true,
      opacity: 0.8
    });
    
    // Create the particle system
    const particleSystem = new THREE.Points(geometry, material);
    nameParticles.add(particleSystem);
    
    // Animation variables
    let time = 0;
    const animationDuration = 2.5; // in seconds
    const fadeOutDuration = 0.8; // in seconds
    
    // Animation
    const animate = () => {
      const frameId = requestAnimationFrame(animate);
      time += 0.016; // Approximately 60fps
      
      // Animation progress from 0 to 1
      const progress = Math.min(time / animationDuration, 1);
      
      // Update particle positions
      const positions = particleSystem.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < numRandomPoints; i++) {
        // Interpolate between random points and text points
        positions[i * 3] = randomPoints[i].x + (textPoints[i % textPoints.length].x - randomPoints[i].x) * progress;
        positions[i * 3 + 1] = randomPoints[i].y + (textPoints[i % textPoints.length].y - randomPoints[i].y) * progress;
        positions[i * 3 + 2] = randomPoints[i].z + (textPoints[i % textPoints.length].z - randomPoints[i].z) * progress;
      }
      
      particleSystem.geometry.attributes.position.needsUpdate = true;
      
      // Rotate the entire text slightly for visual appeal
      nameParticles.rotation.y = Math.sin(time * 0.5) * 0.1;
      
      renderer.render(scene, camera);
      
      // When animation is done, start fade out
      if (progress === 1 && time > animationDuration + 0.5 && !fadeOut) {
        setFadeOut(true);
        setTimeout(() => {
          // After fadeout animation, clean up resources and signal completion
          cancelAnimationFrame(frameId);
          if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement);
          }
          geometry.dispose();
          material.dispose();
          renderer.dispose();
          onAnimationComplete();
        }, fadeOutDuration * 1000);
      }
    };
    
    animate();
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [isDarkMode, onAnimationComplete]);
  
  return (
    <div 
      ref={containerRef} 
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-darkBlue bg-opacity-90 transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ 
        transitionDuration: '800ms',
        backgroundColor: isDarkMode ? 'rgba(10, 25, 47, 0.9)' : 'rgba(245, 245, 247, 0.9)'
      }}
    >
      <div className="text-center">
        {/* This div is just a wrapper for the Three.js canvas */}
      </div>
    </div>
  );
};

export default LoadingAnimation;