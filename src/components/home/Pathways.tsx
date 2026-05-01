"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { motion } from "motion/react";

export const Pathways = () => {
  const { pathways } = siteContent.home;

  return (
    <section id="how-it-works" className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-widest text-black/50 mb-4"
          >
            {pathways.eyebrow}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black"
          >
            {pathways.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Path A */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-black text-white border-4 border-black flex items-center justify-center font-display font-black text-3xl italic shadow-[6px_6px_0px_0px_rgba(255,255,255,0.4)]">
                A
              </div>
              <div>
                <h3 className="text-3xl font-display uppercase italic font-black tracking-tight text-black">
                  {pathways.primary.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-black/40">
                  {pathways.primary.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-10 relative">
              {/* Vertical Line Container */}
              <div className="absolute left-[30px] top-8 bottom-8 w-1 bg-black/10">
                <motion.div 
                   className="w-full bg-black origin-top"
                   initial={{ scaleY: 0 }}
                   whileInView={{ scaleY: 1 }}
                   viewport={{ once: false, amount: 0.1 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              
              {pathways.primary.steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-24 group"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-black flex items-center justify-center font-display text-xl font-black text-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {step.id}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-display uppercase italic font-black tracking-tight text-black mb-3">
                      {step.title}
                    </h4>
                    <p className="text-black/60 font-bold text-sm leading-tight max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Path B */}
          <div className="relative overflow-hidden">
             <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-white text-black border-4 border-black flex items-center justify-center font-display font-black text-3xl italic shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                B
              </div>
              <div>
                <h3 className="text-3xl font-display uppercase italic font-black tracking-tight text-black">
                  {pathways.secondary.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] font-black text-black/40">
                  {pathways.secondary.subtitle}
                </p>
              </div>
            </div>

            <div className="space-y-10 relative">
              {/* Vertical Line Container */}
              <div className="absolute left-[30px] top-8 bottom-8 w-1 bg-black/10">
                <motion.div 
                   className="w-full bg-black origin-top"
                   initial={{ scaleY: 0 }}
                   whileInView={{ scaleY: 1 }}
                   viewport={{ once: false, amount: 0.1 }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              
              {pathways.secondary.steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-24 group"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 bg-black border-4 border-black flex items-center justify-center font-display text-xl font-black text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]">
                    {step.id}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-display uppercase italic font-black tracking-tight text-black mb-3">
                      {step.title}
                    </h4>
                    <p className="text-black/60 font-bold text-sm leading-tight max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
