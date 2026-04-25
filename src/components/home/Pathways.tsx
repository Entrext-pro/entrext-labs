"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { motion } from "motion/react";

export const Pathways = () => {
  const { pathways } = siteContent.home;

  return (
    <section id="how-it-works" className="py-24 md:py-36 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-electric-cyan mb-4">
            {pathways.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter text-white">
            {pathways.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Path A */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full border-2 border-neon-lime flex items-center justify-center font-mono font-black text-neon-lime">
                A
              </div>
              <div>
                <h3 className="text-2xl font-display uppercase font-black tracking-tight text-white">
                  {pathways.primary.title}
                </h3>
                <p className="text-neon-lime font-mono text-[10px] uppercase tracking-widest font-black">
                  {pathways.primary.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-white/10" />
              
              {pathways.primary.steps.map((step, idx) => (
                <div key={idx} className="relative pl-16 group">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-obsidian border border-white/10 flex items-center justify-center font-mono text-xs font-black text-white/40 group-hover:border-neon-lime group-hover:text-neon-lime transition-all duration-300">
                    {step.id}
                  </div>
                  <h4 className="text-xl font-display uppercase font-black tracking-tight text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Path B */}
          <div className="relative">
             <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-full border-2 border-electric-cyan flex items-center justify-center font-mono font-black text-electric-cyan">
                B
              </div>
              <div>
                <h3 className="text-2xl font-display uppercase font-black tracking-tight text-white">
                  {pathways.secondary.title}
                </h3>
                <p className="text-electric-cyan font-mono text-[10px] uppercase tracking-widest font-black">
                  {pathways.secondary.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-white/10" />
              
              {pathways.secondary.steps.map((step, idx) => (
                <div key={idx} className="relative pl-16 group">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-obsidian border border-white/10 flex items-center justify-center font-mono text-xs font-black text-white/40 group-hover:border-electric-cyan group-hover:text-electric-cyan transition-all duration-300">
                    {step.id}
                  </div>
                  <h4 className="text-xl font-display uppercase font-black tracking-tight text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted text-sm leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
