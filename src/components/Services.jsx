import { servicesData } from '../data';
import { FaLaptopCode, FaMicrochip, FaServer, FaArrowRight } from 'react-icons/fa';

const iconMap = [FaLaptopCode, FaMicrochip, FaServer];

const Services = () => {
  return (
    <section className="py-24 bg-black text-white px-6 relative" id="services">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">
            Engineering & Consulting Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Services & Technical Solutions
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-light">
            End-to-end engineering services for startups, research labs, and enterprise systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div 
                key={index} 
                className="rounded-[32px] bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 border border-white/10 p-8 backdrop-blur-2xl hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 text-blue-400 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] font-medium bg-white/5 text-neutral-300 px-3 py-1 rounded-full border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-blue-400 transition-colors"
                  >
                    <span>Discuss Architecture</span>
                    <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
