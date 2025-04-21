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
    <div className="project-card-container">
      <div className="project-card-inner">
        {/* Front of card */}
        <div className="project-card-front bg-darkBlue bg-opacity-40 border border-textSecondary border-opacity-10">
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
        
        {/* Back of card */}
        <div className="project-card-back bg-darkBlue bg-opacity-40 border border-textSecondary border-opacity-10">
          <h3 className="text-xl font-semibold text-textPrimary mb-4">{project.title}</h3>
          <p className="text-textSecondary flex-grow">
            {project.description}
          </p>
          <div className="mt-auto pt-4 flex justify-between">
            <div className="flex space-x-3">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neonBlue hover:text-opacity-80 transition-colors"
                >
                  <i className="fab fa-github mr-2"></i>View Code
                </a>
              )}
            </div>
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neonBlue hover:text-opacity-80 transition-colors"
              >
                <i className="fas fa-external-link-alt mr-2"></i>Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
