import React from "react";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

export const TheModel = () => {
  const { usp } = siteContent.home;
  const icons = [Zap, Users, CheckCircle2];

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-widest text-black/50 mb-4"
          >
            {usp.eyebrow}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-8xl font-display uppercase italic font-black tracking-tighter max-w-5xl leading-[0.85] text-black"
          >
            {usp.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {usp.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="sticker-card p-10 group bg-white border-4 border-black flex flex-col items-start hover:bg-black hover:text-white transition-all duration-500"
              >
                <div className="w-16 h-16 bg-yellow-400 border-4 border-black flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                  <Icon size={32} strokeWidth={3} className="text-black" />
                </div>
                <h3 className="text-3xl font-display uppercase italic font-black tracking-tight mb-4 text-black group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg font-bold leading-tight opacity-70 text-black group-hover:text-white group-hover:opacity-100 transition-all">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
