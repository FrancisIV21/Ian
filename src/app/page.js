'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/sections/Hero';
import Summary from '@/components/sections/Summary';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = ['hero', 'summary', 'contact'];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;

      const delta = e.deltaY;
      let newSection = currentSection;

      if (delta > 0 && currentSection < sections.length - 1) {
        // Scroll down
        newSection = currentSection + 1;
      } else if (delta < 0 && currentSection > 0) {
        // Scroll up
        newSection = currentSection - 1;
      }

      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);
        
        // Fast smooth scroll to section
        const targetSection = document.getElementById(sections[newSection]);
        targetSection?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });

        // Short timeout for fast responsiveness
        setTimeout(() => {
          setIsScrolling(false);
        }, 600); // Reduced from 1000ms
      }
    };

    // Add throttling for better performance
    let isThrottled = false;
    const throttledWheelHandler = (e) => {
      if (!isThrottled) {
        handleWheel(e);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 100); // Very short throttle
      }
    };

    container.addEventListener('wheel', throttledWheelHandler, { passive: false });

    return () => {
      container.removeEventListener('wheel', throttledWheelHandler);
    };
  }, [currentSection, isScrolling, sections]);

  return (
    <main ref={containerRef} className="h-screen overflow-hidden">
      {/* Hero */}
      <section id="hero" className="h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl w-full mx-auto">
          <Hero />
        </div>
      </section>

      {/* Summary */}
      <section id="summary" className="h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl w-full mx-auto">
          <Summary />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="h-screen flex flex-col justify-center px-4">
        <div className="max-w-7xl w-full mx-auto flex-1 flex items-center">
          <Contact />
        </div>
        {/* Footer integrated into contact section */}
        <div className="max-w-7xl w-full mx-auto pb-8">
          <footer className="text-center text-gray-600 border-t border-gray-200 pt-8 mt-8">
            <p>&copy; 2024 IAN. All rights reserved.</p>
          </footer>
        </div>
      </section>

      {/* Optional: Section indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`w-2 h-8 mb-2 rounded-full transition-colors duration-300 ${
              currentSection === index 
                ? 'bg-orange-500' 
                : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </main>
  );
}