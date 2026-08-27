import { heroData } from '../data';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaChevronRight } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center bg-black text-white px-6 text-center pt-32 pb-20 overflow-hidden" id="hero">
      
      {/* Background Ambient Radial Lights (Apple Keynote Style) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- PROFILE PICTURE --- */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 mb-8 rounded-[36px] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group">
        <Image 
          src="/images/profile.jpeg" 
          alt={`Portrait of ${heroData.name} (${heroData.fullName})`} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
          priority
        />
      </div>

      {/* Status Eyebrow Badge */}
      <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium text-neutral-200 tracking-wide">
          Available for Engineering Opportunities
        </span>
      </div>

      {/* Primary Headline */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-500">
        {heroData.name}
      </h1>

      {/* Sub-headline Role */}
      <h2 className="text-2xl sm:text-4xl text-neutral-300 mb-4 font-semibold tracking-tight max-w-3xl">
        {heroData.role}
      </h2>

      {/* Full Name Disambiguation */}
      <p className="text-xs text-neutral-400 mb-6 font-mono tracking-wider uppercase">
        Legal Name: <span className="text-neutral-200 font-normal normal-case">{heroData.fullName}</span>
      </p>

      {/* Bio / Subheading */}
      <p className="max-w-2xl text-neutral-300 mb-8 leading-relaxed text-base sm:text-lg font-light">
        {heroData.subheading}
      </p>

      {/* Core Domain Badges */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl">
        {heroData.domains?.map((domain, i) => (
          <span key={i} className="text-xs font-medium bg-neutral-900/80 text-neutral-200 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {domain}
          </span>
        ))}
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
        <a 
          href="#projects" 
          className="min-h-[48px] min-w-[180px] inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-semibold px-8 py-3.5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span>Explore Featured Work</span>
          <FaChevronRight className="text-xs" />
        </a>

        <a 
          href="/resume.pdf" 
          download="Mohammed_Mokhtar_Resume.pdf"
          aria-label="Download CV"
          className="min-h-[48px] min-w-[160px] inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/10 active:scale-95 transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <FaFileDownload className="text-sm" />
          <span>Download CV</span>
        </a>
      </div>

      {/* Social Glass Icons */}
      <div className="flex gap-3 items-center">
        <a 
          href={heroData.socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
          title="GitHub Profile" 
          className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-xl text-neutral-300 hover:text-white hover:bg-white/15 hover:border-white/25 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <FaGithub />
        </a>
        <a 
          href={heroData.socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile" 
          className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-xl text-neutral-300 hover:text-white hover:bg-white/15 hover:border-white/25 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <FaLinkedin />
        </a>
        <a 
          href={heroData.socialLinks.huggingface} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Hugging Face Profile"
          title="Hugging Face Profile" 
          className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-xl text-neutral-300 hover:text-white hover:bg-white/15 hover:border-white/25 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <SiHuggingface />
        </a>
        <a 
          href={heroData.socialLinks.email} 
          aria-label="Send Email"
          title="Send Email" 
          className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-xl text-neutral-300 hover:text-white hover:bg-white/15 hover:border-white/25 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Hero;