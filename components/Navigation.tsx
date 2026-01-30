import React from 'react';
import { SectionId } from '../types';

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const getLinkClasses = (section: SectionId) => {
    const isActive = activeSection === section;
    return `flex items-center gap-2 transition-all cursor-pointer ${
      isActive ? 'text-white opacity-100' : 'text-white/70 hover:text-white hover:opacity-100'
    }`;
  };

  const getDotClasses = (section: SectionId) => {
    const isActive = activeSection === section;
    return `w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-white/40'}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 blur-nav bg-primary shadow-header-depth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => onNavigate('hero')}
          >
            <div className="h-10 w-10 flex items-center justify-center">
              <svg className="w-10 h-10 fill-white" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 18.5C19 18.2239 19.2239 18 19.5 18H54.5C54.7761 18 55 18.2239 55 18.5V30.5C55 30.7761 54.7761 31 54.5 31H37L50.25 61.5L74.5 18.5C74.611 18.3188 74.8082 18 75.1 18H84.5C84.7761 18 85 18.2239 85 18.5V19.5L53 82.5C52.88 82.72 52.65 83 52.3 83H47.7C47.35 83 47.12 82.72 47 82.5L15.1 19.5V18.5C15.1 18.5 19 18.5 19 18.5Z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-white font-display">VIETMATE.COM</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-[11px] font-black tracking-widest uppercase">
            <div onClick={() => onNavigate('hero')} className={getLinkClasses('hero')}>
              <span className={getDotClasses('hero')}></span> Start
            </div>
            <div onClick={() => onNavigate('regions')} className={getLinkClasses('regions')}>
              <span className={getDotClasses('regions')}></span> Regions
            </div>
            <div onClick={() => onNavigate('about')} className={getLinkClasses('about')}>
              <span className={getDotClasses('about')}></span> Story
            </div>
            <div onClick={() => onNavigate('stories')} className={getLinkClasses('stories')}>
              <span className={getDotClasses('stories')}></span> Reviews
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-primary px-6 py-2.5 text-xs rounded-full font-black hover:scale-105 transition-all tracking-widest uppercase shadow-lg"
            >
              Plan Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;