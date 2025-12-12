import { projectsData } from '../data';
import Image from 'next/image'; // <--- Import the Image component

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
              
              {/* --- IMAGE SECTION (Updated) --- */}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-950 text-cyan-200 px-2 py-1 rounded-full border border-cyan-900">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noreferrer" className="mt-auto block text-center bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 rounded-lg transition-colors">
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;