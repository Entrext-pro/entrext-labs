"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";

export const BootstrappedStatement = () => {
  const { bootstrapped } = siteContent.home;

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block p-12 md:p-32 bg-white border-8 border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-500">
          <p className="font-mono text-xs font-black uppercase tracking-[0.5em] text-black/30 mb-12 italic">
            {bootstrapped.eyebrow}
          </p>
          <h2 className="text-5xl md:text-[8rem] font-display uppercase italic font-black tracking-tighter text-black mb-16 leading-[0.85]">
            {bootstrapped.title}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-10 text-2xl md:text-4xl font-black text-black/80 leading-none italic">
            {bootstrapped.paragraphs.map((p, i) => (
              <p key={i} className="drop-shadow-[2px_2px_0px_rgba(250,204,21,1)]">{p}</p>
            ))}
          </div>

          <div className="mt-20 pt-20 border-t-8 border-black">
            <p className="text-3xl md:text-6xl font-display uppercase font-black tracking-widest text-black italic leading-none">
              {bootstrapped.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
