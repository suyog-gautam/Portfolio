import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();
  const sceneRef = useRef<THREE.Scene | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const particlesMaterialRef = useRef<THREE.PointsMaterial | null>(null);
  const geometricShapesRef = useRef<THREE.Group | null>(null);
  const scrollingObjectsRef = useRef<THREE.Group | null>(null);
  const orbsRef = useRef<THREE.Group | null>(null);
  
  // Get scroll position and progress using the hook
  const { scrollY, scrollProgress } = useScrollAnimation();
  
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
    
    // Create geometric shapes for additional visual interest
    const geometricShapes = new THREE.Group();
    geometricShapesRef.current = geometricShapes;
    scene.add(geometricShapes);
    
    // Add some floating geometric shapes
    const shapeCount = 15; // Limit for performance
    const shapes: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>[] = [];
    
    // Function to create a random shape
    const createRandomShape = (): THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial> => {
      const shapeType = Math.floor(Math.random() * 3); // 0: cube, 1: sphere, 2: torus
      let geometry: THREE.BufferGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1); // Default value
      
      switch(shapeType) {
        case 0:
          geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
          break;
        case 1:
          geometry = new THREE.SphereGeometry(0.05, 8, 8);
          break;
        case 2:
          geometry = new THREE.TorusGeometry(0.05, 0.02, 8, 16);
          break;
      }
      
      const material = new THREE.MeshBasicMaterial({
        color: isDarkMode ? 0x64ffda : 0x0077b6,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position randomly
      mesh.position.x = (Math.random() - 0.5) * 5;
      mesh.position.y = (Math.random() - 0.5) * 5;
      mesh.position.z = (Math.random() - 0.5) * 2;
      
      // Add unique rotation speeds
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        },
        floatSpeed: (Math.random() - 0.5) * 0.005,
        floatDistance: Math.random() * 0.2 + 0.1,
        initialY: mesh.position.y,
        floatOffset: Math.random() * Math.PI * 2 // Random phase offset
      };
      
      geometricShapes.add(mesh);
      shapes.push(mesh);
      
      return mesh;
    };
    
    // Create shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(createRandomShape());
    }
    
    // Create scroll-based glowing orbs
    const orbs = new THREE.Group();
    orbsRef.current = orbs;
    scene.add(orbs);
    
    // Create 8 orbs at different depths
    const orbCount = 8;
    for (let i = 0; i < orbCount; i++) {
      const geometry = new THREE.SphereGeometry(Math.random() * 0.05 + 0.02, 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: isDarkMode ? 0x64ffda : 0x0077b6,
        transparent: true,
        opacity: Math.random() * 0.3 + 0.2
      });
      
      const orb = new THREE.Mesh(geometry, material);
      
      // Distribute orbs across the scene
      orb.position.x = (Math.random() - 0.5) * 4;
      orb.position.y = (Math.random() - 0.5) * 4;
      orb.position.z = Math.random() * 2 - 1;
      
      // Add custom animation parameters
      orb.userData = {
        floatSpeed: Math.random() * 0.01 + 0.005,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        initialScale: Math.random() * 0.5 + 0.8,
        orbitRadius: Math.random() * 0.5 + 0.2,
        orbitOffset: Math.random() * Math.PI * 2
      };
      
      orbs.add(orb);
    }
    
    // Create glowing lines that appear during scroll
    const scrollingObjects = new THREE.Group();
    scrollingObjectsRef.current = scrollingObjects;
    scene.add(scrollingObjects);
    
    // Create 15 lines that will respond to scroll
    const lineCount = 15;
    for (let i = 0; i < lineCount; i++) {
      // Create a line with random length and position
      const length = Math.random() * 0.8 + 0.4;
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(length * 0.3, length * 0.1, 0),
        new THREE.Vector3(length * 0.7, -length * 0.2, 0),
        new THREE.Vector3(length, 0, 0)
      );
      
      const points = curve.getPoints(20);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const material = new THREE.LineBasicMaterial({ 
        color: isDarkMode ? 0x64ffda : 0x0077b6,
        transparent: true,
        opacity: 0.3
      });
      
      const line = new THREE.Line(geometry, material);
      
      // Position line randomly in the scene
      line.position.x = (Math.random() - 0.5) * 8;
      line.position.y = (Math.random() - 0.5) * 8;
      line.position.z = Math.random() * 2 - 1;
      
      // Random rotation
      line.rotation.x = Math.random() * Math.PI;
      line.rotation.y = Math.random() * Math.PI;
      line.rotation.z = Math.random() * Math.PI;
      
      // Set initial scale to 0 (hidden)
      line.scale.set(0, 0, 0);
      
      // Add custom properties for animation
      line.userData = {
        showAtScrollProgress: i / lineCount, // Each line appears at different scroll points
        scaleSpeed: Math.random() * 0.1 + 0.05,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01
        }
      };
      
      scrollingObjects.add(line);
    }
    
    // Position camera
    camera.position.z = 2;
    
    // Animation
    let animationFrameId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
      
      if (particlesMesh) {
        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0002;
        
        // Subtle wave motion based on time
        for (let i = 0; i < particlesGeometry.attributes.position.count; i++) {
          const x = particlesGeometry.attributes.position.getX(i);
          const y = particlesGeometry.attributes.position.getY(i);
          const z = particlesGeometry.attributes.position.getZ(i);
          
          // Apply small sine wave motion
          const waveAmplitude = 0.02;
          const waveFrequency = 0.5;
          particlesGeometry.attributes.position.setZ(i, z + Math.sin(time * waveFrequency + x * 2 + y * 2) * waveAmplitude);
        }
        
        particlesGeometry.attributes.position.needsUpdate = true;
      }
      
      // Animate geometric shapes
      shapes.forEach(shape => {
        // Rotate each shape
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Float up and down
        shape.position.y = shape.userData.initialY + 
                          Math.sin(time + shape.userData.floatOffset) * 
                          shape.userData.floatDistance;
                          
        // Subtle parallax effect based on scroll position
        const parallaxFactor = 0.0005;
        shape.position.y -= scrollY * parallaxFactor;
      });
      
      // Animate glowing orbs
      if (orbsRef.current) {
        orbsRef.current.children.forEach((orb: THREE.Object3D) => {
          // Pulse size
          const scale = orb.userData.initialScale + Math.sin(time * orb.userData.pulseSpeed) * 0.2;
          orb.scale.set(scale, scale, scale);
          
          // Orbital motion
          const orbitalAngle = time * orb.userData.floatSpeed + orb.userData.orbitOffset;
          const x = orb.position.x + Math.sin(orbitalAngle) * orb.userData.orbitRadius * 0.05;
          const y = orb.position.y + Math.cos(orbitalAngle) * orb.userData.orbitRadius * 0.05;
          orb.position.set(x, y, orb.position.z);
          
          // Adjust visibility based on scroll
          const material = (orb as THREE.Mesh).material as THREE.MeshBasicMaterial;
          // Orbs become more visible as user scrolls
          material.opacity = Math.min(0.5, material.opacity + scrollProgress * 0.2);
        });
      }
      
      // Animate scroll-triggered lines
      if (scrollingObjectsRef.current) {
        scrollingObjectsRef.current.children.forEach((line: THREE.Object3D) => {
          // Only show lines when we reach their specific scroll threshold
          if (scrollProgress >= line.userData.showAtScrollProgress) {
            // Gradually scale up to full size
            const targetScale = 1;
            const currentScale = line.scale.x;
            const newScale = currentScale + (targetScale - currentScale) * line.userData.scaleSpeed;
            line.scale.set(newScale, newScale, newScale);
            
            // Rotate the line
            line.rotation.x += line.userData.rotationSpeed.x;
            line.rotation.y += line.userData.rotationSpeed.y;
            line.rotation.z += line.userData.rotationSpeed.z;
            
            // Adjust line opacity based on scroll progress
            const material = (line as THREE.Line).material as THREE.LineBasicMaterial;
            material.opacity = 0.2 + scrollProgress * 0.3; // Increase opacity as user scrolls
          }
        });
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
        
        // Move geometric shapes slightly based on mouse position
        if (geometricShapes) {
          geometricShapes.rotation.x += mouseY * 0.0001;
          geometricShapes.rotation.y += mouseX * 0.0001;
        }
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
      
      // Dispose of regular shapes
      shapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
      
      // Dispose of orbs
      if (orbsRef.current) {
        orbsRef.current.children.forEach((orb: THREE.Object3D) => {
          if (orb instanceof THREE.Mesh) {
            orb.geometry.dispose();
            (orb.material as THREE.Material).dispose();
          }
        });
      }
      
      // Dispose of scrolling lines
      if (scrollingObjectsRef.current) {
        scrollingObjectsRef.current.children.forEach((line: THREE.Object3D) => {
          if (line instanceof THREE.Line) {
            line.geometry.dispose();
            (line.material as THREE.Material).dispose();
          }
        });
      }
      
      renderer.dispose();
    };
  }, []);
  
  // Update material colors when theme changes
  useEffect(() => {
    const themeColor = isDarkMode ? 0x64ffda : 0x0077b6;
    
    // Update particle colors
    if (particlesMaterialRef.current) {
      particlesMaterialRef.current.color.set(themeColor);
    }
    
    // Update geometric shapes colors
    if (geometricShapesRef.current) {
      geometricShapesRef.current.children.forEach(child => {
        const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.color.set(themeColor);
      });
    }
    
    // Update orbs colors
    if (orbsRef.current) {
      orbsRef.current.children.forEach(child => {
        const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        material.color.set(themeColor);
      });
    }
    
    // Update scrolling lines colors
    if (scrollingObjectsRef.current) {
      scrollingObjectsRef.current.children.forEach(child => {
        const material = (child as THREE.Line).material as THREE.LineBasicMaterial;
        material.color.set(themeColor);
      });
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
