import { researchScholarshipData } from '../data';
import { FaGraduationCap, FaBookOpen } from 'react-icons/fa';

const Research = () => {
  return (
    <section className="py-24 bg-black text-white px-6 relative" id="research">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
            Academic Rigor & Research Focus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Research & Scholarship Credentials
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            Formally grounded engineering, system trade-offs, and academic research publications.
          </p>
        </div>

        {/* Research Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchScholarshipData.map((item, index) => (
            <div 
              key={index} 
              className="rounded-[32px] bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-white/10 p-8 backdrop-blur-2xl hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  {index === 0 ? <FaGraduationCap /> : <FaBookOpen />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.institution}
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                {item.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Research;
