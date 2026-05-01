import React from "react";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";

export const FoundersWanted = () => {
  const { foundingSeats } = siteContent.home;

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-widest text-black/50 mb-4"
          >
            {foundingSeats.eyebrow}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black"
          >
            {foundingSeats.title}
          </motion.h2>
          <p className="mt-10 text-2xl md:text-4xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-4xl italic">
            {foundingSeats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Path A: Primary */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="sticker-card p-12 flex flex-col h-full border-8 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-300 group"
          >
            <div className="flex-1">
              <h3 className="text-4xl md:text-5xl font-display uppercase italic font-black tracking-tight text-black group-hover:text-white transition-colors mb-8 underline decoration-yellow-400 decoration-8 underline-offset-8">
                {foundingSeats.primary.title}
              </h3>
              <p className="text-xl font-bold leading-tight text-black/70 group-hover:text-white/70 transition-colors mb-12">
                {foundingSeats.primary.desc}
              </p>
              
              <div className="space-y-6 mb-16">
                <p className="font-mono text-xs font-black tracking-[0.4em] text-black/30 group-hover:text-white/30 transition-colors uppercase italic">Join as:</p>
                {foundingSeats.primary.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-4 text-black group/item">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      <Check size={20} strokeWidth={4} />
                    </div>
                    <span className="text-lg font-black uppercase italic tracking-tight group-hover:text-white transition-colors">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href={foundingSeats.primary.cta.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-6 text-xl bg-black text-white border-4 border-black transition-all group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400"
            >
              <span className="flex items-center justify-center gap-3">
                {foundingSeats.primary.cta.label} <ArrowRight size={24} strokeWidth={3} />
              </span>
            </a>
          </motion.div>

          {/* Path B: Secondary */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="sticker-card p-12 flex flex-col h-full border-8 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-300 group"
          >
            <div className="flex-1">
              <h3 className="text-4xl md:text-5xl font-display uppercase italic font-black tracking-tight text-black group-hover:text-white transition-colors mb-8 underline decoration-white decoration-8 underline-offset-8">
                {foundingSeats.secondary.title}
              </h3>
              <p className="text-xl font-bold leading-tight text-black/70 group-hover:text-white/70 transition-colors mb-12">
                {foundingSeats.secondary.desc}
              </p>
              
              <div className="space-y-6 mb-16">
                <p className="font-mono text-xs font-black tracking-[0.4em] text-black/30 group-hover:text-white/30 transition-colors uppercase italic">Join as:</p>
                {foundingSeats.secondary.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-4 text-black">
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center border-2 border-black group-hover:bg-yellow-400 transition-colors">
                      <Check size={20} strokeWidth={4} />
                    </div>
                    <span className="text-lg font-black uppercase italic tracking-tight group-hover:text-white transition-colors">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href={foundingSeats.secondary.cta.href} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-6 text-xl bg-black text-white border-4 border-black transition-all group-hover:bg-yellow-400 group-hover:text-black group-hover:border-yellow-400"
            >
              <span className="flex items-center justify-center gap-3">
                {foundingSeats.secondary.cta.label} <ArrowRight size={24} strokeWidth={3} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


