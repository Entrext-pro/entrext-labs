"use client";

import React from "react";
import { LiveNiches } from "../components/niches/LiveNiches";
import { ComingSoonNiches } from "../components/niches/ComingSoonNiches";
import { liveNiches, comingSoonNiches } from "../data/niches";

export const Niches = () => {
  return (
    <div className="pt-32 pb-40 bg-yellow-400">
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] tracking-tighter mb-8">Market Architecture.</h1>
          <p className="text-base md:text-xl font-bold leading-tight max-w-3xl mx-auto opacity-70">
            Entrext products are mapped across B2B, B2C, and Hybrid/Prosumer layers with focused clusters for stronger execution.
          </p>
        </div>
        <LiveNiches niches={liveNiches} />
        <ComingSoonNiches niches={comingSoonNiches} liveNichesCount={liveNiches.length} />
      </section>
    </div>
  );
};

