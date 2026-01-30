import React, { useRef, useState, useEffect } from 'react';
import { SectionId, Testimonial } from '../types';

interface StoriesSectionProps {
  id: SectionId;
  onNavigate: (id: SectionId) => void;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Mark",
    location: "London, UK",
    initials: "SM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGmTs10ULqovZXpmAZbhrmiDWogL_ONeD9YpffgE7uppcBDwux3d59DinE21r7XDw4Lwf2M31ZSbzfH2J20XvM1iBRPXq0n-IkhMrEMUWWSVhdPhWCg4ActDUPLlcQxMkhtmPE6ThuO8eFe7NuysNNv6bnYwlkOzujWjAoPbazAGV8M0ITvkWDtcfsCGozoTwyRuG7UauHKHRrwqmExNDf0ZEySCe0i69TdIpJPPswHoC8cohsY3kk8f1Qwfksk5OTLy39wbrkTwIj",
    text: "The attention to detail was incredible. Our trip felt so personal, from the specific food recommendations to the hidden spots our guide took us to in Hanoi. Vietmate truly simplified everything for us."
  },
  {
    id: 2,
    name: "David Chen",
    location: "Singapore",
    initials: "DC",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPpYttrpnV5CEDv0GOLxAeRnL2Wgg9T38hAhO8eyubmEcj-eyaKB6oL0DAGeamlZ7v1b28NkoW0RyHnMuxVLHsQzFiLmSqEJc57_QbteZqXSNk4sJbCSfVtRkOk2H4wloV2A-8GeUoOA59nYX95ZD6Tjz0DE-eO14vjr6zq-PKwKe18yhEmxS5lFx6VUQQsKtGwsfq8NwXJBy87kiUa0u-TT3xar5VsbLwSM7WX2hMB7ZlotNc6zGHt2kt7YhQ5V0Jt3cgBdDimQOy",
    text: "Traveling as a solo photographer, I wanted access to places off the tourist map. Vietmate's local connections got me into remote villages in Sapa that felt completely authentic."
  },
  {
    id: 3,
    name: "Sophie & Thomas",
    location: "Paris, France",
    initials: "ST",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXajvFWMz2VPyJriyFwDmvGU4pZqrStoVkildhbWBFfFLq_9_Nnm20YeWhBDbo8D8Q_0WCx_iinmaRt6q5LkFreGodyJYGvEAoszvk3VMOjygNpUWU_Y_PzOXm0Oru4_kr9kDXD9OnwGs78YbTZn4ih5AEh3AjgLPwMv05W_w1Q5Xm_F6Q6MJ5lNwFuG4G1h6QvlNJPNmwhC8kYYTO5yc37lrfErK_d3ErwXU-hfZZ1hvuXMFw52JyCMo25QzlhUheEzt1Xv444lo1",
    text: "We've traveled all over Asia, but this was our most seamless experience yet. From luxury stays to street food tours, everything was perfectly balanced and incredibly memorable."
  },
  {
    id: 4,
    name: "Akiko Tanaka",
    location: "Tokyo, Japan",
    initials: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGnQbnCZC25dyNtChzmIPjOeDNT67abgT41_ce0v2DompaW_X76Fw8Vx2fKyI0DPZVpA7arOJ7vb4aKUXE0sfoMzf2W1XDsgmQ2y9BDAgrp1F9vOnksoQ8I19C9a5tdLR-hf6DjmLDNMxl7xqwg_N184VAVCX9q-Blh9KbYJ_XT2Y1DjLrCobr7aPPnjoPBJatlWrGZVw_Gr2NZ3nxCcu5kaiZ1_anSo3FI7S8XgiI_5mSnl57DZHfYtgjS44XUo0oVVeNYYpk634E",
    text: "The cultural depth Vietmate provided was astounding. I learned so much more about the history of Central Vietnam than I ever could have alone. A truly respectful and deep journey."
  },
  {
    id: 5,
    name: "Marcus G.",
    location: "Berlin, Germany",
    initials: "MG",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMy_33TZuahXGmx3GMnZWsQu936P2vu14b18wr1UPsZMC_xs71R0g-4IdeuY7GpJ4YolZ1XXi2PRG7T1dBR555cV2EbnsKFpcg-7sGFPowpJ7C3hwW1c8-Hm7AfF7UQ_eFcziGMRWDR4qXMwJ0ETgqjRoM7Mdn68AnxD-pDY3fdxOqZYUT_7l9_Z2fXPHFztq2flSBAh_XueORGszbrPyd9u0i4RuPumX0vU_sfGMZI7nrzure4_J_W939OYOsiLsv-k5D-_aZEqTo",
    text: "I came for the trekking but stayed for the people. Vietmate introduced me to local communities in a way that felt authentic and not like a tourist trap. Exceptional organization."
  },
  {
    id: 6,
    name: "The Miller Family",
    location: "Sydney, Australia",
    initials: "FM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY3gTb84L58krD5ZwtS0XCApAxDn85B4IEpMtGxnh4yGBp005t6uViY38aIBTVfzu_1mfbrXdy6x6mIfmd3Q4Psx8MCEchmDLtmWtsjMHLLmpSpKgF4kHtv7FDBbAsFtzH4Cya0FW-nQkuO5tfOvCc2cF6OxrfIrklK0Cg9v83X2Y3RqhYDdUwgY3JEYyEBkRRbDhU5Pu6yL4s2_QlqVNpeEtSvIkkRQuY44MCUujWXoI02YHMJEWpHZ0uKmRZi1tIU--NLh1iDP1X",
    text: "Planning a multi-generational family trip is stressful, but Miles and Tam made it look easy. They found activities our kids loved and accessible routes for the grandparents."
  }
];

const StoriesSection: React.FC<StoriesSectionProps> = ({ id, onNavigate }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (trackRef.current) {
      const scrollLeft = trackRef.current.scrollLeft;
      const width = trackRef.current.querySelector('.carousel-item')?.clientWidth || 0;
      // Add gap roughly 32px
      const totalWidth = width + 32;
      const index = Math.round(scrollLeft / totalWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (trackRef.current) {
      const width = trackRef.current.querySelector('.carousel-item')?.clientWidth || 0;
      const totalWidth = width + 32;
      trackRef.current.scrollTo({
        left: totalWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    scrollTo(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(testimonials.length - 1, activeIndex + 1);
    scrollTo(newIndex);
  };

  return (
    <section className="stage snap-start h-screen w-full relative flex flex-col justify-center overflow-hidden bg-background-light" id={id}>
      <img 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-5 vivid-img" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGmTs10ULqovZXpmAZbhrmiDWogL_ONeD9YpffgE7uppcBDwux3d59DinE21r7XDw4Lwf2M31ZSbzfH2J20XvM1iBRPXq0n-IkhMrEMUWWSVhdPhWCg4ActDUPLlcQxMkhtmPE6ThuO8eFe7NuysNNv6bnYwlkOzujWjAoPbazAGV8M0ITvkWDtcfsCGozoTwyRuG7UauHKHRrwqmExNDf0ZEySCe0i69TdIpJPPswHoC8cohsY3kk8f1Qwfksk5OTLy39wbrkTwIj"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background-light via-background-light/95 to-background-light"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full pt-16 pb-24">
        <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Traveler Voices</span>
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter text-charcoal">Travelers' Stories</h2>
        <p className="text-muted-gray mb-12 text-lg font-bold">Real feedback from people we've welcomed.</p>

        <div className="relative group max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute -left-6 lg:-left-24 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white shadow-vibrant border border-slate-100 flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            <span className="material-symbols-outlined font-black">chevron_left</span>
          </button>
          <button 
            onClick={handleNext}
            className="absolute -right-6 lg:-right-24 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white shadow-vibrant border border-slate-100 flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            <span className="material-symbols-outlined font-black">chevron_right</span>
          </button>

          {/* Carousel Track */}
          <div 
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto pb-12 pt-6 px-4 scrollbar-hide snap-x snap-mandatory"
          >
            {testimonials.map((t) => (
              <div key={t.id} className="carousel-item snap-center flex-shrink-0 w-full md:w-[800px] mx-auto">
                <div className="bg-white rounded-[40px] p-10 text-left shadow-premium border border-slate-100 flex flex-col md:flex-row gap-10 items-center h-full">
                  <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-vibrant">
                    <img alt={t.name} className="w-full h-full object-cover" src={t.image} />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex gap-1 text-primary mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="material-symbols-outlined star-filled">star</span>
                      ))}
                    </div>
                    <blockquote className="text-xl font-bold mb-6 italic text-charcoal leading-relaxed">
                      "{t.text}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-[10px]">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-[12px] font-black tracking-widest uppercase text-charcoal">{t.name}</div>
                        <div className="text-[10px] font-bold text-muted-gray uppercase tracking-widest">{t.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-3 h-3 rounded-full transition-all shadow-sm ${
                  activeIndex === idx ? 'bg-primary' : 'bg-slate-300 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-4">
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-primary text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
          >
            Ready to Plan? ➔
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;