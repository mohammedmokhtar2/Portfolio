const Intro = () => {
  return (
    <section className="py-16 bg-gray-900/60 text-white px-5 border-y border-gray-800/80" id="about">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
          Building at the intersection of AI and real-world systems
        </h2>

        <div className="space-y-4 text-gray-300 text-lg leading-relaxed font-light">
          <p>
            I am <strong className="text-white font-semibold">Mohammed Mokhtar</strong> (full name: <span className="text-gray-200 italic font-medium">Mohammed Mokhtar Soliman Salama</span>), an <strong className="text-cyan-300 font-medium">Intelligent Systems & AI Engineer</strong> specializing in RAG architectures, NLP models, and IoT integration.
          </p>
          <p>
            My approach to engineering is strongly project-driven. Rather than focusing only on individual technologies, I enjoy understanding a complete problem, designing the architecture, building the system, integrating its components, testing it, and turning the result into something that can be used in the real world.
          </p>
          <p>
            My long-term goal is to contribute to the development of intelligent and connected systems while continuing to grow as an engineer, researcher, entrepreneur, and technology leader.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
