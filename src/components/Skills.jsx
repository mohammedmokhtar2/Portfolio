import { skillsData } from '../data';

const Skills = () => {
  return (
    <section className="py-24 bg-black text-white px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
            Technical Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills & Stack Specifications
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Core programming languages, AI/GenAI frameworks, and data platforms.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="rounded-[32px] bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-white/10 p-8 backdrop-blur-2xl hover:border-white/20 transition-all duration-500 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-white tracking-tight text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300 group backdrop-blur-md"
                  >
                    <div className="text-3xl text-neutral-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {skill.icon && <skill.icon aria-hidden="true" />}
                    </div>
                    <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors text-center tracking-wide">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;