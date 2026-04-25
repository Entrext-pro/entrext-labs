import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export const ToolOfTheMonth = () => {
  const { featured } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="text-electric-cyan fill-electric-cyan" size={14} />
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-electric-cyan">
              {featured.eyebrow}
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-display uppercase font-black tracking-tighter text-white">
            {featured.title}
          </h2>
          <p className="mt-4 font-mono text-xs font-black tracking-[0.3em] text-white/40 uppercase italic">
            {featured.meta}
          </p>
          <p className="mt-8 text-xl font-bold text-muted leading-relaxed max-w-xl">
            {featured.subtitle}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-6">
            {featured.stats.map((s, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-black text-white">{s.split(' ')[0]}</span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase">
                  {s.split(' ').slice(1).join(' ')}
                </span>
              </div>
            ))}
          </div>

          <a 
            href={featured.cta.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary mt-12 group"
          >
            <span className="flex items-center gap-3">
              {featured.cta.label} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </span>
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative group">
             {/* Glow behind image */}
            <div className="absolute inset-0 bg-electric-cyan/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video lg:aspect-square bg-[#161618]">
              <img
                src="/secretroom_app_preview_1777091929066.png"
                alt="Secretroom App Preview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


