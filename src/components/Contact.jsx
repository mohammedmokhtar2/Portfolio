import { heroData } from '../data';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

const Contact = () => {
  return (
    <section className="py-28 bg-black text-white px-6 relative" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Apple Glass Connect Box */}
        <div className="rounded-[40px] bg-gradient-to-b from-neutral-900/80 via-neutral-900/40 to-neutral-950/90 border border-white/15 p-10 md:p-16 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3 block">
            Direct Communication
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Let&apos;s Build Together
          </h2>

          <p className="text-neutral-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed mb-10">
            Open to scholarship research collaborations, AI software engineering roles, and high-impact technology projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a 
              href={heroData.socialLinks.email} 
              className="min-h-[52px] min-w-[200px] inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 font-semibold px-9 py-4 rounded-full text-base shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FaEnvelope className="text-base" />
              <span>Send Message</span>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center gap-4 text-xs font-medium text-neutral-400">
            <a 
              href={heroData.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all inline-flex items-center gap-2"
            >
              <FaGithub className="text-sm" />
              <span>GitHub</span>
            </a>
            <a 
              href={heroData.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all inline-flex items-center gap-2"
            >
              <FaLinkedin className="text-sm" />
              <span>LinkedIn</span>
            </a>
            <a 
              href={heroData.socialLinks.huggingface} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all inline-flex items-center gap-2"
            >
              <SiHuggingface className="text-sm" />
              <span>Hugging Face</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;