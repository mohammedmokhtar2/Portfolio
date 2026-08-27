'use client';
import { useState, useEffect } from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300 pointer-events-none">
      <nav className={`pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between gap-4 md:gap-8 px-5 py-2.5 border ${
        scrolled 
          ? 'bg-black/75 backdrop-blur-2xl border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)] shadow-blue-900/10' 
          : 'bg-neutral-900/50 backdrop-blur-md border-white/10'
      }`}>
        {/* Brand Monogram */}
        <a 
          href="#hero" 
          aria-label="Mohammed Mokhtar Home"
          className="flex items-center gap-2 group font-medium text-white tracking-tight"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-200 to-white text-black flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-105 transition-transform duration-300">
            MM
          </span>
          <span className="hidden sm:inline-block text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
            Mohammed Mokhtar
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs md:text-sm font-medium text-neutral-400">
          <a href="#about" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all">About</a>
          <a href="#services" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all">Services</a>
          <a href="#projects" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all">Projects</a>
          <a href="#experience" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all">Experience</a>
          <a href="#research" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all">Research</a>
          <a href="#skills" className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/10 transition-all hidden md:inline-block">Skills</a>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <a 
            href="/resume.pdf" 
            download="Mohammed_Mokhtar_Resume.pdf"
            aria-label="Download CV"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] flex items-center gap-1.5"
          >
            <span>CV</span>
            <FaFileDownload className="text-[10px]" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
