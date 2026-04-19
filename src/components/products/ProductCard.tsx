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
      whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
      className="sticker-card p-8 flex flex-col h-full relative group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="absolute top-0 right-0 bg-black text-yellow-400 px-4 py-2 border-b-4 border-l-4 border-black font-mono uppercase font-black text-[10px]">
        {product.marketLayer}
      </div>

      <div className="mb-10">
        <div className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50 mb-3">{product.cluster}</div>
        <h3 className="text-2xl md:text-3xl font-display uppercase italic font-black leading-tight mb-4 tracking-tighter">
          {product.canonicalLabel ?? product.name}
        </h3>
        <p className="text-sm md:text-base font-bold leading-tight opacity-70">{product.desc}</p>
      </div>

      <div className="mt-auto pt-6 border-t-4 border-black flex items-center justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50">{product.url}</p>
          <p className="text-[11px] font-black uppercase">Built by: {product.builder}</p>
        </div>
        <a
          href={`https://${product.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all border-4 border-black"
        >
          <ArrowUpRight size={20} strokeWidth={3} />
        </a>
      </div>
    </motion.div>
  );
};

