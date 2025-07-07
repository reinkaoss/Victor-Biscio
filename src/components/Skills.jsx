import React from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="text-gray-400 mt-4">Technologies and tools I work with</p>
        </div>
        
        <div className="space-y-16">
          {skillsData.map((category) => (
            <div key={category.name} className="skill-card">
              <h3 className="text-xl text-[#00ff9d] mb-6">{category.name}</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="skill-item bg-gray-900/30 p-4 rounded-lg border border-[#00ff9d]/10 hover:border-[#00ff9d]/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <skill.icon className="w-5 h-5 text-[#00ff9d] mr-2" />
                      <h4 className="text-gray-200 font-medium">{skill.name}</h4>
                    </div>
                    
                    <div className="relative h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar absolute top-0 left-0 h-full bg-[#00ff9d] rounded-full w-0 group-hover:animate-progress"
                        style={{ '--progress': `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 animate-glow"></div>
                      </div>
                    </div>
                    
                    <span className="text-xs text-gray-400 mt-1 block">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-[#00ff9d]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#00ff9d]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;