'use client';
import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/sections/Hero';
import Summary from '@/components/sections/Summary';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sections = ['hero', 'summary', 'contact'];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isMobile) return; // Skip custom scroll on mobile

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling) return;

      const delta = e.deltaY;
      let newSection = currentSection;

      if (delta > 0 && currentSection < sections.length - 1) {
        newSection = currentSection + 1;
      } else if (delta < 0 && currentSection > 0) {
        newSection = currentSection - 1;
      }

      if (newSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(newSection);
        
        const targetSection = document.getElementById(sections[newSection]);
        targetSection?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 600);
      }
    };

    // Add touch support for tablets
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].screenY;
      const deltaY = touchStartY - touchEndY;
      
      // Only handle significant swipes
      if (Math.abs(deltaY) > 50 && !isScrolling) {
        let newSection = currentSection;
        
        if (deltaY > 0 && currentSection < sections.length - 1) {
          newSection = currentSection + 1;
        } else if (deltaY < 0 && currentSection > 0) {
          newSection = currentSection - 1;
        }
        
        if (newSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(newSection);
          
          const targetSection = document.getElementById(sections[newSection]);
          targetSection?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });

          setTimeout(() => {
            setIsScrolling(false);
          }, 600);
        }
      }
    };

    let isThrottled = false;
    const throttledWheelHandler = (e) => {
      if (!isThrottled) {
        handleWheel(e);
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, 100);
      }
    };

    container.addEventListener('wheel', throttledWheelHandler, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', throttledWheelHandler);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, sections, isMobile]);

  // Mobile version with normal scrolling
  if (isMobile) {
    return (
      <main className="min-h-screen">
        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-7xl w-full mx-auto">
            <Hero />
          </div>
        </section>

        {/* Summary */}
        <section id="summary" className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-7xl w-full mx-auto">
            <Summary />
          </div>
        </section>

        {/* Contact + Footer Section */}
        <section id="contact" className="min-h-screen flex flex-col px-4">
          <div className="max-w-7xl w-full mx-auto flex-1 flex items-center">
            <Contact />
          </div>

          <div className="max-w-7xl w-full mx-auto pb-8">
            <footer className="text-center text-gray-600 border-t border-gray-200 pt-8">
              <p>&copy; 2025 IAN. All rights reserved.</p>
            </footer>
          </div>
        </section>
      </main>
    );
  }

  // Desktop version with custom scroll
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

      {/* Contact + Footer Section */}
      <section id="contact" className="min-h-screen flex flex-col px-4">
        <div className="max-w-7xl w-full mx-auto flex-1 flex items-center">
          <Contact />
        </div>

        <div className="max-w-7xl w-full mx-auto pb-8">
          <footer className="text-center text-gray-600 border-t border-gray-200 pt-8">
            <p>&copy; 2025 IAN. All rights reserved.</p>
          </footer>
        </div>
      </section>

      {/* Section indicators - only show on desktop */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`w-2 h-8 mb-2 rounded-full transition-colors duration-300 cursor-pointer ${
              currentSection === index 
                ? 'bg-orange-500' 
                : 'bg-gray-400'
            }`}
            onClick={() => {
              setCurrentSection(index);
              document.getElementById(sections[index])?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
          />
        ))}
      </div>
    </main>
  );
}