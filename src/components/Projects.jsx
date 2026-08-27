import { projectsData } from '../data';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="py-28 bg-black text-white px-6 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
            Engineering Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Featured Systems & Applications
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Architected and built with high performance, scalability, and production reliability in mind.
          </p>
        </div>

        {/* Apple Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="rounded-[32px] bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-white/10 overflow-hidden hover:border-white/25 hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-all duration-500 group flex flex-col backdrop-blur-2xl"
            >
              
              {/* Image Section with Apple Glass Reflection */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-950">
                <Image 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Section */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-300 text-sm mb-6 leading-relaxed font-light line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-medium bg-white/5 text-neutral-300 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Apple Pill Action Buttons */}
                <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                  
                  {/* GitHub Code Button */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`View code for ${project.title} on GitHub`}
                    className="flex-1 min-h-[42px] inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 active:scale-95 font-semibold py-2.5 px-4 rounded-full transition-all text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-md"
                  >
                    <FaGithub className="text-sm" />
                    <span>Source Code</span>
                  </a>

                  {/* Live Demo Button */}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`View live demo for ${project.title}`}
                      className="flex-1 min-h-[42px] inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/15 text-white active:scale-95 font-medium py-2.5 px-4 rounded-full transition-all text-xs backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {/* Video Button */}
                  {project.video && (
                    <a 
                      href={project.video} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Watch video demonstration for ${project.title}`}
                      className="flex-1 min-h-[42px] inline-flex items-center justify-center gap-2 border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-300 active:scale-95 font-medium py-2.5 px-4 rounded-full transition-all text-xs backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                    >
                      <FaPlay className="text-[10px]" />
                      <span>Watch Demo</span>
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