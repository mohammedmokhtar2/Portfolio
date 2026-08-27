import { experienceData } from '../data';

const Experience = () => {
  return (
    <section className="py-24 bg-black text-white px-6 relative" id="experience">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
            Professional Trajectory
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Experience & Engineering Roles
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Hands-on technical contributions across enterprise RAG systems, IoT control engineering, AI pipelines, and computer vision.
          </p>
        </div>

        {/* Apple Timeline */}
        <div className="relative border-l border-white/15 ml-4 md:ml-32 space-y-12 pl-8 md:pl-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-black shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 transition-transform duration-300" />

              {/* Glass Bento Card */}
              <div className="rounded-[28px] bg-gradient-to-b from-neutral-900/70 to-neutral-950/80 border border-white/10 p-6 md:p-8 backdrop-blur-xl hover:border-white/20 transition-all duration-300 shadow-xl">
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/15 text-neutral-300 tracking-wide font-mono w-fit">
                    {exp.duration}
                  </span>
                </div>
                
                <h4 className="text-base font-medium text-neutral-400 mb-4">
                  {exp.company}
                </h4>
                
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light mb-6">
                  {exp.description}
                </p>
                
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-medium bg-white/5 text-neutral-300 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;