
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import CreativeStrategist from './components/CreativeStrategist';
import Footer from './components/Footer';

function App() {
  // Smooth scroll logic or basic global side effects
  useEffect(() => {
    // Ensuring smooth transitions for potential internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        
        {/* Intro text inspired by Collins editorial style */}
        <section className="bg-white py-32 px-8 md:px-24">
          <div className="max-w-4xl">
            <h3 className="text-3xl md:text-5xl font-serif italic text-gray-400 mb-8 leading-tight">
              "We believe that every brand is a story waiting to be played."
            </h3>
            <p className="text-xl md:text-3xl font-light leading-relaxed">
              In a world of static noise, we use 3D character design and interactive narratives to create emotional resonance. We don't just build brands; we build companions. Our partnership with Molang explores the intersection of purity, joy, and strategic design.
            </p>
          </div>
        </section>

        <Showcase />
        
        <CreativeStrategist />

        <section className="bg-white py-48 px-8 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-[0.5em] font-bold mb-8">The Philosophy</p>
            <h2 className="text-5xl md:text-8xl font-serif max-w-5xl leading-tight">
                Simplicity is the <span className="italic">ultimate</span> sophistication.
            </h2>
            <div className="mt-16 w-px h-32 bg-gray-200"></div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
