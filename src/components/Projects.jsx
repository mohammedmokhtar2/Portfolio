import { projectsData } from '../data';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="py-20 bg-gray-950 text-white px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-500 w-fit mx-auto pb-2">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 border border-gray-800 group flex flex-col">
              
              {/* --- IMAGE SECTION --- */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-950 text-cyan-200 px-2 py-1 rounded-full border border-cyan-900">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- BUTTONS SECTION (Updated) --- */}
                {/* We use 'mt-auto' to push buttons to bottom, and 'flex-wrap' to handle multiple buttons */}
                <div className="mt-auto flex flex-wrap gap-2">
                  
                  {/* 1. Github Button (Always Visible) */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex-1 text-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-3 rounded-lg transition-colors text-sm"
                  >
                    View Code
                  </a>

                  {/* 2. Live Demo Button (Conditional) */}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 text-center border border-cyan-500 hover:bg-cyan-900 text-cyan-400 font-bold py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}

                  {/* 3. Video Button (Conditional) */}
                  {project.video && (
                    <a 
                      href={project.video} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 text-center border border-red-500 hover:bg-red-900/30 text-red-400 font-bold py-2 px-3 rounded-lg transition-colors text-sm"
                    >
                      Watch Video
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;