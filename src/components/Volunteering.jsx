import { volunteeringData } from '../data';

const Volunteering = () => {
  return (
    <section className="py-24 bg-black text-white px-6 relative" id="leadership">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
            Community & Mentorship
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Volunteering & Leadership
          </h2>
        </div>

        {/* Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {volunteeringData.map((vol, index) => (
            <div 
              key={index} 
              className="rounded-[28px] bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-white/10 p-7 backdrop-blur-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {vol.role}
                </h3>
                <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4 font-mono">
                  {vol.organization}
                </h4>
                {vol.description && (
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">
                    {vol.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Volunteering;