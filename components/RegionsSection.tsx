import React from 'react';
import { SectionId } from '../types';

interface RegionsSectionProps {
  id: SectionId;
  onNavigate: (id: SectionId) => void;
}

const RegionsSection: React.FC<RegionsSectionProps> = ({ id, onNavigate }) => {
  return (
    <section className="stage snap-start h-screen w-full relative flex flex-col justify-center overflow-hidden bg-white texture-overlay" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center h-full py-24">
        <div className="text-center mb-16">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Stage 2: Exploration</span>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter text-charcoal leading-tight">Journey Through Vietnam</h2>
          <p className="text-muted-gray text-sm font-bold mt-2 max-w-2xl mx-auto opacity-70">Explore our regions to find your perfect rhythm.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
          {/* Card 1 */}
          <div 
            onClick={() => onNavigate('contact')}
            className="cursor-pointer group relative block overflow-hidden rounded-[2.5rem] bg-charcoal aspect-[4/5] lg:aspect-[3/4] shadow-subtle-card border border-gray-100 hover:shadow-vibrant transition-all duration-700 mx-2"
          >
            <img 
              alt="Hanoi City Scene" 
              className="absolute inset-0 h-full w-full object-cover vivid-img transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeNFIoS-_pts3qQvujVoymeXfDT6sABz973C8WIuQF7-QLu2ZVO51SrXtFcrz899aeQ9fmdnSqjPIk-qeCwnRRJywYw-_E0EYRE38yhxpvF0oC1dow0dXJBLWZMkUVHefJuaXvEPvBU41Bt8exfEiSHJZUdQfBbhGeWLe5ufo7Km7EiXofr3gifRc5CVZgA1Drb9tNwNRRpKkt8-hAQdp1WoqWAglxlJaekCapkNoeqTi6BeL6e0tRCdwJnd6st_Ve1Um48igjRwh6"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter mb-2">Northern</h3>
              <p className="text-white/80 text-[11px] font-black uppercase tracking-[0.2em]">Hanoi • Ha Long • Sapa</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 region-card-description transition-all duration-500 p-8">
              <h3 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-4">Northern</h3>
              <p className="text-white text-base font-bold leading-relaxed mb-8 max-w-[260px]">Experience Hanoi's ancient soul and the emerald peaks of Sapa.</p>
              <span className="inline-block py-3 px-8 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">View Itineraries</span>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            onClick={() => onNavigate('contact')}
            className="cursor-pointer group relative block overflow-hidden rounded-[2.5rem] bg-charcoal aspect-[4/5] lg:aspect-[3/4] shadow-subtle-card border border-gray-100 hover:shadow-vibrant transition-all duration-700 mx-2"
          >
            <img 
              alt="Central Vietnam" 
              className="absolute inset-0 h-full w-full object-cover vivid-img transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLDfYeq2SI2quEtpkVzza8me8NVsnijBAJDz_LkxRbt0W0HfTl2EtZ72mZK_26A8kLqvRx-8dQ6pG9sQYxl7SvKyfrVd9Cx9vXApvsp6xmRvd1e_h0nyzr8JVIPQjJ7mPMzawuGz9M9j59Wevph4vgFY7fXxGFtUVS-AU_geTYILfdVTD_UgFxuS_WJ6CXHhc0XJvt7NxZ-_9plEphETQWbtFIGF-Krsu6mfOmDtHkZhun5kHEKtkFATLnkHUyS_VEIiBC2uUGa6lz"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter mb-2">Central</h3>
              <p className="text-white/80 text-[11px] font-black uppercase tracking-[0.2em]">Da Nang • Hoi An • Hue</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 region-card-description transition-all duration-500 p-8">
              <h3 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-4">Central</h3>
              <p className="text-white text-base font-bold leading-relaxed mb-8 max-w-[260px]">Wander through golden lantern streets and explore imperial legacies.</p>
              <span className="inline-block py-3 px-8 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">View Itineraries</span>
            </div>
          </div>

          {/* Card 3 */}
          <div 
             onClick={() => onNavigate('contact')}
             className="cursor-pointer group relative block overflow-hidden rounded-[2.5rem] bg-charcoal aspect-[4/5] lg:aspect-[3/4] shadow-subtle-card border border-gray-100 hover:shadow-vibrant transition-all duration-700 mx-2"
          >
            <img 
              alt="Southern Vietnam" 
              className="absolute inset-0 h-full w-full object-cover vivid-img transition-transform duration-1000 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAg-XK2P_1r6LJLqGmLMzSowVrBwSa7oiDzd2JDnFF98mv5ha9F4a2TRP3RbBvEeldRWeBvdw40nRP1Xmo0qctaylR36mcbDx_WHnQ_yNhmAYZbazgU5xli_pndA1sJs7MeaqatrBBKZZq6_FeqFdHdBS3YiZqiurxcc3rfWRQWMWG3EZ37Qsb-1ZxmIKLA3sXc96bUA0OMihpGO-EdrkMTPVhPKFw6lXDOMoHVsDSs0LpIxFqqHDqQpyCL1CQD72LiczBVZDsJfQs"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter mb-2">Southern</h3>
              <p className="text-white/80 text-[11px] font-black uppercase tracking-[0.2em]">Saigon • Mekong • Phu Quoc</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 region-card-description transition-all duration-500 p-8">
              <h3 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-4">Southern</h3>
              <p className="text-white text-base font-bold leading-relaxed mb-8 max-w-[260px]">Saigon's energy, Mekong Delta's rhythm, and pristine islands.</p>
              <span className="inline-block py-3 px-8 bg-primary text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">View Itineraries</span>
            </div>
          </div>
        </div>

        <div className="relative bg-slate-50/80 rounded-3xl p-10 lg:p-14 text-center shadow-premium border border-slate-200/50">
          <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-left">
              <h2 className="font-display text-xl lg:text-3xl font-black text-charcoal mb-2 uppercase tracking-tight">Looking for something bespoke?</h2>
              <p className="text-muted-gray text-sm font-bold opacity-80">Let our local experts craft a completely unique itinerary for your group.</p>
            </div>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-primary text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.25em] hover:scale-105 transition-all shadow-xl shadow-red-600/30 whitespace-nowrap"
            >
              DESIGN MY CUSTOM TRIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionsSection;