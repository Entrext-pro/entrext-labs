"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { motion } from "motion/react";

export const CoreValues = () => {
  const { sevenCs } = siteContent.home;

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg-dark opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-widest text-black/50 mb-4"
          >
            {sevenCs.eyebrow}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black"
          >
            {sevenCs.title}
          </motion.h2>
          <p className="mt-8 text-2xl md:text-4xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-4xl italic">
            {sevenCs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sevenCs.items.map((item, idx) => (
            <motion.div 
              key={item.code} 
              className="sticker-card p-8 group bg-white border-4 border-black hover:bg-black hover:text-white transition-all duration-300"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="font-mono text-5xl font-black text-black/10 group-hover:text-yellow-400 transition-colors mb-6 italic">
                {item.code}
              </div>
              <h3 className="text-2xl font-display uppercase italic font-black tracking-tight mb-4 text-black group-hover:text-white transition-colors">
                {item.label}
              </h3>
              <p className="font-bold leading-tight opacity-70 text-sm text-black group-hover:text-white transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


