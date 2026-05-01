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
      className={`sticker-card p-10 flex flex-col h-full min-h-[420px] bg-white border-4 border-black hover:bg-black hover:text-white transition-all duration-300 group ${!isLive ? "opacity-50 grayscale" : ""}`}
    >
      <div className="flex items-center justify-between mb-10">
        <div className="w-16 h-16 bg-yellow-400 border-4 border-black flex items-center justify-center font-display text-3xl italic font-black text-black group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="bg-black text-white px-4 py-2 font-mono text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] group-hover:bg-white group-hover:text-black">
          {niche.marketLayer}
        </div>
      </div>

      <h3 className="text-3xl md:text-4xl font-display uppercase italic font-black leading-none mb-4 text-black group-hover:text-white transition-colors">
        {niche.title}
      </h3>
      <p className="font-mono text-[10px] uppercase font-black text-black/40 group-hover:text-yellow-400 tracking-[0.3em] italic">
        {niche.cluster}
      </p>
      <p className="text-lg font-bold leading-tight mt-8 flex-1 opacity-70 text-black group-hover:text-white transition-colors">
        {niche.desc}
      </p>

      <button
        onClick={() => router.push(`/niches/${niche.id}`)}
        className="btn-primary mt-12 w-full py-5 bg-black text-white border-4 border-black group-hover:bg-white group-hover:text-black transition-all"
      >
        <span className="flex items-center justify-center gap-3">
          Explore Products <ArrowUpRight size={24} strokeWidth={3} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </button>
    </motion.article>
  );
};


