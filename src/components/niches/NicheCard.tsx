"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Niche } from "@/types";

interface NicheCardProps {
  niche: Niche;
  index: number;
  isLive?: boolean;
}

export const NicheCard = ({ niche, index, isLive = true }: NicheCardProps) => {
  const router = useRouter();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className={`lab-card p-8 flex flex-col h-full min-h-[380px] border-white/10 ${!isLive ? "opacity-50" : ""}`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="w-14 h-14 bg-electric-cyan/10 border border-electric-cyan/20 rounded-xl flex items-center justify-center font-display text-2xl font-black text-electric-cyan">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="bg-white/5 text-white/60 px-3 py-1 rounded-full border border-white/10 font-mono text-[10px] font-black uppercase">
          {niche.marketLayer}
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-display uppercase font-black leading-tight mb-3 text-white">
        {niche.title}
      </h3>
      <p className="font-mono text-[10px] uppercase font-black text-electric-cyan/40 tracking-widest">
        {niche.cluster}
      </p>
      <p className="text-sm md:text-base font-bold leading-relaxed mt-6 flex-1 text-muted">
        {niche.desc}
      </p>

      <button
        onClick={() => router.push(`/niches/${niche.id}`)}
        className="btn-primary mt-10 w-full group"
      >
        <span className="flex items-center justify-center gap-3">
          View Products <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </button>
    </motion.article>
  );
};


