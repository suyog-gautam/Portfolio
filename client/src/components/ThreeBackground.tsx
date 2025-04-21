import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const particlesMaterialRef = useRef<THREE.PointsMaterial | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Get container dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 700;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: isDarkMode ? 0x64ffda : 0x0077b6, // Different color based on theme
      transparent: true,
      opacity: 0.8
    });
    
    particlesMaterialRef.current = particlesMaterial;
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesMeshRef.current = particlesMesh;
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 2;
    
    // Animation
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      if (particlesMesh) {
        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0002;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    };
    
    // Add interactive mouse effect
    const handleMouseMove = (event: MouseEvent) => {
      if (particlesMesh) {
        // Move particles slightly based on mouse position
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
        particlesMesh.rotation.x += mouseY * 0.0003;
        particlesMesh.rotation.y += mouseX * 0.0003;
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  // Update particle color when theme changes
  useEffect(() => {
    if (particlesMaterialRef.current) {
      particlesMaterialRef.current.color.set(isDarkMode ? 0x64ffda : 0x0077b6);
    }
  }, [isDarkMode]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed w-full h-full top-0 left-0 z-[-1]"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
