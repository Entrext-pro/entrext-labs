"use client";

import React from "react";
import { NicheCard } from "./NicheCard";
import { Niche } from "@/types";
import { motion } from "motion/react";

interface LiveNichesProps {
  niches: Niche[];
}

export const LiveNiches = ({ niches }: LiveNichesProps) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-4xl"
        >
          <h2 className="text-6xl md:text-[8rem] font-display uppercase italic font-black leading-[0.8] tracking-tighter text-black">
            Live Clusters.
          </h2>
          <p className="text-2xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-3xl mt-10 italic">
            Active clusters aligned to the 2026 architecture, already shipping across B2B, B2C, and Hybrid/Prosumer markets.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-black text-white p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,255,255,0.4)] rotate-3"
        >
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-yellow-400">STATUS</p>
          <p className="text-3xl font-display uppercase italic font-black tracking-tight">Active & Shipping</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {niches.map((niche, i) => (
          <NicheCard key={niche.id} niche={niche} index={i} isLive />
        ))}
      </div>
    </>
  );
};


