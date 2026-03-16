"use client";

import React from 'react';
import { LiveNiches } from '../components/niches/LiveNiches';
import { ComingSoonNiches } from '../components/niches/ComingSoonNiches';
import { liveNiches, comingSoonNiches } from '../data/niches';

export const Niches = () => {
  return (
    <div className="pt-32 pb-40 bg-yellow-400">
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-10">The_Niches.</h1>
          <p className="text-base md:text-xl font-bold leading-tight max-w-2xl mx-auto opacity-60">
            Strategic market verticals where we deploy our production units.
          </p>
        </div>
        <LiveNiches niches={liveNiches} />
        <ComingSoonNiches niches={comingSoonNiches} liveNichesCount={liveNiches.length} />
      </section>
    </div>
  );
};

