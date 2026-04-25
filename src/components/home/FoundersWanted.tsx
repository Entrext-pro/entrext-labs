import React from "react";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, Check } from "lucide-react";

export const FoundersWanted = () => {
  const { foundingSeats } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-electric-cyan mb-4">
            {foundingSeats.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter">
            {foundingSeats.title}
          </h2>
          <p className="mt-6 text-xl md:text-2xl font-bold text-muted">
            {foundingSeats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Path A: Primary */}
          <div className="lab-card p-10 flex flex-col h-full border-neon-lime/20 bg-neon-lime/[0.02]">
            <div className="flex-1">
              <h3 className="text-3xl font-display uppercase font-black tracking-tight text-white mb-6">
                {foundingSeats.primary.title}
              </h3>
              <p className="text-muted leading-relaxed mb-10">
                {foundingSeats.primary.desc}
              </p>
              
              <div className="space-y-4 mb-12">
                <p className="font-mono text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Apply as:</p>
                {foundingSeats.primary.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <Check size={16} className="text-neon-lime" />
                    <span className="font-bold">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href={foundingSeats.primary.cta.href} 
              className="btn-primary w-full bg-neon-lime shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              <span className="flex items-center gap-2">
                {foundingSeats.primary.cta.label} <ArrowRight size={20} />
              </span>
            </a>
          </div>

          {/* Path B: Secondary */}
          <div className="lab-card p-10 flex flex-col h-full border-electric-cyan/20 bg-electric-cyan/[0.02]">
            <div className="flex-1">
              <h3 className="text-3xl font-display uppercase font-black tracking-tight text-white mb-6">
                {foundingSeats.secondary.title}
              </h3>
              <p className="text-muted leading-relaxed mb-10">
                {foundingSeats.secondary.desc}
              </p>
              
              <div className="space-y-4 mb-12">
                <p className="font-mono text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">Apply as:</p>
                {foundingSeats.secondary.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <Check size={16} className="text-electric-cyan" />
                    <span className="font-bold">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href={foundingSeats.secondary.cta.href} 
              className="btn-primary w-full bg-electric-cyan shadow-[0_0_20px_rgba(0,245,255,0.2)]"
            >
              <span className="flex items-center gap-2">
                {foundingSeats.secondary.cta.label} <ArrowRight size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


