import { skillsData } from '../data';

const Skills = () => {
  return (
    <section className="py-20 bg-gray-950 text-white px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-500 w-fit mx-auto pb-2">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group">
                    <div className="text-4xl text-gray-400 group-hover:text-white transition-colors">
                      {/* Check if icon exists before rendering to prevent errors */}
                      {skill.icon && <skill.icon />}
                    </div>
                    <span className="text-sm font-medium text-gray-500 group-hover:text-cyan-200 transition-colors">
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