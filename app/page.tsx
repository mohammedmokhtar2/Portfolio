// // We use relative paths here to find your components in the src folder
// import Hero from '../src/components/Hero';
// import Projects from '../src/components/Projects';

// export default function Home() {
//   return (
//     <main className="bg-gray-950 min-h-screen text-white">
//       <Hero />
//       <Projects />
//     </main>
//   );
// }


import Hero from '../src/components/Hero';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Volunteering from '../src/components/Volunteering';
import Contact from '../src/components/Contact';

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-white">
      <Hero />
      <Skills /> 
      <Experience />
      <Projects />
      <Volunteering />
      <Contact />
      
      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm">
        © 2025 Mohammed Mokhtar. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
