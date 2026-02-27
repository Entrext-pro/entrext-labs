"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Flame, Smile, Sparkles, ArrowUpRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-48 pb-32 overflow-hidden">
    {/* Background Marquee */}
    <div className="absolute top-20 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none -rotate-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[6rem] md:text-[12rem] font-display font-black uppercase italic mr-20">HIGH_VELOCITY_PRODUCTION_UNIT</span>
        ))}
      </div>
    </div>

    {/* Floating Stickers */}
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [-5, -8, -5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-48 left-[8%] hidden lg:block z-20"
    >
      <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-8">
        <Smile size={60} strokeWidth={3} className="text-black" />
      </div>
    </motion.div>

    <motion.div
      animate={{ y: [0, 20, 0], rotate: [12, 15, 12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-72 right-[8%] hidden lg:block z-20"
    >
      <div className="bg-yellow-400 border-4 border-black p-5 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-15">
        <Sparkles size={40} strokeWidth={3} className="text-black" />
      </div>
    </motion.div>

    <motion.div
      animate={{ x: [0, 10, 0], rotate: [-10, -12, -10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-72 right-[12%] hidden lg:block z-20"
    >
      <div className="bg-black text-white border-4 border-black px-6 py-3 rounded-xl shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] -rotate-12 font-display text-xl font-black italic uppercase">
        SHIPPING_NOW
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
      className="text-center z-10 max-w-7xl relative"
    >
      <div className="inline-flex items-center gap-3 px-6 py-2 rounded-xl bg-black text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em] mb-16 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] border-2 border-yellow-400/20">
        <Flame size={16} className="text-yellow-400 animate-pulse" />
        <span>System_Status: Operational</span>
      </div>

      <h1 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] md:leading-[0.75] mb-12 uppercase italic font-black tracking-tighter group cursor-default">
        <span className="inline-block transition-transform group-hover:-translate-y-4 group-hover:-rotate-2 duration-300">WE BUILD.</span> <br />
        <span className="text-white drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] inline-block transition-transform group-hover:translate-x-4 group-hover:rotate-2 duration-300">WE SHIP.</span> <br />
        <span className="inline-block transition-transform group-hover:translate-y-4 group-hover:-rotate-1 duration-300 underline decoration-yellow-400 decoration-4 underline-offset-15">WE SCALE.</span>
      </h1>

      <div className="space-y-8 mb-24 mt-20">
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.6em] opacity-40">
          // THE HIGH-VELOCITY MICRO-SAAS FACTORY //
        </p>
        <p className="text-sm sm:text-base md:text-xl font-bold leading-tight max-w-3xl mx-auto px-4 opacity-80">
          Entrext Labs is a production unit that <span className="bg-black text-white px-3 py-1 -rotate-1 inline-block">ships 5 products every week</span>. We turn market friction into functional software at terminal velocity.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        <Link href="/products" className="btn-primary w-full sm:w-auto text-base md:text-xl px-6 py-4 md:px-12 md:py-6 group relative overflow-hidden">
          <span className="relative z-10 flex items-center gap-4">
            Explore Ecosystem <ArrowUpRight size={24} strokeWidth={3} />
          </span>
        </Link>
        <Link href="/teams" className="btn-secondary w-full sm:w-auto text-base md:text-xl px-6 py-4 md:px-12 md:py-6 flex items-center justify-center gap-4">
          The Manifesto <Zap size={24} strokeWidth={3} />
        </Link>
      </div>
    </motion.div>

    <div className="mt-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full px-6">
      {[
        { label: "Active Units", value: "05", color: "bg-blue-400", sub: "READY" },
        { label: "Weekly Target", value: "05", color: "bg-emerald-400", sub: "SHIPS" },
        { label: "Products Shipped", value: "200+", color: "bg-white", sub: "LIVE" },
        { label: "Vibe Check", value: "Elite", color: "bg-rose-400", sub: "PUBLIC" }
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1 }}
          whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3, y: -10 }}
          className={`sticker-card ${stat.color} flex flex-col items-center text-center py-8 px-4 md:py-12 md:px-8 border-4 border-black relative overflow-hidden group`}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-black/10 group-hover:h-full transition-all duration-500" />
          <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40 relative z-10">{stat.label}</p>
          <p className="text-3xl md:text-5xl font-display uppercase italic font-black relative z-10">{stat.value}</p>
          <div className="mt-4 bg-black text-white px-3 py-1 rounded-lg font-mono text-[8px] font-black uppercase tracking-widest relative z-10">
            {stat.sub}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
