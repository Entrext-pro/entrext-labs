"use client";

import React from 'react';
import { NicheCard } from './NicheCard';
import { Niche } from '@/types';

interface LiveNichesProps {
  niches: Niche[];
}

export const LiveNiches = ({ niches }: LiveNichesProps) => {
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
          <NicheCard key={niche.id} niche={niche} index={i} isLive={true} />
        ))}
      </div>
    </>
  );
};
