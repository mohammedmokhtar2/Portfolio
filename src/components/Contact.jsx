import { heroData } from '../data';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-950 text-white px-5 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Let&apos;s Connect</h2>
        <p className="text-gray-400 mb-8 text-lg">
          I&apos;m currently looking for new opportunities in AI & Machine Learning.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <a 
          href={heroData.socialLinks.email} 
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all hover:scale-105"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;