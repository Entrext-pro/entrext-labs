"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Niche {
  title: string;
  desc: string;
  color: string;
}

interface LiveNichesProps {
  niches: Niche[];
}

export const LiveNiches = ({ niches }: LiveNichesProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8 md:gap-12">
        <div className="max-w-4xl">
          <h2 className="text-5xl sm:text-7xl md:text-[9rem] font-display uppercase italic font-black leading-[0.8] mb-6 md:mb-8 tracking-tighter">Live Niches.</h2>
          <p className="text-lg md:text-3xl font-bold leading-tight max-w-3xl mt-6 md:mt-8 opacity-60">
            These are the verticals we are currently dominating.
            <span className="text-black underline decoration-4 underline-offset-8"> Each niche is led by an elite team.</span>
          </p>
        </div>
        <div className="bg-black text-white p-6 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] self-start md:self-auto border-4 border-black">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-2 opacity-40">Status</p>
          <p className="text-2xl md:text-4xl font-display uppercase italic font-black">Active & Shipping</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-32 md:mb-40">
        {niches.map((niche, i) => (
          <motion.div
            key={niche.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
            className="sticker-card p-8 md:p-10 flex flex-col h-full min-h-[350px] md:min-h-[400px] relative group bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-400 border-4 border-black rounded-2xl flex items-center justify-center font-display text-2xl md:text-4xl font-black shadow-sticker-hover">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex items-center gap-2 bg-black text-white px-4 md:px-6 py-2 rounded-full shadow-lg">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-emerald-400 rounded-full border-2 border-black animate-pulse" />
                <span className="font-mono text-[8px] md:text-[10px] font-black uppercase tracking-widest">LIVE_NODE</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase italic font-black leading-[0.9] mb-6 md:mb-8 tracking-tighter">{niche.title}</h3>
            <p className="text-lg md:text-xl font-bold leading-tight mb-8 md:mb-10 flex-1 opacity-60">
              {niche.desc}
            </p>

            <div className="pt-6 md:pt-8 border-t-4 border-black flex items-center justify-between">
              <button
                onClick={() => router.push('/products')}
                className="btn-primary w-full flex items-center justify-center gap-4 text-lg md:text-xl py-4 md:py-5"
              >
                View Products <ArrowUpRight size={28} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};
