import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Click on any project to view the source code or live demo.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center space-x-2 flex-wrap">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg capitalize text-sm font-medium mb-2 transition-colors duration-300 ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;