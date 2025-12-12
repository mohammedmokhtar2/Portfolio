import { volunteeringData } from '../data';

const Volunteering = () => {
  return (
    <section className="py-20 bg-gray-900 text-white px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-500 w-fit mx-auto pb-2">
          Volunteering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteeringData.map((vol, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{vol.role}</h3>
              <h4 className="text-cyan-400 mb-3">{vol.organization}</h4>
              <p className="text-gray-400 text-sm">{vol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;