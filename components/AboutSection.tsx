import React from 'react';
import { SectionId } from '../types';

interface AboutSectionProps {
  id: SectionId;
  onNavigate: (id: SectionId) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, onNavigate }) => {
  return (
    <section className="stage snap-start h-screen w-full relative flex flex-col justify-center overflow-hidden section-gradient-accent texture-overlay" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Stage 3: Who We Are</span>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-8 leading-[1.1] uppercase tracking-tighter text-charcoal">
              Local Roots,<br />
              <span className="text-primary">Global Perspective</span>
            </h2>
            <div className="space-y-6 text-muted-gray leading-relaxed text-base font-bold">
              <p>Miles is an Australian-born Vietnamese and Tam being the other is a true Hanoian. Together, we bring over 12 years of experience designing travel in Vietnam. English-speaking and locally based, we create journeys we would confidently recommend to friends and family.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                <p className="font-black text-[9px] tracking-[0.3em] text-primary uppercase mb-1">Location 📍</p>
                <p className="font-black text-sm uppercase tracking-tight text-charcoal">BASED IN VIETNAM</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-slate-100">
                <p className="font-black text-[9px] tracking-[0.3em] text-primary uppercase mb-1">Philosophy ❤️</p>
                <p className="font-black text-sm uppercase tracking-tight text-charcoal">Thoughtful Local Travel</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="overflow-hidden rounded-3xl bg-transparent shadow-none">
              <img 
                alt="Founders" 
                className="w-full h-auto object-contain vivid-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDji86QRu_zM2_Grmi3gP8QemwLP1qI6BbUJSVprjwKUF1XwcYdUZ9eks-hfj0gPRW68Mfvbn8nfHjkJaG0o_gxeEpQ8KXWY8QRiCprOGw3zS2ibQP59jxeozumdW-X5B58Xj-TvmY1mR5PSUZJ1hYDnKj07byQvxQuu3qz-IS6IPPkIvUImdB6IZkK9ssi-xCCtpjFfnQ19J28Hmj_qDfh-oYWvlTTSREJ-aF66Hp8OKy0apz4WbIXBjjkTe_cGPUIOtp_5y-f56_K"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 bg-primary text-white p-8 max-w-[300px] rounded-3xl shadow-2xl rotate-2">
              <p className="text-sm mb-3 font-bold italic leading-relaxed">"Trust is the bridge between cultures, and local knowledge is the compass."</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">— Miles & Tam 🇻🇳</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center md:justify-start gap-4">
          <button 
            onClick={() => onNavigate('stories')}
            className="bg-charcoal text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-black transition-colors"
          >
            See Stories ➔
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;