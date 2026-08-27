import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Intro from '../src/components/Intro';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Skills from '../src/components/Skills';
import Volunteering from '../src/components/Volunteering';
import Contact from '../src/components/Contact';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <Intro />
      <Projects />
      <Experience />
      <Skills />
      <Volunteering />
      <Contact />
      
      {/* Apple Style Footer */}
      <footer className="text-center py-10 text-neutral-500 text-xs border-t border-white/10 bg-black">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Mohammed Mokhtar Soliman Salama. All rights reserved.</p>
          <p className="text-neutral-400">Designed with Apple Pro Aesthetics · Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
