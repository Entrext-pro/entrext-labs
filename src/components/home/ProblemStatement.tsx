import React from "react";
import { siteContent } from "@/data/siteContent";
import { XCircle, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export const ProblemStatement = () => {
  const { problem } = siteContent.home;

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-widest text-red-600 mb-4"
          >
            {problem.eyebrow}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black"
          >
            {problem.title}
          </motion.h2>
          <p className="mt-10 text-2xl md:text-4xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-4xl italic">
            {problem.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {problem.items.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="sticker-card p-10 bg-white border-4 border-black flex flex-col items-start group hover:bg-black hover:text-white transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-100 border-4 border-red-600 flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:scale-110 transition-all">
                <XCircle size={28} className="text-red-600 group-hover:text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display uppercase italic font-black tracking-tight mb-4 text-black group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-lg font-bold leading-tight opacity-70 text-black group-hover:text-white group-hover:opacity-100 transition-all">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-24 border-t-8 border-black text-center">
          <div className="inline-flex items-center gap-6 text-black mb-12 animate-float">
             <ArrowDown size={48} strokeWidth={4} />
          </div>
          <p className="text-3xl md:text-6xl font-display uppercase italic font-black tracking-tighter max-w-5xl mx-auto leading-none text-black">
            {problem.closing}
          </p>
          <p className="mt-12 font-mono text-xs font-black tracking-[0.5em] text-black/30 uppercase">
            {problem.signature}
          </p>
        </div>
      </div>
    </section>
  );
};


