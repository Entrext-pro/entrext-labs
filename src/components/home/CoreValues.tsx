"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { motion } from "motion/react";

export const CoreValues = () => {
  const { sevenCs } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-obsidian relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-neon-lime mb-4">
            {sevenCs.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter">
            {sevenCs.title}
          </h2>
          <p className="mt-6 text-xl md:text-2xl font-bold text-muted">
            {sevenCs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {sevenCs.items.map((item, idx) => (
            <motion.div 
              key={item.code} 
              className="glow-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="font-mono text-3xl font-black text-neon-lime/20 group-hover:text-neon-lime transition-colors">
                {item.code}
              </span>
              <h3 className="mt-4 text-2xl font-display uppercase font-black tracking-tight text-white">
                {item.label}
              </h3>
              <p className="mt-4 text-muted leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


