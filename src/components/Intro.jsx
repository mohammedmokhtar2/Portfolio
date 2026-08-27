const Intro = () => {
  return (
    <section className="py-24 bg-black text-white px-6 relative" id="about">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Eyebrow Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
            About & Identity
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Building at the intersection of AI and real-world systems
          </h2>
        </div>

        {/* Bento Glass Card Container */}
        <div className="rounded-[36px] bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-white/15 p-8 md:p-12 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Ambient Glow Corner */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed font-light relative z-10">
            <p className="text-neutral-100 font-normal text-lg md:text-xl">
              I am <strong className="text-white font-bold">Mohammed Mokhtar</strong> (full legal name: <span className="text-neutral-300 italic font-medium">Mohammed Mokhtar Soliman Salama</span>), an <strong className="text-white font-bold underline decoration-blue-500/50 decoration-2 underline-offset-4">Intelligent Systems & AI Engineer</strong> specializing in NLP, RAG architectures, and IoT integration.
            </p>
            
            <p>
              My approach to engineering is strongly project-driven. Rather than focusing only on individual technologies, I enjoy understanding a complete problem, designing the system architecture, integrating its core components, testing under real-world constraints, and turning the result into a reliable production product.
            </p>
            
            <p>
              My long-term goal is to contribute to the development of intelligent, autonomous, and connected systems while continuing to grow as an engineer, researcher, technology builder, and leader.
            </p>

            {/* Quick Spec Highlights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-xs text-neutral-400 font-mono block mb-1">AFFILIATION</span>
                <span className="text-sm font-semibold text-white">Helwan National University</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-xs text-neutral-400 font-mono block mb-1">FOCUS DOMAINS</span>
                <span className="text-sm font-semibold text-white">RAG · Agentic AI · Embedded IoT</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-xs text-neutral-400 font-mono block mb-1">LOCATION</span>
                <span className="text-sm font-semibold text-white">Cairo, Egypt (Global Remote)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
