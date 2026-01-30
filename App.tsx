import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import SideControls from './components/SideControls';
import HeroSection from './components/HeroSection';
import RegionsSection from './components/RegionsSection';
import AboutSection from './components/AboutSection';
import StoriesSection from './components/StoriesSection';
import ContactSection from './components/ContactSection';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        root: containerRef.current, // Observe within the scroll container
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll('.stage');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-full">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <SideControls activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* Scroll Snap Container */}
      <main 
        ref={containerRef} 
        className="stage-container snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        <HeroSection id="hero" onNavigate={handleNavigate} />
        <RegionsSection id="regions" onNavigate={handleNavigate} />
        <AboutSection id="about" onNavigate={handleNavigate} />
        <StoriesSection id="stories" onNavigate={handleNavigate} />
        <ContactSection id="contact" />
      </main>
    </div>
  );
};

export default App;