"use client";

import React from "react";
import { NicheCard } from "./NicheCard";
import { Niche } from "@/types";

interface LiveNichesProps {
  niches: Niche[];
}

export const LiveNiches = ({ niches }: LiveNichesProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <div className="max-w-4xl">
          <h2 className="text-5xl sm:text-7xl md:text-[8rem] font-display uppercase font-black leading-[0.8] mb-6 tracking-tighter text-white">
            Live Clusters.
          </h2>
          <p className="text-lg md:text-2xl font-bold leading-relaxed max-w-3xl mt-6 text-muted">
            Active clusters aligned to the 2026 architecture, already shipping across B2B, B2C, and Hybrid/Prosumer markets.
          </p>
        </div>
        <div className="bg-electric-cyan text-black p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,245,255,0.2)]">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">Status</p>
          <p className="text-2xl font-display uppercase font-black tracking-tight">Active & Shipping</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-32">
        {niches.map((niche, i) => (
          <NicheCard key={niche.id} niche={niche} index={i} isLive />
        ))}
      </div>
    </>
  );
};


