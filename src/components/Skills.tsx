import React, { useEffect, useRef, useState } from 'react';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="section-heading">Skills &amp; Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Technologies and tools I work with</p>
        </div>

        <div className="space-y-16">
          {skillsData.map((category) => (
            <div key={category.name} className="skill-card">
              <h3 className="text-xl text-accent mb-6">{category.name}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-lg border border-gray-200 dark:border-accent/10 hover:border-accent/40 dark:hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-center mb-3">
                      <skill.icon className="w-5 h-5 text-accent mr-2" />
                      <h4 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h4>
                    </div>

                    <div className="relative h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="skill-bar dark:animate-glow"
                        style={{ width: inView ? `${skill.level}%` : '0%' }}
                      />
                    </div>

                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;
