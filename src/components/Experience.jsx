import { experienceData } from '../data';

const Experience = () => {
  return (
    <section className="py-20 bg-gray-950 text-white px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-500 w-fit mx-auto pb-2">
          Experience
        </h2>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative border-l-4 border-cyan-500 pl-8 ml-4">
              {/* Dot on the timeline */}
              <div className="absolute -left-[14px] top-0 h-6 w-6 rounded-full bg-cyan-500 border-4 border-gray-950"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="text-cyan-400 font-mono text-sm">{exp.duration}</span>
              </div>
              
              <h4 className="text-xl text-gray-400 mb-4">{exp.company}</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-900 text-cyan-200 px-2 py-1 rounded border border-gray-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;