import { projectsData } from '../data';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="py-20 bg-gray-950 text-white px-5" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-500 w-fit mx-auto pb-2">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 border border-gray-800 hover:border-cyan-500/50 group flex flex-col">
              
              {/* --- IMAGE SECTION --- */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-950">
                <Image 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-950 text-cyan-300 px-2.5 py-1 rounded-full border border-cyan-900/60 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- BUTTONS SECTION --- */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  
                  {/* 1. Github Button */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`View code for ${project.title} on GitHub`}
                    className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-white font-bold py-2.5 px-3 rounded-lg transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <FaGithub className="text-base" />
                    <span>View Code</span>
                  </a>

                  {/* 2. Live Demo Button */}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`View live demo for ${project.title}`}
                      className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 border border-cyan-500 hover:bg-cyan-950/60 active:scale-95 text-cyan-400 font-bold py-2.5 px-3 rounded-lg transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {/* 3. Video Button */}
                  {project.video && (
                    <a 
                      href={project.video} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Watch video demonstration for ${project.title}`}
                      className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 border border-red-500/80 hover:bg-red-950/40 active:scale-95 text-red-400 font-bold py-2.5 px-3 rounded-lg transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                    >
                      <FaPlay className="text-xs" />
                      <span>Watch Video</span>
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