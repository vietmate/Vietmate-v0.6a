import React from 'react';
import { SectionId } from '../types';

interface ContactSectionProps {
  id: SectionId;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <section className="stage snap-start h-screen w-full relative flex flex-col justify-center overflow-hidden bg-slate-50 texture-overlay" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-16">
        <div className="bg-white flex flex-col md:flex-row shadow-premium rounded-[40px] overflow-hidden border-8 border-white min-h-[600px]">
          {/* Left Panel */}
          <div className="md:w-5/12 p-8 md:p-14 bg-primary text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block text-white/70">Start Your Adventure</span>
              <h2 className="font-display text-4xl lg:text-6xl font-black mb-10 uppercase tracking-tighter leading-none">PLAN YOUR JOURNEY</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">verified_user</span>
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest text-white">Direct Local Access</p>
                    <p className="text-white/70 text-[11px] font-bold mt-1">Chat directly with experts based in Hanoi and Saigon.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">speed</span>
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest text-white">24h Response Rate</p>
                    <p className="text-white/70 text-[11px] font-bold mt-1">Get a personalized itinerary draft within one business day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">edit_calendar</span>
                  </div>
                  <div>
                    <p className="font-black text-xs uppercase tracking-widest text-white">100% Tailored</p>
                    <p className="text-white/70 text-[11px] font-bold mt-1">Designed around your pace, budget, and unique interests.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="md:w-7/12 p-8 md:p-12 bg-white flex flex-col justify-center">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-2 px-1">Full Name</label>
                  <input className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-primary rounded-xl p-3.5 text-sm font-semibold placeholder:text-slate-300" placeholder="e.g. Liam Nguyen" type="text" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-2 px-1">Email</label>
                  <input className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-primary rounded-xl p-3.5 text-sm font-semibold placeholder:text-slate-300" placeholder="hello@travel.com" type="email" />
                </div>
                <div className="grid grid-cols-2 gap-2 col-span-2">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-2 px-1">Travelers</label>
                    <input className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-primary rounded-xl p-3.5 text-sm font-semibold placeholder:text-slate-300" placeholder="2" type="number" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-2 px-1">Days</label>
                    <input className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-primary rounded-xl p-3.5 text-sm font-semibold placeholder:text-slate-300" placeholder="12" type="number" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-3 px-1">Select Regions</label>
                <div className="flex flex-wrap gap-2">
                  <label className="cursor-pointer group">
                    <input className="hidden styled-toggle" name="region" type="checkbox" value="north" />
                    <div className="toggle-card flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-100 bg-white transition-all">
                      <span className="material-symbols-outlined text-lg toggle-icon text-muted-gray/40">landscape</span>
                      <span className="text-[10px] font-black uppercase tracking-widest toggle-text">North</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input className="hidden styled-toggle" name="region" type="checkbox" value="central" />
                    <div className="toggle-card flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-100 bg-white transition-all">
                      <span className="material-symbols-outlined text-lg toggle-icon text-muted-gray/40">temple_buddhist</span>
                      <span className="text-[10px] font-black uppercase tracking-widest toggle-text">Central</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input className="hidden styled-toggle" name="region" type="checkbox" value="south" />
                    <div className="toggle-card flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-slate-100 bg-white transition-all">
                      <span className="material-symbols-outlined text-lg toggle-icon text-muted-gray/40">waves</span>
                      <span className="text-[10px] font-black uppercase tracking-widest toggle-text">South</span>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-gray/60 mb-2 px-1">Your Vision</label>
                <textarea className="w-full bg-slate-50 border-0 focus:ring-2 focus:ring-primary rounded-xl p-4 text-sm font-semibold placeholder:text-slate-300 min-h-[80px]" placeholder="Share your dream travel style..."></textarea>
              </div>
              <div className="pt-2">
                <button className="w-full py-5 bg-primary text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] transition-all shadow-xl shadow-red-600/30">SEND TRIP REQUEST</button>
              </div>
            </form>
          </div>
        </div>
        <footer className="mt-8 text-center pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] font-black text-charcoal/30 gap-4">
            <p>© 2026 VIETMATE. ALL RIGHTS RESERVED. ✨</p>
            <div className="flex gap-8">
              <a className="hover:text-charcoal transition-colors" href="#">PRIVACY</a>
              <a className="hover:text-charcoal transition-colors" href="#">TERMS</a>
              <a className="hover:text-charcoal transition-colors" href="#">INSTAGRAM</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
