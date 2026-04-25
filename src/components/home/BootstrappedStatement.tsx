"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";

export const BootstrappedStatement = () => {
  const { bootstrapped } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block p-12 md:p-20 rounded-[3rem] bg-[#161618] border border-white/10 shadow-2xl">
          <p className="font-mono text-xs font-black uppercase tracking-[0.5em] text-neon-lime mb-8">
            {bootstrapped.eyebrow}
          </p>
          <h2 className="text-4xl md:text-8xl font-display uppercase font-black tracking-tighter text-white mb-10 leading-tight">
            {bootstrapped.title}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl font-bold text-muted leading-relaxed">
            {bootstrapped.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-white/5">
            <p className="text-2xl md:text-4xl font-display uppercase font-black tracking-widest text-neon-lime italic">
              {bootstrapped.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
