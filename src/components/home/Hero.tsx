"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, Sparkles } from "lucide-react";
import { Zap as ZapIcon, Beaker as BeakerIcon, Rocket as RocketIcon } from "lucide-react";

export const Hero = () => {
  const { hero } = siteContent.home;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yIcon1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yIcon2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-yellow-400">
      {/* Premium Background Effects */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />
      <motion.div style={{ y: yBg }} className="absolute inset-0 bg-beams pointer-events-none" />
      
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          >
            <Sparkles size={14} className="text-yellow-400 animate-pulse" />
            {hero.eyebrow}
          </motion.div>

          <div className="mb-12 relative">
            <motion.h1
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-[10rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black"
            >
              {hero.headline[0]}<br />
              <span className="text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">{hero.headline[1]}</span>
            </motion.h1>
            
            {/* Floating Elements (Aceternity-style) */}
            <motion.div 
              style={{ y: yIcon1 }}
              animate={{ x: [0, 10, 0], rotate: [0, 10, 0] }}
              transition={{ x: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -top-16 -right-12 hidden lg:block"
            >
              <div className="bg-white border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <ZapIcon size={40} className="text-yellow-400" fill="currentColor" />
              </div>
            </motion.div>
 
            <motion.div 
              style={{ y: yIcon2 }}
              animate={{ x: [0, -10, 0], rotate: [0, -10, 0] }}
              transition={{ x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
              className="absolute bottom-0 -left-16 hidden lg:block"
            >
              <div className="bg-black border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
                <RocketIcon size={40} className="text-yellow-400" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8 mb-16"
          >
            <p className="text-2xl md:text-4xl font-black uppercase tracking-tight text-black max-w-4xl mx-auto leading-none italic">
              {hero.subheadline}
            </p>
            <p className="text-base md:text-xl font-bold text-black/60 max-w-3xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24"
          >
            <a href={hero.ctas[0].href} className="btn-primary group text-lg py-5 px-10">
              <span className="flex items-center gap-3">
                {hero.ctas[0].label} <BeakerIcon className="group-hover:rotate-12 transition-transform" size={24} />
              </span>
            </a>
            <a href={hero.ctas[1].href} className="btn-secondary group text-lg py-5 px-10">
              <span className="flex items-center gap-3">
                {hero.ctas[1].label} <RocketIcon className="group-hover:-translate-y-1 transition-transform" size={24} />
              </span>
            </a>
          </motion.div>

          {/* Stats Section with Hover Scale */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto border-t-4 border-black pt-16"
          >
            {hero.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="group cursor-default"
              >
                <div className="text-4xl md:text-6xl font-display font-black italic uppercase mb-2 group-hover:scale-110 transition-all duration-300 drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] text-black">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
