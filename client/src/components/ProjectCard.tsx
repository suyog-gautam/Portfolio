import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

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
  const { isDarkMode } = useTheme();
  
  return (
    <div className="bg-darkBlue bg-opacity-40 border border-textSecondary border-opacity-10 rounded-lg overflow-hidden h-full hover-shadow-glow transition-all duration-300 hover:-translate-y-1">
      <div className="h-48 bg-midnight relative overflow-hidden">
        {/* Project Image Placeholder with Icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-deepBlue bg-opacity-50">
          <i className={`${project.icon} text-neonBlue text-5xl ${isDarkMode ? 'opacity-30' : 'opacity-50'}`}></i>
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
