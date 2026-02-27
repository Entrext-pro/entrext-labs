import React from 'react';
import { motion } from 'motion/react';

export const ProblemStatement = () => (
  <section id="thesis" className="py-32 md:py-56 px-6 bg-black text-white relative z-10 border-t-8 border-black">
    <div className="max-w-6xl mx-auto text-center space-y-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-8"
      >
        <div className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-mono text-[10px] font-black uppercase tracking-[0.3em] border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
          THE_PROBLEM
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter">
          Traditional software <br /> 
          <span className="text-yellow-400">is too slow.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 border-4 border-white/10 rounded-[2.5rem] bg-white/5 relative group hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          <div className="absolute -top-6 -left-6 w-14 h-14 bg-white text-black border-4 border-black rounded-2xl flex items-center justify-center font-display text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">01</div>
          <p className="text-xl md:text-3xl font-black leading-tight text-left">
            Analysis Paralysis <br />
            <span className="text-[10px] font-mono uppercase opacity-40 block mt-8 leading-relaxed font-black tracking-widest">
              Companies spend months <br className="hidden md:block" /> planning, zero time shipping.
            </span>
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 border-4 border-white/10 rounded-[2.5rem] bg-white/5 relative group hover:bg-yellow-400 hover:text-black transition-all duration-300"
        >
          <div className="absolute -top-6 -right-6 w-14 h-14 bg-white text-black border-4 border-black rounded-2xl flex items-center justify-center font-display text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">02</div>
          <p className="text-xl md:text-3xl font-black leading-tight text-left md:text-right">
            Bloated Features <br />
            <span className="text-[10px] font-mono uppercase opacity-40 block mt-8 leading-relaxed font-black tracking-widest">
              Building things nobody <br className="hidden md:block" /> actually wants or needs.
            </span>
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="pt-32 space-y-16 border-t-4 border-white/5"
      >
        <div className="space-y-8">
          <p className="text-2xl sm:text-4xl md:text-6xl font-display uppercase italic font-black leading-none">
            We solve friction <br className="hidden md:block" />
            with <span className="text-yellow-400">atomic solutions.</span>
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-10">
          <p className="text-base md:text-2xl font-bold leading-tight opacity-60">
            We don't build platforms. We build tools that solve one specific problem perfectly. 
            Then we do it again. And again.
          </p>
          <div className="inline-block bg-white/5 px-6 py-2 rounded-lg font-mono text-[8px] font-black uppercase tracking-[0.3em] border-2 border-white/10">
            The Entrext Method // 2026
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
