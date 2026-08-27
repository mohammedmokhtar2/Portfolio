import { impactMetricsData } from '../data';
import { FaChartLine } from 'react-icons/fa';

const ImpactMetrics = () => {
  return (
    <section className="py-16 bg-black text-white px-6 relative border-y border-white/10" id="metrics">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetricsData.map((item, index) => (
            <div 
              key={index} 
              className="rounded-[28px] bg-gradient-to-b from-neutral-900/60 to-neutral-950/80 border border-white/10 p-6 backdrop-blur-xl hover:border-blue-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white tracking-tight group-hover:scale-105 transition-transform">
                    {item.metric}
                  </span>
                  <FaChartLine className="text-blue-500/60 text-lg group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
