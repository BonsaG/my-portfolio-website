import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };
  
  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full transition-colors duration-300"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Here are some of my recent projects that showcase my skills and experience 
            in building web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;