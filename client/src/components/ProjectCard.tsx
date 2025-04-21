import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Project {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate rotation based on mouse position
      // Converting to a range of -10 to 10 degrees
      const rotateY = -10 + (20 * x / rect.width);
      const rotateX = 10 - (20 * y / rect.height);
      
      // Apply rotation and add glow effect
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.boxShadow = `0 10px 30px -10px rgba(100, 255, 218, 0.4)`;
    };
    
    const handleMouseLeave = () => {
      // Reset the transform on mouse leave
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 10px 30px -15px rgba(100, 255, 218, 0.25)';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className="project-card bg-darkBlue bg-opacity-40 rounded-lg overflow-hidden border border-textSecondary border-opacity-10 card-3d"
      style={{ transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out' }}
    >
      <div className="h-48 bg-midnight relative overflow-hidden">
        {/* Project Image Placeholder with Icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-deepBlue bg-opacity-50">
          <i className={`${project.icon} text-neonBlue text-5xl opacity-30`}></i>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-textPrimary">{project.title}</h3>
          <div className="flex space-x-3">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neonBlue hover:text-opacity-80 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neonBlue hover:text-opacity-80 transition-colors"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
        <p className="text-textSecondary text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded bg-midnight text-neonBlue"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
