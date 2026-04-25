"use client";

import React from "react";
import { LiveNiches } from "../components/niches/LiveNiches";
import { ComingSoonNiches } from "../components/niches/ComingSoonNiches";
import { liveNiches, comingSoonNiches } from "../data/niches";

export const Niches = () => {
  return (
    <div className="pt-32 pb-40 bg-[#0A0A0B]">
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <p className="font-mono text-xs font-black uppercase tracking-[0.4em] text-neon-lime mb-4">
            STRATEGIC MARKET MAPPING
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-display uppercase font-black leading-[0.9] tracking-tighter mb-8 text-white">
            Market Architecture.
          </h1>
          <p className="text-base md:text-xl font-bold leading-relaxed max-w-3xl mx-auto text-muted">
            Products are mapped across high-signal layers with focused clusters to ensure compounding distribution and technical moat.
          </p>
        </div>
        <LiveNiches niches={liveNiches} />
        <ComingSoonNiches niches={comingSoonNiches} liveNichesCount={liveNiches.length} />
      </section>
    </div>
  );
};


