import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export const ToolOfTheMonth = () => {
  const { featured } = siteContent.home;

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-black text-white border-2 border-black mb-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            <Star className="text-yellow-400 fill-yellow-400" size={16} />
            <span className="font-mono text-[10px] font-black uppercase tracking-widest">
              {featured.eyebrow}
            </span>
          </div>
          <h2 className="text-6xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black mb-6">
            {featured.title}
          </h2>
          <p className="font-mono text-xs font-black tracking-[0.4em] text-black/40 uppercase italic mb-10">
            {featured.meta}
          </p>
          <p className="text-2xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] leading-none mb-12 italic">
            {featured.subtitle}
          </p>
          
          <div className="grid grid-cols-2 gap-10 mb-12 border-t-4 border-black pt-10">
            {featured.stats.map((s, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-4xl font-display font-black text-black italic uppercase leading-none mb-2">{s.split(' ')[0]}</span>
                <span className="text-[10px] font-mono font-black tracking-widest text-black/40 uppercase">
                  {s.split(' ').slice(1).join(' ')}
                </span>
              </div>
            ))}
          </div>

          <a 
            href={featured.cta.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary py-5 px-10 group"
          >
            <span className="flex items-center gap-3">
              {featured.cta.label} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} strokeWidth={3} />
            </span>
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="sticker-card bg-black border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-video lg:aspect-square">
              <img
                src="/secretroom_app_preview_1777091929066.png"
                alt="Secretroom App Preview"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-yellow-400/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Float Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-float">
               <p className="font-mono text-xs font-black uppercase tracking-widest">VALIDATED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


