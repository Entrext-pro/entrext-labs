"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="lab-card p-8 flex flex-col h-full relative group border-white/10"
    >
      <div className="absolute top-0 right-0 bg-electric-cyan text-black px-4 py-2 rounded-bl-2xl font-mono uppercase font-black text-[10px] shadow-[0_0_15px_rgba(0,245,255,0.2)]">
        {product.marketLayer}
      </div>

      <div className="mb-10">
        <div className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3">
          {product.cluster}
        </div>
        <h3 className="text-2xl md:text-3xl font-display uppercase font-black leading-tight mb-4 tracking-tight text-white group-hover:text-electric-cyan transition-colors">
          {product.canonicalLabel ?? product.name}
        </h3>
        <p className="text-sm md:text-base font-bold leading-relaxed text-muted">
          {product.desc}
        </p>
      </div>

      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest text-white/40">
            {product.url}
          </p>
          <p className="text-[10px] font-black uppercase text-electric-cyan/60">
            Built by: {product.builder}
          </p>
        </div>
        <a
          href={`https://${product.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/5 text-white rounded-xl flex items-center justify-center hover:bg-electric-cyan hover:text-black transition-all border border-white/10 group-hover:border-electric-cyan/50"
        >
          <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
};


