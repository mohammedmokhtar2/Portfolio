import { heroData } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-5 text-center pt-20">
      
      {/* --- PROFILE PICTURE --- */}
      <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
        {/* Make sure you put a file named 'profile.png' in public/images/ */}
        <Image 
          src="/images/profile.jpeg" 
          alt={heroData.name} 
          fill 
          className="object-cover"
        />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          {heroData.name}
        </span>
      </h1>

      <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
        {heroData.role}
      </h2>

      <p className="max-w-2xl text-gray-400 mb-8 leading-relaxed">
        {heroData.subheading}
      </p>

      {/* Social Buttons & CV */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        
        {/* Social Icons */}
        <div className="flex gap-6">
          <a href={heroData.socialLinks.github} target="_blank" className="text-3xl hover:text-cyan-400 transition-colors"><FaGithub /></a>
          <a href={heroData.socialLinks.linkedin} target="_blank" className="text-3xl hover:text-blue-500 transition-colors"><FaLinkedin /></a>
          <a href={heroData.socialLinks.email} className="text-3xl hover:text-red-400 transition-colors"><FaEnvelope /></a>
        </div>

        {/* --- DOWNLOAD CV BUTTON --- */}
        <a 
          href="/resume.pdf" 
          download="Mohammed_Mokhtar_Resume.pdf"
          className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-gray-950 transition-all font-bold"
        >
          <FaFileDownload /> Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;