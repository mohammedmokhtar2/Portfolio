import { heroData } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white px-5 text-center pt-24 pb-16" id="hero">
      
      {/* --- PROFILE PICTURE --- */}
      <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
        <Image 
          src="/images/profile.jpeg" 
          alt={`Portrait of ${heroData.name} (${heroData.fullName})`} 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          {heroData.name}
        </span>
      </h1>

      <h2 className="text-xl md:text-3xl text-cyan-300 mb-3 font-semibold tracking-wide max-w-2xl">
        {heroData.role}
      </h2>

      <p className="text-xs text-gray-400 mb-6 max-w-xl tracking-wider uppercase font-mono">
        Full Name: <span className="text-gray-300 font-medium normal-case">{heroData.fullName}</span>
      </p>

      <p className="max-w-2xl text-gray-300 mb-6 leading-relaxed text-lg font-light">
        {heroData.subheading}
      </p>

      {/* Core Domain Badges */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-xl">
        {heroData.domains?.map((domain, i) => (
          <span key={i} className="text-xs font-mono bg-cyan-950/60 text-cyan-300 px-3 py-1.5 rounded-full border border-cyan-800/60">
            {domain}
          </span>
        ))}
      </div>

      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-10">
        <a 
          href="#projects" 
          className="min-h-[48px] min-w-[160px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-gray-950 font-bold px-7 py-3 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span>Explore My Work</span>
        </a>

        <a 
          href="/resume.pdf" 
          download="Mohammed_Mokhtar_Resume.pdf"
          aria-label="Download Mohammed Mokhtar's CV"
          className="min-h-[48px] min-w-[160px] inline-flex items-center justify-center gap-2 border border-cyan-500/80 text-cyan-400 px-7 py-3 rounded-full hover:bg-cyan-500/10 active:scale-95 transition-all font-bold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <FaFileDownload className="text-base" aria-hidden="true" />
          <span>Download CV</span>
        </a>

        <a 
          href="#contact" 
          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors py-2 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
        >
          <span>Let&apos;s Connect</span>
          <FaArrowRight className="text-xs" aria-hidden="true" />
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 items-center">
        <a 
          href={heroData.socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Mohammed Mokhtar's GitHub Profile"
          title="GitHub Profile" 
          className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a 
          href={heroData.socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Mohammed Mokhtar's LinkedIn Profile"
          title="LinkedIn Profile" 
          className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-xl text-gray-300 hover:text-blue-400 hover:border-blue-500/50 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <FaLinkedin aria-hidden="true" />
        </a>
        <a 
          href={heroData.socialLinks.huggingface} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Mohammed Mokhtar's Hugging Face Profile"
          title="Hugging Face Profile" 
          className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-xl text-gray-300 hover:text-yellow-400 hover:border-yellow-500/50 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
          <SiHuggingface aria-hidden="true" />
        </a>
        <a 
          href={heroData.socialLinks.email} 
          aria-label="Send email to Mohammed Mokhtar"
          title="Send Email" 
          className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-gray-900 border border-gray-800 text-xl text-gray-300 hover:text-red-400 hover:border-red-500/50 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
        >
          <FaEnvelope aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Hero;