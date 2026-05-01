"use client";

import React from "react";
import { LiveNiches } from "../components/niches/LiveNiches";
import { ComingSoonNiches } from "../components/niches/ComingSoonNiches";
import { liveNiches, comingSoonNiches } from "../data/niches";

export const Niches = () => {
  return (
    <div className="pt-32 pb-40 bg-yellow-400">
      <section className="py-24 md:py-36 px-6 md:px-8 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <div className="mb-24">
          <p className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/50 mb-4">
            STRATEGIC MARKET MAPPING
          </p>
          <h1 className="text-5xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black">
            Market Architecture.
          </h1>
          <p className="mt-10 text-2xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-3xl">
            Products are mapped across high-signal layers with focused clusters to ensure compounding distribution and technical moat.
          </p>
        </div>
        <div className="space-y-32">
          <LiveNiches niches={liveNiches} />
          <ComingSoonNiches niches={comingSoonNiches} liveNichesCount={liveNiches.length} />
        </div>
      </section>
    </div>
  );
};


