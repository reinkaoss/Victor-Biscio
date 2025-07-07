import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
              {project.category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="View source code on GitHub"
            >
              <Github size={20} />
            </a>
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Layers size={16} className="mr-1" />
            {project.complexity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;