import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  
  // Mock load progress - in a real app, this would track actual resource loading
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 5) + 1; // Random progress increase between 1-5%
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // When loading is complete, trigger fade out animation
        setTimeout(() => {
          setFadeOut(true);
          
          // After fade out animation completes, signal loading is complete
          setTimeout(() => {
            onLoadComplete();
          }, 800); // Match the CSS transition duration
        }, 500);
      }
      
      setLoadingProgress(progress);
    }, 120);
    
    return () => clearInterval(interval);
  }, [onLoadComplete]);
  
  // Initialize Three.js cube
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up scene, camera and renderer
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    
    renderer.setSize(200, 200); // Fixed size for the cube renderer
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create cube
    const cubeSize = 2;
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    
    // Create cube material with wireframe edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: isDarkMode ? 0x64ffda : 0x0077b6,
      transparent: true,
      opacity: 0.8
    });
    
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);
    
    // Create a slightly transparent face material
    const faceMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x64ffda : 0x0077b6,
      transparent: true,
      opacity: 0.1
    });
    
    const cube = new THREE.Mesh(geometry, faceMaterial);
    scene.add(cube);
    
    // Animation
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Rotate cube
      wireframe.rotation.x += 0.005;
      wireframe.rotation.y += 0.007;
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.007;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      
      if (canvasRef.current && canvasRef.current.contains(renderer.domElement)) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js resources
      geometry.dispose();
      lineMaterial.dispose();
      faceMaterial.dispose();
      edges.dispose();
      renderer.dispose();
    };
  }, [isDarkMode]);
  
  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight transition-opacity duration-800 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ 
        background: 'linear-gradient(to bottom, #0a192f, #020c1b)',
      }}
    >
      <div className="relative">
        {/* Three.js cube container */}
        <div ref={canvasRef} className="w-[200px] h-[200px] flex items-center justify-center"></div>
        
        {/* Loading progress indicator */}
        <div className="absolute bottom-[-50px] left-0 right-0 text-center">
          <p className="text-textPrimary font-medium tracking-wider loading-text">
            <span className="mr-2">Loading...</span>
            <span>{loadingProgress}%</span>
          </p>
          
          {/* Progress bar */}
          <div className="w-full h-1 mt-2 bg-darkBlue rounded-full overflow-hidden">
            <div 
              className="h-full bg-neonBlue rounded-full transition-all duration-300 glow-bar"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;