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
      whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
      className={`sticker-card p-8 flex flex-col h-full min-h-[380px] bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${!isLive ? "opacity-70" : ""}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 bg-yellow-400 border-4 border-black rounded-xl flex items-center justify-center font-display text-2xl font-black">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="bg-black text-white px-3 py-1 rounded-full font-mono text-[10px] font-black uppercase">
          {niche.marketLayer}
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-display uppercase italic font-black leading-tight mb-3">{niche.title}</h3>
      <p className="font-mono text-[10px] uppercase font-black opacity-50">{niche.cluster}</p>
      <p className="text-sm md:text-base font-bold leading-tight mt-4 flex-1 opacity-70">{niche.desc}</p>

      <button
        onClick={() => router.push(`/niches/${niche.id}`)}
        className="btn-primary mt-6 w-full flex items-center justify-center gap-3 text-base py-3"
      >
        View Products <ArrowUpRight size={20} strokeWidth={3} />
      </button>
    </motion.article>
  );
};

