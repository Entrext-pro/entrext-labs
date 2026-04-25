"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Beaker, Rocket } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export const Hero = () => {
  const { hero } = siteContent.home;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-cyan/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-lime/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs md:text-sm font-black uppercase tracking-[0.4em] text-electric-cyan mb-8 animate-pulse-soft">
            {hero.eyebrow}
          </p>
        </motion.div>

        <motion.h1 
          className="font-display text-5xl md:text-8xl lg:text-[9rem] leading-[0.85] uppercase font-black tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {hero.headline[0]}
          <br />
          <span className="text-gradient-cyan">{hero.headline[1]}</span>
        </motion.h1>

        <motion.div
          className="mt-10 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white/90">
            {hero.subheadline}
          </h2>
          <p className="text-base md:text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href={hero.ctas[0].href} className="btn-primary group">
            <span className="flex items-center gap-3">
              {hero.ctas[0].label} <Beaker className="group-hover:rotate-12 transition-transform" size={20} />
            </span>
          </a>
          <a href={hero.ctas[1].href} className="btn-secondary group">
            <span className="flex items-center gap-3">
              {hero.ctas[1].label} <Rocket className="group-hover:-translate-y-1 transition-transform" size={20} />
            </span>
          </a>
        </motion.div>

        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {hero.stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-3xl md:text-5xl font-black text-white group-hover:text-electric-cyan transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-muted uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
